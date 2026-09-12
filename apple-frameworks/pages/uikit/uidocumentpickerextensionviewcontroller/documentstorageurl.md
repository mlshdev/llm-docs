> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/documentstorageurl](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/documentstorageurl)

# documentStorageURL (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The root URL for documents provided by the corresponding File Provider extension. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
var documentStorageURL: URL? { get }
```

<a id="Discussion"></a>

## Discussion

This property returns a subdirectory of the app group container shared by the Document Picker extension and its corresponding File Provider extension. By default, this property holds the value returned by calling the File Provider extension’s [documentStorageURL](../../fileprovider/nsfileproviderextension/documentstorageurl.md) method.

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentation(in:)](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.

# documentStorageURL (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

The root URL for documents provided by the corresponding File Provider extension. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSURL * documentStorageURL;
```

<a id="Discussion"></a>

## Discussion

This property returns a subdirectory of the app group container shared by the Document Picker extension and its corresponding File Provider extension. By default, this property holds the value returned by calling the File Provider extension’s [documentStorageURL](../../fileprovider/nsfileproviderextension/documentstorageurl.md) method.

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentationInMode:](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.
