> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/background-color](https://developer.apple.com/documentation/tvml/background-color)

# background-color

**Kind:** Article

Changes the background color of an element.

<a id="Overview"></a>

## Overview

Here’s an example of how to change the background color of a `description` element.

```xml
<description style="background-color:rgba(0,0,255,0.3)">Light purple background</description>
```

<a id="Values-for-background-color"></a>

### Values for background-color

- **`rgb(r,g,b)`**: The background color of an element, where `r,g,b` are the red, green, and blue color components, and have a value range from `0-255`.
- **`rgba(r,g,b,a)`**: The background color of an element, where `r,g,b` are the red, green, and blue color components, and have a value range from `0-255`, and `a` is the alpha applied to the color, ranging from `0.0-1.0`.
- **`transparent`**: The background color of the element, which is transparent.

<a id="Elements-that-Use-background-color"></a>

### Elements that Use background-color

- [description](description.md)
- [ratingCard](ratingcard.md)
- [reviewCard](reviewcard.md)
- [textBadge](textbadge.md)

## See Also

### Color Styles

- [color](color.md): Changes the color of an element.
- [tv-highlight-color](tv-highlight-color.md): Changes an element’s color when it comes into focus.
- [tv-tint-color](tv-tint-color.md): Sets the tint color for an element.
