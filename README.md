# 🎂 Birthday Surprise Website

A romantic, interactive birthday website. No installation, no accounts, no paid services.
Everything you will want to change is at the **top of `script.js`**.

## Folder structure

```
birthday-surprise/
│
├── index.html      (the page structure – you don't need to edit this)
├── style.css       (colors and design – optional to edit)
├── script.js       (ALL your text, names, photos, quiz – edit the top part)
├── README.md       (this guide)
│
├── images/         (put your photos here)
│   ├── photo1.jpg
│   ├── photo2.jpg
│   └── photo3.jpg ...
│
├── videos/
│   └── birthday-surprise.mp4   (optional)
│
└── audio/
    └── our-song.mp3            (optional)
```

> ⚠️ **File names must match EXACTLY.** `photo1.jpg` is not the same as `Photo1.JPG` or `photo1.jpeg`.
> Use lowercase names with no spaces. The same name must be written in `script.js`.

---

## 1. How to open and run it

1. Keep all the files and folders together in one folder.
2. Double-click `index.html`. It opens in your browser. That's it.

To edit, open `script.js` in any text editor (Notepad, or the free **VS Code**), change the text, save, and refresh the browser.

## 2. Change his name and nickname

At the top of `script.js`:

```js
boyfriendName: "HIS NAME",
girlfriendName: "YOUR NAME",
nickname: "Baby",
```

Only change the words between the quote marks. In any text you can write `{name}`, `{nickname}` or `{her}` and the website replaces them with the names above.

## 3. Change the birthday messages

Look for the sections named `OPENING SCREEN`, `WELCOME PAGE`, `LITTLE THINGS I LOVE` and `FINAL SURPRISE` in `script.js`. Each line has a short name (like `welcomeLine`) and the text in quotes. Change the text.

Optional: fill in `birthdayDate` (example `"2026-10-29"`) and `relationshipStartDate` (example `"2024-02-14"`). The welcome page will then show "X days together" and his birthday. Leave them `""` to hide them.

For the **final message**, replace the text between the backticks `` ` ` ``. Put an empty line between paragraphs.

## 4. Change the love letter

Find `letter:` in `script.js` and replace everything between the two backticks `` ` ` `` with your own letter. Press Enter for new lines. To hide the letter page completely, set it to empty, like this: `letter: "",`

## 5. Add your photos

1. Copy your pictures into the `images` folder.
2. Rename them `photo1.jpg`, `photo2.jpg`, and so on.
3. In `script.js`, find `photos:` and make the lines match your files:

```js
{ src: "images/photo1.jpg", caption: "One of my favorite memories." },
```

Add a new line for each extra photo, or delete lines you don't need (the last line has **no comma**). If a file is missing, a pretty placeholder card is shown instead. Tip: photos under 1 MB each load faster on a phone.

## 6. Add a birthday video

1. Put your video in the `videos` folder, for example `birthday-surprise.mp4`.
2. In `script.js` write: `birthdayVideo: "videos/birthday-surprise.mp4",`

It appears after he opens the final gift. It never autoplays. Leave `""` and no video player is shown. Use an `.mp4` file, ideally under 25 MB (shorter or compressed videos load faster and are easier to upload).

## 7. Add background music

1. Put your song in the `audio` folder, for example `our-song.mp3`.
2. In `script.js` write: `backgroundMusic: "audio/our-song.mp3",`

Music starts only after he taps the first button, and he can pause it with the ♪ button at the top. Leave `""` and the music button is hidden. Only use music you have the right to use.

## 8. Change the colors

At the very top of `style.css`:

```css
--bg: #0D0710;        /* main background */
--burgundy: #641B35;  /* deep red */
--pink: #FF8FB8;      /* glowing pink */
```

Change the `#` codes. Search "color picker" online to find new codes.

## 9. Edit the quiz

In `script.js`, find `quizQuestions`. Each question looks like this:

```js
{
  question: "Who is more dramatic?",
  options: ["Me", "You", "Both of us"],
  correct: 2,
  reactions: [
    "Message if he taps the 1st option",
    "Message if he taps the 2nd option",
    "Message if he taps the 3rd option"
  ]
},
```

- `correct: 0` means the first option is right, `1` the second, `2` the third, and so on.
- Use `correct: -1` if every answer should count as right.
- Write one reaction for each option, in the same order as the options.
- Add or delete whole question blocks as you like. Write `quizQuestions: [],` to hide the quiz.

## 10. Publish it for free (get a link for WhatsApp)

**Important:** I have not published your website. These are the steps for you to do.

### Option A: GitHub Pages
1. Create a free account at github.com.
2. Click **New repository**. Name it, for example, `surprise-for-him`. Choose **Public** (free GitHub Pages needs public for free accounts) and create it.
3. Click **uploading an existing file**, then drag in `index.html`, `style.css`, `script.js` **and the `images`, `videos`, `audio` folders with your files** (GitHub accepts files up to 25 MB through the browser). Click **Commit changes**.
4. Go to **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
5. After about a minute your link appears: `https://YOURUSERNAME.github.io/surprise-for-him/`. Open it on your phone to check, then send it on WhatsApp.

### Option B: Vercel
1. Create a free account at vercel.com.
2. Click **Add New → Project** and either import the GitHub repository from Option A, or use the drag-and-drop deploy for your folder.
3. Vercel gives you an `https://...vercel.app` link.

### Please read before sharing
- Photos, music, and video must be **inside your project folder and uploaded too**. Otherwise they will not show online.
- Anyone who gets the link may be able to open it. Don't include anything you wouldn't want others to see. A hard-to-guess repository name is a good idea, and you can delete the site after his birthday.
- The website doesn't collect or send any data.

## 11. Test on a phone

1. Easiest: publish it (step 10) and open the link on your phone.
2. On a computer, press **F12** in Chrome, then click the little phone/tablet icon to preview a phone-sized screen (try 360 px wide).
3. Check every page: open surprise → welcome → quiz → hearts → photos → letter → gift → replay.
4. On iPhone, music may stay silent if the phone is on silent mode.

## Something not working?

- Blank photo cards: the file name or folder doesn't match `script.js` exactly.
- Page doesn't change after editing: refresh the browser.
- Everything is broken after editing `script.js`: check for a missing quote `"`, comma `,` or backtick `` ` ``.

Made with love ❤️
