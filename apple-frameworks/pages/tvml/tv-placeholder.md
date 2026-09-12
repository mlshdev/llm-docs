> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/tv-placeholder](https://developer.apple.com/documentation/tvml/tv-placeholder)

# tv-placeholder

**Kind:** Article

Sets a default image for an `img` or `monogram` element.

<a id="Overview"></a>

## Overview

Here’s an example that displays the default movie image.

```xml
<lockup>
   <img style="tv-placeholder:movie" width="250" height="376" />
   <title>Movie 1</title>
</lockup>
```

<a id="Values-for-tv-placeholder"></a>

### Values for tv-placeholder

- **`monogram`**: The placeholder image appropriate for a monogram. The light themed placeholder image is:

![](https://developer.apple.com/images/com.apple.TVML/tv-placeholder-1.png)

- **`movie`**: The placeholder image appropriate for a movie. The light themed placeholder image is:

![](https://developer.apple.com/images/com.apple.TVML/tv-placeholder-2.png)

- **`music`**: The placeholder image appropriate for music. The light themed placeholder image is:

![](https://developer.apple.com/images/com.apple.TVML/tv-placeholder-3.png)

- **`podcast`**: The placeholder image appropriate for a podcast. The light themed placeholder image is:

![](https://developer.apple.com/images/com.apple.TVML/tv-placeholder-4.png)

- **`tv`**: The placeholder image appropriate for TV. The light themed placeholder image is:

![](https://developer.apple.com/images/com.apple.TVML/tv-placeholder-5.png)

<a id="Elements-that-Use-tv-placeholder"></a>

### Elements that Use tv-placeholder

- [img](img.md)
- [monogram](monogram.md)

## See Also

### Styles

- [Color Styles](color-styles.md): Provide the ability to customize an element’s color.
- [Text Styles](text-styles.md): Change the text characteristics for an element.
- [Element Shaping](element-shaping.md): Modify the size and shape of an element.
- [Element Alignment and Spacing](element-alignment-and-spacing.md): Modify the alignment and spacing between elements.
- [tv-rating-style](tv-rating-style.md): Sets the displayed image for rating a product.
- [tv-transition](tv-transition.md): Specifies how an element transitions on and off the screen.
- [tv-text-highlight-style](tv-text-highlight-style.md): Specifies how an element looks when it comes into focus.
- [tv-scrollable-bounds-inset](tv-scrollable-bounds-inset.md): Creates an unscrollable region of a specified size at the top and bottom of the stack template.
