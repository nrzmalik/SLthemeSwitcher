function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5hd2f9LrrsM":
        Script1();
        break;
      case "6O4hE91ngv7":
        Script2();
        break;
  }
}

function Script1()
{
  var existingLink = document.querySelector('link[href="html5/data/css/output.min.css"][data-noprefix]');
if (existingLink) {
    existingLink.setAttribute("id", "theme-stylesheet");
}
  function setTheme() {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            const themeLink = document.getElementById("theme-stylesheet");
            
            if (prefersDark) {
                themeLink.href = "dark.css";
            } else {
                themeLink.href = "light.css";
            }
        }

        setTheme();
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setTheme);
}

function Script2()
{
  const themeStylesheet = document.getElementById("theme-stylesheet");
 if (themeStylesheet.getAttribute("href") === "light.css") {
                themeStylesheet.setAttribute("href", "dark.css");
            } else {
                themeStylesheet.setAttribute("href", "light.css");
            }
}

