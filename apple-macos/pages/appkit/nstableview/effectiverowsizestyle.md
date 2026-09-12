> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstableview/effectiverowsizestyle](https://developer.apple.com/documentation/appkit/nstableview/effectiverowsizestyle)

# effectiveRowSizeStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The effective row size style for the table.

## Declaration

```swift
var effectiveRowSizeStyle: NSTableView.RowSizeStyle { get }
```

<a id="Discussion"></a>

## Discussion

If the value in the [rowSizeStyle](rowsizestyle-swift.property.md) property is [NSTableView.RowSizeStyle.default](rowsizestyle-swift.enum/default.md), then this property contains the default size for this  table. The default size is currently set in System Preferences by the user.

## See Also

### Getting and Setting Row Size Styles

- [rowSizeStyle](rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.

# effectiveRowSizeStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The effective row size style for the table.

## Declaration

```objectivec
@property (readonly) NSTableViewRowSizeStyle effectiveRowSizeStyle;
```

<a id="Discussion"></a>

## Discussion

If the value in the [rowSizeStyle](rowsizestyle-swift.property.md) property is [NSTableViewRowSizeStyleDefault](rowsizestyle-swift.enum/default.md), then this property contains the default size for this  table. The default size is currently set in System Preferences by the user.

## See Also

### Getting and Setting Row Size Styles

- [rowSizeStyle](rowsizestyle-swift.property.md): The row size style (small, medium, large, or custom) used by the table view.
