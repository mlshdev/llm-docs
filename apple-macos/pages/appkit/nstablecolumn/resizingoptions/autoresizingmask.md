> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstablecolumn/resizingoptions/autoresizingmask](https://developer.apple.com/documentation/appkit/nstablecolumn/resizingoptions/autoresizingmask)

# autoresizingMask (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Allows the table column to resize automatically in response to resizing the table view. The resizing behavior for the table view is set using the `NSTableView` method [columnAutoresizingStyle](../../nstableview/columnautoresizingstyle-swift.property.md).

## Declaration

```swift
static var autoresizingMask: NSTableColumn.ResizingOptions { get }
```

## See Also

### Constants

- [userResizingMask](userresizingmask.md): Allows the table column to be resized by the user.

# NSTableColumnAutoresizingMask (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration Case  
**Availability:** macOS

Allows the table column to resize automatically in response to resizing the table view. The resizing behavior for the table view is set using the `NSTableView` method [columnAutoresizingStyle](../../nstableview/columnautoresizingstyle-swift.property.md).

## Declaration

```objectivec
NSTableColumnAutoresizingMask
```

## See Also

### Constants

- [NSTableColumnUserResizingMask](userresizingmask.md): Allows the table column to be resized by the user.
- [NSTableColumnNoResizing](../../nstablecolumnresizingoptions/nstablecolumnnoresizing.md): Prevents the table column from resizing.
