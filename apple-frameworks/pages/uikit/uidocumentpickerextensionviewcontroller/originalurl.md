> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/originalurl](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/originalurl)

# originalURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The URL of the file to be exported. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
var originalURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

While in UIDocumentPickerModeExportToService mode, this property contains the original URL of the file to be copied. Otherwise it is `nil`.

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [prepareForPresentation(in:)](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.

# originalURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The URL of the file to be exported. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * originalURL;
```

<a id="Discussion"></a>

## Discussion

While in UIDocumentPickerModeExportToService mode, this property contains the original URL of the file to be copied. Otherwise it is `nil`.

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [prepareForPresentationInMode:](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.
