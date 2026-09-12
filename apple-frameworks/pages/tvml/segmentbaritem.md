> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/segmentbaritem](https://developer.apple.com/documentation/tvml/segmentbaritem)

# segmentBarItem

Provides titles inside of a segment bar.

<a id="Overview"></a>

## Overview

The `segmentBarItem` element is used to create groups inside of a `segmentBarHeader`. Users can move between `segmentBarItem` elements to display related information. Here’s an example that has a title and subtitle above a segment bar that contains one item.

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

<a id="Subelements-of-segmentBarItem"></a>

### Subelements of segmentBarItem

- [title](title.md)

<a id="Elements-that-Use-segmentBarItem"></a>

### Elements that Use segmentBarItem

- [segmentBarHeader](segmentbarheader.md)

## Topics

### Valid TVML Attributes

- [autoHighlight](autohighlight.md): Specifies that the element should initially be in focus.
- [binding](binding.md): Associates information in a data item with an element.
- [prototype](prototype.md): Associates a data item type with an element.
- [theme](theme.md): Sets the color scheme for an element.

## See Also

### Bar Elements

- [menuBar](menubar.md): Displays menu items along the top of the screen.
- [menuItem](menuitem.md): Displays a label for an item.
- [nowPlayingMenuItem](nowplayingmenuitem.md): Displays information about currently playing audio.
- [segmentBar](segmentbar.md): Displays a list of segment bar items.
- [segmentBarHeader](segmentbarheader.md): Displays information above a segment bar.
- [tumblerBar](tumblerbar.md): Displays a list of `tumblerItem` elements.
- [tumblerItem](tumbleritem.md): Contains title information for a tumbler header.
