import { app } from "electron"
import { join } from "path"
import { configure, createRemixBrowserWindow } from "remix-electron"

app.on("ready", async () => {
  await configure()

  const win = await createRemixBrowserWindow({
    initialRoute: "/",
    icon: join(__dirname, "../public/icon.png"),
    show: false,
  })

  if (!win.isVisible()) {
    win.once("ready-to-show", () => win.show())
  }

  if (process.env.NODE_ENV === "development") {
    win.webContents.openDevTools()
  }
})
