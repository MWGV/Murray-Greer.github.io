/* ********** Menu ********** */
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".menu");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".menu a")) return false;

    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/* ********** ContactForm ********** */
((d) => {
  const $form = d.querySelector(".contact-form"),
    $loader = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/murraywgreerv@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
{
  ("version");
  "0.2.0",
    "configurations:"[
      {
        // configuration type, request  and name. "launch" is used to deploy the app
        // to your device and start a debugging session.
        type: "android",
        request: "launch",
        name: "Launch App",

        // Location of the App source files. This value must point to the root of
        // your App source tree (containing AndroidManifest.xml).
        appSrcRoot: "${workspaceRoot}/app/src/main",

        // Fully qualified path to the built APK (Android Application Package).
        apkFile: "${workspaceRoot}/app/build/outputs/apk/app-debug.apk",

        // `host:port` configuration for connecting to the ADB (Android Debug Bridge) server instance.
        // Default: localhost:5037
        adbSocket: "localhost:5037",

        // Automatically launch 'adb start-server' if not already started.
        // Default: true
        autoStartADB: true,

        // Launch behaviour if source files have been saved after the APK was built.
        // One of: [ ignore warn stop ]. Default: warn
        staleBuild: "warn",

        // Target Device ID (as indicated by 'adb devices').
        // Use this to specify which device is used for deployment
        // when multiple devices are connected.
        targetDevice: "",

        // Fully qualified path to the AndroidManifest.xml file compiled into the APK.
        // Default: "${appSrcRoot}/AndroidManifest.xml"
        manifestFile: "${workspaceRoot}/app/src/main/AndroidManifest.xml",

        // Custom arguments passed to the Android package manager to install the app.
        // Run 'adb shell pm' to show valid arguments. Default: ["-r"]
        pmInstallArgs: ["-r"],

        // Custom arguments passed to the Android application manager to start the app.
        // Run `adb shell am` to show valid arguments.
        // Note that `-D` is required to enable debugging.
        amStartArgs: [
          "-D",
          "--activity-brought-to-front",
          "-a android.intent.action.MAIN",
          "-c android.intent.category.LAUNCHER",
          "-n package.name/launch.activity",
        ],

        // Manually specify the activity to run when the app is started. This option is
        // mutually exclusive with "amStartArgs".
        launchActivity: ".MainActivity",

        // Time in milliseconds to wait after launching an app before attempting to attach
        // the debugger. Default: 1000ms
        postLaunchPause: 1000,

        // Set to true to output debugging logs for diagnostics.
        trace: false,
      }
    ];
}
