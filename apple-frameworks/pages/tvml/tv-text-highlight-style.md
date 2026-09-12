> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/tv-text-highlight-style](https://developer.apple.com/documentation/tvml/tv-text-highlight-style)

# tv-text-highlight-style

**Kind:** Article

Specifies how an element looks when it comes into focus.

<a id="Overview"></a>

## Overview

Use the `tv-text-highlight-style` style to specify how a label reacts when it comes into focus.

<a id="Values-for-tv-text-highlight-style"></a>

### Values for tv-text-highlight-style

- **`marquee-and-show-on-highlight`**: The `text` element associated with the `lockup` element is only shown when the item is in focus. The text will scroll across the screen if the text is longer than the available space.
- **`marquee-on-highlight`**: The `text` element associated with the `lockup` element only shows the text that fits within the width of the element. Text longer than the available space is truncated. When the element is in focus, text longer than the available space is shown through scrolling.
- **`show-on-highlight`**: The `text` element associated with the `lockup` element is only shown when the item is in focus. Text longer than the available space is truncated.

<a id="Elements-that-Use-tv-text-highlight-style"></a>

### Elements that Use tv-text-highlight-style

- [subtitle](subtitle.md)
- [text](text.md)
- [title](title.md)

> **Note**

> `tv-text-highlight-style` is only applied to the above elements when they are contained in a `listItemLockup` or `lockup` element. Elements contained in a `listItemLockup` can only use the `marquee-on-highlight`.

## See Also

### Styles

- [Color Styles](color-styles.md): Provide the ability to customize an element’s color.
- [Text Styles](text-styles.md): Change the text characteristics for an element.
- [Element Shaping](element-shaping.md): Modify the size and shape of an element.
- [Element Alignment and Spacing](element-alignment-and-spacing.md): Modify the alignment and spacing between elements.
- [tv-placeholder](tv-placeholder.md): Sets a default image for an `img` or `monogram` element.
- [tv-rating-style](tv-rating-style.md): Sets the displayed image for rating a product.
- [tv-transition](tv-transition.md): Specifies how an element transitions on and off the screen.
- [tv-scrollable-bounds-inset](tv-scrollable-bounds-inset.md): Creates an unscrollable region of a specified size at the top and bottom of the stack template.
