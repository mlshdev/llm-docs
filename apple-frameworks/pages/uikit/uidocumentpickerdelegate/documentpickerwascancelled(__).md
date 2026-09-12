> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerdelegate/documentpickerwascancelled(_:)](https://developer.apple.com/documentation/uikit/uidocumentpickerdelegate/documentpickerwascancelled(_:))

# documentPickerWasCancelled(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user canceled the document picker.

## Declaration

```swift
optional func documentPickerWasCancelled(_ controller: UIDocumentPickerViewController)
```

## Parameters

- `controller`: The document picker that called this method.

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

## See Also

### Responding to user actions

- [documentPicker(\_:didPickDocumentsAt:)](documentpicker%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.
- [documentPicker(\_:didPickDocumentAt:)](documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.

# documentPickerWasCancelled: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the user canceled the document picker.

## Declaration

```objectivec
- (void) documentPickerWasCancelled:(UIDocumentPickerViewController *) controller;
```

## Parameters

- `controller`: The document picker that called this method.

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

## See Also

### Responding to user actions

- [documentPicker:didPickDocumentsAtURLs:](documentpicker%28__didpickdocumentsat_%29.md): Tells the delegate that the user has selected one or more documents.
- [documentPicker:didPickDocumentAtURL:](documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.
