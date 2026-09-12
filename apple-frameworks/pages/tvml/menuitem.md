> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvml/menuitem](https://developer.apple.com/documentation/tvml/menuitem)

# menuItem

**Kind:** Article

Displays a label for an item.

<a id="Overview"></a>

## Overview

One or more `menuItem` elements are used inside of a `menuBar` element to indicate the available elements. Here’s an example with two items inside of a menu bar.

```xml
<menuBar>
   <menuItem id="navigation_top_movies" data-identifier="list">
      <title>Top Movies</title>
   </menuItem>
   <menuItem id="navigation_genres" data-identifier="index">
      <title>Genres</title>
   </menuItem>
</menuBar>
```

<a id="Subelements-of-menuItem"></a>

### Subelements of menuItem

- [title](title.md)

<a id="Elements-that-Use-menuItem"></a>

### Elements that Use menuItem

- [menuBar](menubar.md)
- [section](section.md)

## See Also

### Bar Elements

- [menuBar](menubar.md): Displays menu items along the top of the screen.
- [nowPlayingMenuItem](nowplayingmenuitem.md): Displays information about currently playing audio.
- [segmentBar](segmentbar.md): Displays a list of segment bar items.
- [segmentBarHeader](segmentbarheader.md): Displays information above a segment bar.
- [segmentBarItem](segmentbaritem.md): Provides titles inside of a segment bar.
- [tumblerBar](tumblerbar.md): Displays a list of `tumblerItem` elements.
- [tumblerItem](tumbleritem.md): Contains title information for a tumbler header.
