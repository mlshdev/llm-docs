> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/segmentbarheader](https://developer.apple.com/documentation/tvml/segmentbarheader)

# segmentBarHeader

Displays information above a segment bar.

<a id="Overview"></a>

## Overview

The `segmentBarHeader` element displays information that is used to describe the contents of a `segmentBar` element. Here’s an example that has a title and subtitle above a segment bar that contains one item.

```xml
<segmentBarHeader>
   <title>Title</title>
   <subtitle>Subtitle</subtitle>
   <segmentBar>
      <segmentBarItem>
         <title>Title</title>
      </segmentBarItem>
   </segmentBar>
</segmentBarHeader>
```

<a id="Subelements-of-segmentBarHeader"></a>

### Subelements of segmentBarHeader

- [segmentBar](segmentbar.md)
- [subtitle](subtitle.md)
- [title](title.md)

<a id="Elements-that-Use-segmentBarHeader"></a>

### Elements that Use segmentBarHeader

- [list](list.md)

## Topics

### Valid TVML Styles

- [margin](margin.md): Specifies the spacing around an element.

### Valid TVML Attributes

- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Bar Elements

- [menuBar](menubar.md): Displays menu items along the top of the screen.
- [menuItem](menuitem.md): Displays a label for an item.
- [nowPlayingMenuItem](nowplayingmenuitem.md): Displays information about currently playing audio.
- [segmentBar](segmentbar.md): Displays a list of segment bar items.
- [segmentBarItem](segmentbaritem.md): Provides titles inside of a segment bar.
- [tumblerBar](tumblerbar.md): Displays a list of `tumblerItem` elements.
- [tumblerItem](tumbleritem.md): Contains title information for a tumbler header.
