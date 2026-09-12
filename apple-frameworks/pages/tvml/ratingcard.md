> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/ratingcard](https://developer.apple.com/documentation/tvml/ratingcard)

# ratingCard

Contains rating information about a product.

<a id="Overview"></a>

## Overview

This element can contain information about a movie’s viewing rating or information from a rating service, such as Rotten Tomatoes. Here’s an example that shows a movie has been rated for general audiences.

```xml
<ratingCard>
    <title><ratingBadge src="resource://mpaa-g" />General Admission</title>
    <text>Text</text>
    <description>Description</description>
</ratingCard>
```

<a id="Subelements-of-ratingCard"></a>

### Subelements of ratingCard

- [description](description.md)
- [infoTable](infotable.md)
- [organizer](organizer.md)
- [ratingBadge](ratingbadge.md)
- [section](section.md)
- [text](text.md)
- [title](title.md)

<a id="Elements-that-Use-ratingCard"></a>

### Elements that Use ratingCard

- section

## Topics

### Valid TVML Styles

- [background-color](background-color.md): Changes the background color of an element.
- [border-radius](border-radius.md): Changes the shape of an element’s corner.
- [height](element-shaping-height.md): Specifies the height of an element.
- [margin](margin.md): Specifies the spacing around an element.
- [padding](padding.md): Specifies the padding between the border and contents of an element.
- [tv-align](tv-align.md): Aligns an element horizontally inside its parent.
- [tv-highlight-color](tv-highlight-color.md): Changes an element’s color when it comes into focus.
- [tv-position](tv-position.md): Sets the position of an element inside of its parent element.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Card Elements

- [card](card.md): Creates a generic element with its contained elements arranged through TVML styles.
- [reviewCard](reviewcard.md): Displays abbreviated review information for a media item.
