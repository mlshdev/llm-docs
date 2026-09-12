> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecellview/imageview](https://developer.apple.com/documentation/appkit/nstablecellview/imageview)

# imageView (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Image displayed by the cell.

## Declaration

```swift
@IBOutlet unowned(unsafe) var imageView: NSImageView? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is typically configured when the row is created in the [NSTableViewDataSource](../nstableviewdatasource.md) protocol method [tableView(\_:viewFor:row:)](../nstableviewdelegate/tableview%28__viewfor_row_%29.md).

## See Also

### Displayed Items

- [textField](textfield.md): Text displayed by the cell.

# imageView (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

Image displayed by the cell.

## Declaration

```objectivec
@property (assign, nullable) NSImageView * imageView;
```

<a id="Discussion"></a>

## Discussion

This property is typically configured when the row is created in the [NSTableViewDataSource](../nstableviewdatasource.md) protocol method [tableView:viewForTableColumn:row:](../nstableviewdelegate/tableview%28__viewfor_row_%29.md).

## See Also

### Displayed Items

- [textField](textfield.md): Text displayed by the cell.
