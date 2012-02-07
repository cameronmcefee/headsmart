# Welcome to Headsmart

Headsmart is a jQuery plugin which applies header hierarchy dynamically based on which headers are present.

When building templates, you can't put faith in the user that they'll add header tags in the hierarchy you prefer. While we'd love to assume that they'd know to start with an `<h3>`, more likely they'll start with an `<h1>`. This is where Headsmart comes in.

<<<<<<< HEAD
Headsmart looks at the element you supply it, and assigns header classes levels 1 – 6 to the header tags that are actually present. That means that the largest header will still look like your level 1 header whether it's a `<h1>` or `<h3>`.
=======
Headsmart looks at the element you supply it, and assigns header classes levels 1 – 6 to the headers that are actually present. That means that the largest header will still look like your level 1 header whether it's a `<h1>` or `<h3>`.
>>>>>>> origin/master

## Usage

1. Since you will be styling your headers with classes rather than their actual elements, you'll want to use come kind of [css reset](http://meyerweb.com/eric/tools/css/reset/) to get all your headers looking the same.

2. Now that your css is all equal, simply use headsmart on the element containing your content.
`$('#site-content').headsmart()`

3. Headsmart only looks for direct children of the element supplied, so nested headers will not be effected.

![](http://share.cameronmcefee.com/screencap/Headsmart_Demo-20120207-154105.png)