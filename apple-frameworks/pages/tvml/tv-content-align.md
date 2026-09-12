> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/tv-content-align](https://developer.apple.com/documentation/tvml/tv-content-align)

# tv-content-align

**Kind:** Article

Aligns an element vertically inside its parent element.

<a id="Overview"></a>

## Overview

Use the `tv-content-align` style to specify how an element should be vertically aligned in its parent element.

Here’s an example that aligns an image to the top of its parent banner:

```xml
<banner>
  <img style="tv-content-align:top" src="" />
</banner>
```

<a id="Values"></a>

### Values

- **`top`**: The element aligns along the top edge of the parent element.
- **`center`**: The element aligns with the center of the parent element.
- **`bottom`**: The element aligns along the bottom edge of the parent element.

<a id="Elements-that-Use-text-align"></a>

### Elements that Use text-align

- [shelf](shelf.md)
- [grid](grid.md)
- [row](row.md)

## See Also

### Element Alignment

- [text-align](text-align.md): Aligns text horizontally in an element.
- [tv-align](tv-align.md): Aligns an element horizontally inside its parent.
- [tv-position](tv-position.md): Sets the position of an element inside of its parent element.
