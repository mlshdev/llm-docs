> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/rowsizestyle](https://developer.apple.com/documentation/appkit/nstablecellview/rowsizestyle)

# rowSizeStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the row size style.

## Declaration

```swift
var rowSizeStyle: NSTableView.RowSizeStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The `rowSizeStyle` property is set by the `NSTableView` to its [effectiveRowSizeStyle](../nstableview/effectiverowsizestyle.md). The cell view will layout the [textField](textfield.md) and [imageView](imageview.md) based on the `rowSizeStyle`.

A value of [NSTableView.RowSizeStyle.default](../nstableview/rowsizestyle-swift.enum/default.md) should never be set on the cell view, as it is an appropriate value only for the table as it returns the effective row size style for the table.

# rowSizeStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Returns the row size style.

## Declaration

```objectivec
@property NSTableViewRowSizeStyle rowSizeStyle;
```

<a id="Discussion"></a>

## Discussion

The `rowSizeStyle` property is set by the `NSTableView` to its [effectiveRowSizeStyle](../nstableview/effectiverowsizestyle.md). The cell view will layout the [textField](textfield.md) and [imageView](imageview.md) based on the `rowSizeStyle`.

A value of [NSTableViewRowSizeStyleDefault](../nstableview/rowsizestyle-swift.enum/default.md) should never be set on the cell view, as it is an appropriate value only for the table as it returns the effective row size style for the table.
