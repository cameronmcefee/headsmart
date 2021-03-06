# Welcome to Headsmart

Headsmart is a jQuery plugin which applies header hierarchy dynamically based on which headers are present.

When building templates, we can't put faith in our users that they'll choose the header tag hierarchy that we prefer. While we'd love to assume that they'd know we'd like them to start with an `<h3>`, more likely they'll start with an `<h1>`. This is where Headsmart comes in.

Headsmart looks at the element you supply it, and assigns header classes levels 1 – 6 to the header tags that are actually present. That means that the largest header will still look like your level 1 header whether it's a `<h1>` or `<h3>`.

## Usage

1. Since you will be styling your headers with classes rather than their actual elements, you'll want to use come kind of [css reset](http://meyerweb.com/eric/tools/css/reset/) to get all your headers looking the same.

2. Now that your css is all equal, simply use headsmart on the element containing your content. Headsmart only looks for direct children of the element supplied, so nested headers will not be effected
`$('#site-content').headsmart()`

3. Style the classes generated by headsmart as you please:
`.header-level-1`
`.header-level-2`
`.header-level-3`
`.header-level-4`
`.header-level-5`
`.header-level-6`

![](http://share.cameronmcefee.com/screencap/Headsmart_Demo-20120207-154105.png)