> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/textfield](https://developer.apple.com/documentation/appkit/nstablecellview/textfield)

# textField (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Text displayed by the cell.

## Declaration

```swift
@IBOutlet unowned(unsafe) var textField: NSTextField? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is typically configured when the row is created in the [NSTableViewDelegate](../nstableviewdelegate.md) protocol method [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md).

## See Also

### Displayed Items

- [imageView](imageview.md): Image displayed by the cell.

# textField (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Text displayed by the cell.

## Declaration

```objectivec
@property (assign, nullable) NSTextField * textField;
```

<a id="Discussion"></a>

## Discussion

This property is typically configured when the row is created in the [NSTableViewDelegate](../nstableviewdelegate.md) protocol method [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md).

## See Also

### Displayed Items

- [imageView](imageview.md): Image displayed by the cell.
