const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    viewport: {
      width: 1920, // 1280 in commit 1ee6578
      height: 1080, // 720 in commit 1ee6578
    },
  });
  const page = await context.newPage();

  await instagramLogin(page);

  await popupActions(page);

  await gainFollowers(page, "virat.kohli");
  await gainFollowers(page, "therock");
  await gainFollowers(page, "chrishemsworth");
  await gainFollowers(page, "mahi7781");
  await gainFollowers(page, "deepikapadukone");
  // await gainFollowers(page, "aliaabhatt");
  // await gainFollowers(page, "priyankachopra");
  // await gainFollowers(page, "samantharuthprabhuoffl");
  // await gainFollowers(page, "robertdownejyr");
  // await gainFollowers(page, "arianagrande");
  // await gainFollowers(page, "kyliejenner");
  // await gainFollowers(page, "leomessi");
  // await gainFollowers(page, "beyonce");
  // await gainFollowers(page, "justinbieber");
  // await gainFollowers(page, "kendalljenner");
  // await gainFollowers(page, "natgeo");
  // await gainFollowers(page, "taylorswift");
  // await gainFollowers(page, "jlo");
  // await gainFollowers(page, "neymarjr");
  // await gainFollowers(page, "nike");

  await commentOnPostsByTag(page, "nike");
  await commentOnPostsByTag(page, "SRH");
  await commentOnPostsByTag(page, "royalchallengers");
  await commentOnPostsByTag(page, "team");
  await commentOnPostsByTag(page, "ipl2021");
  await commentOnPostsByTag(page, "man");
  await commentOnPostsByTag(page, "women");
  await commentOnPostsByTag(page, "work");
  await commentOnPostsByTag(page, "follow");
  await commentOnPostsByTag(page, "support");
  await commentOnPostsByTag(page, "hate");
  await commentOnPostsByTag(page, "famous");
  await commentOnPostsByTag(page, "life");
  await commentOnPostsByTag(page, "summer");

  await commentOnPostsByTag(page, "newyork");
  await commentOnPostsByTag(page, "meme");
  await commentOnPostsByTag(page, "cat");
  await commentOnPostsByTag(page, "dog");
  await commentOnPostsByTag(page, "telugumemes");
  // await gainFollowers(page, "cristiano");
  await commentOnPostsByTag(page, "trolls");
  // await gainFollowers(page, "arianagrande");
  await commentOnPostsByTag(page, "hyderabad");
  await commentOnPostsByTag(page, "forum");
  await commentOnPostsByTag(page, "sujana");
  await commentOnPostsByTag(page, "cmr");
  await commentOnPostsByTag(page, "cmrcet");
  await commentOnPostsByTag(page, "cmrit");
  await commentOnPostsByTag(page, "mallareddy");
  await commentOnPostsByTag(page, "dhoni");
  await commentOnPostsByTag(page, "virat");
  await commentOnPostsByTag(page, "rcb");
  await commentOnPostsByTag(page, "naamde");
  await commentOnPostsByTag(page, "kiss");
  await commentOnPostsByTag(page, "family");
  await commentOnPostsByTag(page, "hype");

  await commentOnPostsByTag(page, "trollers");
  await commentOnPostsByTag(page, "hope");
  await commentOnPostsByTag(page, "comedy");
  await commentOnPostsByTag(page, "john");
  await commentOnPostsByTag(page, "marsh");
  await commentOnPostsByTag(page, "Pant");
  await commentOnPostsByTag(page, "earth");
  await commentOnPostsByTag(page, "telangana");
  await commentOnPostsByTag(page, "andhrapradesh");
  await commentOnPostsByTag(page, "AP");
  await commentOnPostsByTag(page, "KCR");
  //await gainFollowers(page, "instagram");
  await commentOnPostsByTag(page, "telugumemes");
  // await gainFollowers(page, "cristiano");
  await commentOnPostsByTag(page, "trolls");
  // await gainFollowers(page, "arianagrande");
  await commentOnPostsByTag(page, "ipl");
  // await gainFollowers(page, "therock");
  await commentOnPostsByTag(page, "memes");
  // await gainFollowers(page, "kyliejenner");
  await commentOnPostsByTag(page, "telugu");
  // await gainFollowers(page, "selenagomez");
  await commentOnPostsByTag(page, "love");
  await commentOnPostsByTag(page, "instagood");
  await commentOnPostsByTag(page, "instagram");
  await commentOnPostsByTag(page, "fashion");

  // Create pages, interact with UI elements, assert values
  await browser.close();
})();

async function commentOnPostsByTag(page, tag) {
  await page.goto("https://www.instagram.com/explore/tags/" + tag + "/");

  for (i = 1; i < 4; i++) {
    const selector =
      '//*[@id="react-root"]/section/main/article/div[1]/div/div/div[1]/div[' +
      i +
      "]/a/div/div[2]";
    await page.click(selector);
    await page.click(
      "body > div._2dDPU.CkGkG > div.zZYga > div > article > div.eo2As > section.ltpMr.Slqrh > span.fr66n > button > div > span > svg"
    );
    const disable = await page.$(".MhyEU");
    if (!disable && (await page.$(".Ypffh"))) {
      await page.fill(
        ".Ypffh",
        "Please follow @memes.movayya for best content"
      );
      await page.press(".Ypffh", "Enter");
    }
    await page.click(
      "body > div._2dDPU.CkGkG > div.Igw0E.IwRSH.eGOV_._4EzTm.BI4qX.qJPeX.fm1AK.TxciK.yiMZG > button"
    );
  }
}

async function popupActions(page) {
  await page.click(
    "#react-root > section > main > div > div > div > div > button"
  );
  await page.click(
    "body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.bIiDR"
  );
}

async function gainFollowers(page, account) {
  page.goto("https://www.instagram.com/" + account);
  if (
    await page.$(
      "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button"
    )
  ) {
    for (i = 0; i < 6; i++) {
      page.waitForTimeout(1000);
      await page.click(
        "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div > div > span > span.vBF20._1OSdk > button"
      );
      await page.click(
        "#react-root > section > main > div > header > section > div.nZSzR > div.Igw0E.IwRSH.eGOV_.ybXk5._4EzTm > div > div:nth-child(2) > div > span > span.vBF20._1OSdk > button"
      );
      await page.click(
        "body > div.RnEpo.Yx5HN > div > div > div > div.mt3GC > button.aOOlW.-Cab_"
      );
      page.waitForTimeout(1000);
    }
  }
}

async function instagramLogin(page) {
  await page.goto("https://www.instagram.com/accounts/login/");

  await page.fill(
    "#loginForm > div > div:nth-child(1) > div > label > input",
    "memes.movayya"
  );
  await page.fill(
    "#loginForm > div > div:nth-child(2) > div > label > input",
    "wearemawas"
  );
  await page.click("#loginForm > div > div:nth-child(3)");
}
