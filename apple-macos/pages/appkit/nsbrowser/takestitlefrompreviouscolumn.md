> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/takestitlefrompreviouscolumn](https://developer.apple.com/documentation/appkit/nsbrowser/takestitlefrompreviouscolumn)

# takesTitleFromPreviousColumn (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a column takes its title from the selected cell in the previous column.

## Declaration

```swift
var takesTitleFromPreviousColumn: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the title of a column is set to the string value of the selected `NSCell` in the previous column.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [tile()](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.

# takesTitleFromPreviousColumn (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A Boolean that indicates whether a column takes its title from the selected cell in the previous column.

## Declaration

```objectivec
@property BOOL takesTitleFromPreviousColumn;
```

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the title of a column is set to the string value of the selected `NSCell` in the previous column.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [tile](tile%28%29.md): Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.
- [delegate](delegate.md): The browser’s delegate.
