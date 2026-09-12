> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/reusescolumns](https://developer.apple.com/documentation/appkit/nsbrowser/reusescolumns)

# reusesColumns (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.

## Declaration

```swift
var reusesColumns: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the `NSMatrix` objects aren’t freed when their columns are unloaded, so they can be reused.

## See Also

### Configuring Browsers

- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile()](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.

# reusesColumns (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.

## Declaration

```objectivec
@property BOOL reusesColumns;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the `NSMatrix` objects aren’t freed when their columns are unloaded, so they can be reused.

## See Also

### Configuring Browsers

- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [tile](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.
