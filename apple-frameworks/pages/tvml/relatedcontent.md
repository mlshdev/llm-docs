> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/relatedcontent](https://developer.apple.com/documentation/tvml/relatedcontent)

# relatedContent

Contains elements that are related to another element.

<a id="Overview"></a>

## Overview

This element is often used to display the related content when another element is brought into focus. Here’s an example that contains a `lockup` inside of a `relatedContent` element.

```xml
<relatedContent>
    <lockup>
        <img src="path to image goes here" />
        <title>Title 1</title>
    </lockup>
</relatedContent
```

<a id="Subelements-of-relatedContent"></a>

### Subelements of relatedContent

- [activityIndicator](activityindicator.md)
- [grid](grid.md)
- [heroImg](heroimg.md)
- [itemBanner](itembanner.md)
- [lockup](lockup.md)

<a id="Elements-that-Use-relatedContent"></a>

### Elements that Use relatedContent

- [list](list.md)
- [listItemLockup](listitemlockup.md)

## Topics

### Valid TVML Styles

- [height](element-shaping-height.md): Specifies the height of an element.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Related Information Elements

- [placeholder](placeholder.md): Contains elements that are not directly evaluated by the template.
