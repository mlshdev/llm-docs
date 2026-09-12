> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenudelegate/documentmenuwascancelled(_:)](https://developer.apple.com/documentation/uikit/uidocumentmenudelegate/documentmenuwascancelled(_:))

# documentMenuWasCancelled(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user dismissed the document menu.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
optional func documentMenuWasCancelled(_ documentMenu: UIDocumentMenuViewController)
```

## Parameters

- `documentMenu`: The document menu object that called this method.

## See Also

### Responding to user actions

- [documentMenu(\_:didPickDocumentPicker:)](documentmenu%28__didpickdocumentpicker_%29.md): Deprecated. Tells the delegate that the user has selected a document picker from the menu.

# documentMenuWasCancelled: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user dismissed the document menu.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
- (void) documentMenuWasCancelled:(UIDocumentMenuViewController *) documentMenu;
```

## Parameters

- `documentMenu`: The document menu object that called this method.

## See Also

### Responding to user actions

- [documentMenu:didPickDocumentPicker:](documentmenu%28__didpickdocumentpicker_%29.md): Deprecated. Tells the delegate that the user has selected a document picker from the menu.
