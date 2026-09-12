> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenudelegate/documentmenu(_:didpickdocumentpicker:)](https://developer.apple.com/documentation/uikit/uidocumentmenudelegate/documentmenu(_:didpickdocumentpicker:))

# documentMenu(\_:didPickDocumentPicker:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user has selected a document picker from the menu.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
func documentMenu(_ documentMenu: UIDocumentMenuViewController, didPickDocumentPicker documentPicker: UIDocumentPickerViewController)
```

## Parameters

- `documentMenu`: The document menu object that called this method.
- `documentPicker`: The document picker that the user selected.

<a id="Discussion"></a>

## Discussion

The document menu calls this method when the user selects a document picker. Set the document picker’s delegate, and then present it.

## See Also

### Responding to user actions

- [documentMenuWasCancelled(\_:)](documentmenuwascancelled%28__%29.md): Deprecated. Tells the delegate that the user dismissed the document menu.

# documentMenu:didPickDocumentPicker: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 13.0) · iPadOS 8.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user has selected a document picker from the menu.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
- (void) documentMenu:(UIDocumentMenuViewController *) documentMenu didPickDocumentPicker:(UIDocumentPickerViewController *) documentPicker;
```

## Parameters

- `documentMenu`: The document menu object that called this method.
- `documentPicker`: The document picker that the user selected.

<a id="Discussion"></a>

## Discussion

The document menu calls this method when the user selects a document picker. Set the document picker’s delegate, and then present it.

## See Also

### Responding to user actions

- [documentMenuWasCancelled:](documentmenuwascancelled%28__%29.md): Deprecated. Tells the delegate that the user dismissed the document menu.
