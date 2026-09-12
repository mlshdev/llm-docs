> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/width](https://developer.apple.com/documentation/appkit/nstablecolumn/width)

# width (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s width, in points.

## Declaration

```swift
var width: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `100.0`.

If the value of this property exceeds the minimum or maximum width, it’s adjusted to the appropriate limiting value.

This property posts [columnDidResizeNotification](../nstableview/columndidresizenotification.md) on behalf of the table column’s `NSTableView` and marks the table view as needing display.

## See Also

### Controlling Size

- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.
- [sizeToFit()](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.

# width (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s width, in points.

## Declaration

```objectivec
@property CGFloat width;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `100.0`.

If the value of this property exceeds the minimum or maximum width, it’s adjusted to the appropriate limiting value.

This property posts [NSTableViewColumnDidResizeNotification](../nstableview/columndidresizenotification.md) on behalf of the table column’s `NSTableView` and marks the table view as needing display.

## See Also

### Controlling Size

- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.
- [sizeToFit](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.
