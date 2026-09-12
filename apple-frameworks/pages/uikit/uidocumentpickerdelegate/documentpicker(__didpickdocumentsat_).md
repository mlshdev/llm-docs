> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerdelegate/documentpicker(_:didpickdocumentsat:)](https://developer.apple.com/documentation/uikit/uidocumentpickerdelegate/documentpicker(_:didpickdocumentsat:))

# documentPicker(\_:didPickDocumentsAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has selected one or more documents.

## Declaration

```swift
optional func documentPicker(_ controller: UIDocumentPickerViewController, didPickDocumentsAt urls: [URL])
```

## Parameters

- `controller`: The document picker that called this method.
- `urls`: The URLs of the selected documents.

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

The meaning of the provided URLs varies depending on the document picker’s mode:

- `UIDocumentPickerModeImport`

The URLs refer to a copy of the selected documents. These documents are temporary files. They remain available only until your application terminates. To keep a permanent copy, move these files to a permanent location inside your sandbox.

- `UIDocumentPickerModeOpen`

The URLs refer to the selected documents.

- `UIDocumentPickerModeExportToService`

The URLs refer to new copies of the exported documents at the selected destination.

- `UIDocumentPickerModeMoveToService`

The URLs refer to the documents’ new locations.

The provided URLs are security-scoped, referring to files outside your app’s sandbox. For more about working with external, security-scoped URLs, see [Requirements](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentPickerProgrammingGuide/AccessingDocuments/AccessingDocuments.html#//apple_ref/doc/uid/TP40014451-CH2-SW3) in the [Document Picker Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentPickerProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014451).

## See Also

### Responding to user actions

- [documentPickerWasCancelled(\_:)](documentpickerwascancelled%28__%29.md): Tells the delegate that the user canceled the document picker.
- [documentPicker(\_:didPickDocumentAt:)](documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.

# documentPicker:didPickDocumentsAtURLs: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user has selected one or more documents.

## Declaration

```objectivec
- (void) documentPicker:(UIDocumentPickerViewController *) controller didPickDocumentsAtURLs:(NSArray<NSURL *> *) urls;
```

## Parameters

- `controller`: The document picker that called this method.
- `urls`: The URLs of the selected documents.

## Mentioned In

- [Providing access to directories](../providing-access-to-directories.md)

<a id="Discussion"></a>

## Discussion

The meaning of the provided URLs varies depending on the document picker’s mode:

- `UIDocumentPickerModeImport`

The URLs refer to a copy of the selected documents. These documents are temporary files. They remain available only until your application terminates. To keep a permanent copy, move these files to a permanent location inside your sandbox.

- `UIDocumentPickerModeOpen`

The URLs refer to the selected documents.

- `UIDocumentPickerModeExportToService`

The URLs refer to new copies of the exported documents at the selected destination.

- `UIDocumentPickerModeMoveToService`

The URLs refer to the documents’ new locations.

The provided URLs are security-scoped, referring to files outside your app’s sandbox. For more about working with external, security-scoped URLs, see [Requirements](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentPickerProgrammingGuide/AccessingDocuments/AccessingDocuments.html#//apple_ref/doc/uid/TP40014451-CH2-SW3) in the [Document Picker Programming Guide](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentPickerProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014451).

## See Also

### Responding to user actions

- [documentPickerWasCancelled:](documentpickerwascancelled%28__%29.md): Tells the delegate that the user canceled the document picker.
- [documentPicker:didPickDocumentAtURL:](documentpicker%28__didpickdocumentat_%29.md): Deprecated. Tells the delegate that the user has selected a document or a destination.
