> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/delegate](https://developer.apple.com/documentation/appkit/nsbrowser/delegate)

# delegate (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The browser’s delegate.

## Declaration

```swift
weak var delegate: (any NSBrowserDelegate)? { get set }
```

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile()](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.

# delegate (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The browser’s delegate.

## Declaration

```objectivec
@property (weak, nullable) id<NSBrowserDelegate> delegate;
```

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
