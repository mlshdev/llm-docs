> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/documentpickermode](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/documentpickermode)

# documentPickerMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The document picker’s file-transfer operation. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
var documentPickerMode: UIDocumentPickerMode { get }
```

<a id="Discussion"></a>

## Discussion

For a list of available modes, see `Document Picker Modes` in [UIDocumentPickerViewController](../uidocumentpickerviewcontroller.md).

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentation(in:)](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.

# documentPickerMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The document picker’s file-transfer operation. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, assign, readonly) UIDocumentPickerMode documentPickerMode;
```

<a id="Discussion"></a>

## Discussion

For a list of available modes, see `Document Picker Modes` in [UIDocumentPickerViewController](../uidocumentpickerviewcontroller.md).

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentationInMode:](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.
