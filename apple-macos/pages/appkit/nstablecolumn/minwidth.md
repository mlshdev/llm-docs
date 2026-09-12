> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/minwidth](https://developer.apple.com/documentation/appkit/nstablecolumn/minwidth)

# minWidth (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s minimum width, in points.

## Declaration

```swift
var minWidth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `10.0`.

The table column width can’t be less than the value of this property, whether the column is resized by the user or programmatically. If the table column’s current width is less than the value of this property, the width is set to the value of this property.

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.
- [sizeToFit()](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.

# minWidth (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The table column’s minimum width, in points.

## Declaration

```objectivec
@property CGFloat minWidth;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is `10.0`.

The table column width can’t be less than the value of this property, whether the column is resized by the user or programmatically. If the table column’s current width is less than the value of this property, the width is set to the value of this property.

## See Also

### Controlling Size

- [width](width.md): The table column’s width, in points.
- [maxWidth](maxwidth.md): The table column’s maximum width, in points.
- [resizingMask](resizingmask.md): The table column’s resizing mask.
- [sizeToFit](sizetofit%28%29.md): Resizes the table column to fit the width of its header cell.
