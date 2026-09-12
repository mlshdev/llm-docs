> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/infolist](https://developer.apple.com/documentation/tvml/infolist)

# infoList

Displays `info` element information in a vertical format.

<a id="Overview"></a>

## Overview

Here’s an example that shows the director and main actors for a movie.

```xml
<infoList>
   <info>
      <header>
         <title>Director</title>
      </header>
      <text>John Appleseed</text>
   </info>
   <info>
      <header>
         <title>Actors</title>
      </header>
      <text>Anne Johnson</text>
      <text>Tom Clark</text>
      <text>Maria Ruiz</text>
   </info>
</infoList>
```

<a id="Subelements-of-infoList"></a>

### Subelements of infoList

- [info](info.md)

<a id="Elements-that-Use-infoList"></a>

### Elements that Use infoList

- [banner](banner.md)

## Topics

### Valid TVML Styles

- [height](element-shaping-height.md): Specifies the height of an element.
- [margin](margin.md): Specifies the spacing around an element.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### List Elements

- [collectionList](collectionlist.md): Contains other layout elements.
- [list](list.md): Creates a generic container.
