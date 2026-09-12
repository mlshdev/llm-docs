> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsbrowser/tile()](https://developer.apple.com/documentation/appkit/nsbrowser/tile())

# tile() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.

## Declaration

```swift
func tile()
```

<a id="Discussion"></a>

## Discussion

Your code shouldn’t send this message. It’s invoked any time the appearance of the browser changes.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [delegate](delegate.md): The browser’s delegate.

# tile (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adjusts the various subviews of the browser—scrollers, columns, titles, and so on—without redrawing.

## Declaration

```objectivec
- (void) tile;
```

<a id="Discussion"></a>

## Discussion

Your code shouldn’t send this message. It’s invoked any time the appearance of the browser changes.

## See Also

### Configuring Browsers

- [reusesColumns](reusescolumns.md): A Boolean that indicates whether the browser reuses matrix objects after their columns are unloaded.
- [maxVisibleColumns](maxvisiblecolumns.md): The maximum number of visible columns.
- [autohidesScroller](autohidesscroller.md): A Boolean that indicates whether the browser automatically hides its scroller.
- [backgroundColor](backgroundcolor.md): The browser’s background color.
- [minColumnWidth](mincolumnwidth.md): The minimum column width, in pixels.
- [separatesColumns](separatescolumns.md): A Boolean that indicates whether columns are separated by bezeled borders.
- [takesTitleFromPreviousColumn](takestitlefrompreviouscolumn.md): A Boolean that indicates whether a column takes its title from the selected cell in the previous column.
- [delegate](delegate.md): The browser’s delegate.
