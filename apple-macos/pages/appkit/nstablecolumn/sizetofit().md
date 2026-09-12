> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/sizetofit()](https://developer.apple.com/documentation/appkit/nstablecolumn/sizetofit())

# sizeToFit() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resizes the table column to fit the width of its header cell.

## Declaration

```swift
func sizeToFit()
```

<a id="Discussion"></a>

## Discussion

If the table column’s maximum width is less than the width of the header, the maximum is increased to the header’s width. Similarly, if the table column’s minimum width is greater than the width of the header, the minimum is reduced to the header’s width.

If this method causes the table column’s width to change, the column’s table view is marked as needing display.

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.

# sizeToFit (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Resizes the table column to fit the width of its header cell.

## Declaration

```objectivec
- (void) sizeToFit;
```

<a id="Discussion"></a>

## Discussion

If the table column’s maximum width is less than the width of the header, the maximum is increased to the header’s width. Similarly, if the table column’s minimum width is greater than the width of the header, the minimum is reduced to the header’s width.

If this method causes the table column’s width to change, the column’s table view is marked as needing display.

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.
