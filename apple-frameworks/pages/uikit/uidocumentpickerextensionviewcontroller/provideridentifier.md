> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/provideridentifier](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/provideridentifier)

# providerIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
var providerIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Both the Document Picker View Controller extension and the File Provider extension should pass this identifier to their file coordinator’s `setPurposeIdentifier:` method. This approach helps coordinate the read and write operations between the two extensions, preventing possible deadlocks.

This property holds the value returned by calling the File Provider extension’s [providerIdentifier](../../fileprovider/nsfileproviderextension/provideridentifier.md) method.

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentation(in:)](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.

# providerIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * providerIdentifier;
```

<a id="Discussion"></a>

## Discussion

Both the Document Picker View Controller extension and the File Provider extension should pass this identifier to their file coordinator’s `setPurposeIdentifier:` method. This approach helps coordinate the read and write operations between the two extensions, preventing possible deadlocks.

This property holds the value returned by calling the File Provider extension’s [providerIdentifier](../../fileprovider/nsfileproviderextension/provideridentifier.md) method.

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentationInMode:](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [validTypes](validtypes.md): Deprecated. An array of valid uniform type identifiers.
