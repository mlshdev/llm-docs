> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/prepareforpresentation(in:)](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/prepareforpresentation(in:))

# prepareForPresentation(in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Performs any custom configuration of the document picker view controller.

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
func prepareForPresentation(in mode: UIDocumentPickerMode)
```

## Parameters

- `mode`: The type of file-transfer operation that the document picker performs. For a list of valid modes, see `Document Picker Modes`.

<a id="Discussion"></a>

## Discussion

The system calls this method when a host app presents a document picker view controller for your Document Picker extension. Override this method to provide a custom user interface based on the provided mode.

Different modes may require different user interfaces. For example, the UIDocumentPickerModeImport and UIDocumentPickerModeOpen modes should let the user explore the available documents, whereas the UIDocumentPickerModeExportToService and UIDocumentPickerModeMoveToService modes let the user select the destination.

When overriding this method, examine the mode and present an appropriate user interface for the task at hand. If the differences between the modes are significant, consider creating separate child view controllers for each mode and then present the appropriate child in this method.

If your extension can manage multiple file types, check the [validTypes](validtypes.md) property and make sure you are presenting only files that match one or more of the specified types.

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.

# prepareForPresentationInMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Performs any custom configuration of the document picker view controller.

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
- (void) prepareForPresentationInMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `mode`: The type of file-transfer operation that the document picker performs. For a list of valid modes, see `Document Picker Modes`.

<a id="Discussion"></a>

## Discussion

The system calls this method when a host app presents a document picker view controller for your Document Picker extension. Override this method to provide a custom user interface based on the provided mode.

Different modes may require different user interfaces. For example, the UIDocumentPickerModeImport and UIDocumentPickerModeOpen modes should let the user explore the available documents, whereas the UIDocumentPickerModeExportToService and UIDocumentPickerModeMoveToService modes let the user select the destination.

When overriding this method, examine the mode and present an appropriate user interface for the task at hand. If the differences between the modes are significant, consider creating separate child view controllers for each mode and then present the appropriate child in this method.

If your extension can manage multiple file types, check the [validTypes](validtypes.md) property and make sure you are presenting only files that match one or more of the specified types.

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.
