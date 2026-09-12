> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/backgroundcolor](https://developer.apple.com/documentation/appkit/nsbrowser/backgroundcolor)

# backgroundColor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The browser’s background color.

## Declaration

```swift
var backgroundColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `[NSColor whiteColor]`. `[NSColor clearColor]` specifies a transparent background.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile()](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.

# backgroundColor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The browser’s background color.

## Declaration

```objectivec
@property (strong) NSColor * backgroundColor;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `[NSColor whiteColor]`. `[NSColor clearColor]` specifies a transparent background.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.
