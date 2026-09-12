> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/applenewsformat/color](https://developer.apple.com/documentation/applenewsformat/color)

# Color

**Interface language:** Data

**Framework:** Apple News Format  
**Kind:** Type  
**Availability:** Apple News Format 1.7+

The strings for defining colors in Apple News Format.

## Declaration

```
string Color
```

## Mentioned In

- [Supported Color Names](../applenews/supported-color-names.md)

<a id="PossibleValues"></a>

## PossibleValues:

`/^(\#\w{3})|(\#\w{6})|(\#\w{8})|([a-z]{0,20})$/`

<a id="Discussion"></a>

## Discussion

You can define colors in different ways in Apple News Format.

<a id="3-character-RGB"></a>

### 3-character RGB

Use three characters to define red, green, and blue (RGB). For example, a value of `#c00` is short for `#cc0000` and makes red.

<a id="4-character-RGBA"></a>

### 4-character RGBA

Use four characters to define RGB and alpha (opacity). For example, a value of `#fc0a` is short for `#ffcc00aa`.

<a id="6-character-RGB"></a>

### 6-character RGB

Use six characters to define two-character values for each of red, green, and blue. For example, a value of `#0000ff` makes blue.

<a id="8-character-RGBA"></a>

### 8-character RGBA

Use eight characters to define RGBA. For example, in a value of `#000000aa`, the first six characters define RGB, and the last characters define alpha. `#00000000` represents black but fully transparent, while `#000000ff` is fully opaque.

<a id="Color-Names"></a>

### Color Names

Use any of the available color names like `red`, `lightgreen,` or `rebeccapurple`. See [Supported Color Names](../applenews/supported-color-names.md).

## See Also

### Styles

- [Enhancing Your Articles with Styles](../applenews/enhancing-your-articles-with-styles.md): Improve the appearance of the text and components in your article by using Apple News Format styles.
- [Supporting Dark Mode for Your Article](../applenews/supporting-dark-mode-for-your-article.md): Update your article template so that your article adapts when Dark Mode is active.
- [DocumentStyle](documentstyle.md): The object for setting the background color for your article.
- [Text Styles](../applenews/text-styles.md): Learn about text styles and how to apply them to your text and text components.
- [Component Styles](../applenews/component-styles.md): Learn to use component styles to add borders, set background colors, and apply background images to components and to set the styling for tables.
- [Supported Color Names](../applenews/supported-color-names.md): Learn the color names supported in Apple News Format.
