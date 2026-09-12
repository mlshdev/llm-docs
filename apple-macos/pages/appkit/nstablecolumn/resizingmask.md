> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/resizingmask](https://developer.apple.com/documentation/appkit/nstablecolumn/resizingmask)

# resizingMask (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s resizing mask.

## Declaration

```swift
var resizingMask: NSTableColumn.ResizingOptions { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property specifies the resizability of the table column. See [Resizing Modes](../resizing-modes.md) for possible values. Values can be combined using the C bitwise OR operator.

When the value of this property is `0`, the column is not resizable. The default value of this property is [userResizingMask](resizingoptions/userresizingmask.md) | [autoresizingMask](resizingoptions/autoresizingmask.md).

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [sizeToFit()](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.

# resizingMask (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s resizing mask.

## Declaration

```objectivec
@property NSTableColumnResizingOptions resizingMask;
```

<a id="Discussion"></a>

## Discussion

The value of this property specifies the resizability of the table column. See [Resizing Modes](../resizing-modes.md) for possible values. Values can be combined using the C bitwise OR operator.

When the value of this property is `0`, the column is not resizable. The default value of this property is [NSTableColumnUserResizingMask](resizingoptions/userresizingmask.md) | [NSTableColumnAutoresizingMask](resizingoptions/autoresizingmask.md).

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [minWidth](minwidth.md): The table column’s minimum width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [sizeToFit](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.
