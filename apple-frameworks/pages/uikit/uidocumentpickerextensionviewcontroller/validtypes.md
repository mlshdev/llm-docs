> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerextensionviewcontroller/validtypes](https://developer.apple.com/documentation/uikit/uidocumentpickerextensionviewcontroller/validtypes)

# validTypes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An array of valid uniform type identifiers.

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```swift
var validTypes: [String]? { get }
```

<a id="Discussion"></a>

## Discussion

While in the `UIDocumentPickerModeImport` or `UIDocumentPickerModeOpen` modes, this property holds an array of valid UTIs; otherwise, it is `nil`.

Check the value of this property before your Document Picker extension displays any files to the user. You should let the user select only files that match at least one of the given UTIs.

## See Also

### Managing the user interface

- [dismissGrantingAccess(to:)](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentation(in:)](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)

# validTypes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

An array of valid uniform type identifiers.

> For more information, see [UIDocumentPickerExtensionViewController](../uidocumentpickerextensionviewcontroller.md).

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * validTypes;
```

<a id="Discussion"></a>

## Discussion

While in the `UIDocumentPickerModeImport` or `UIDocumentPickerModeOpen` modes, this property holds an array of valid UTIs; otherwise, it is `nil`.

Check the value of this property before your Document Picker extension displays any files to the user. You should let the user select only files that match at least one of the given UTIs.

## See Also

### Managing the user interface

- [dismissGrantingAccessToURL:](dismissgrantingaccess%28to_%29.md): Deprecated. Dismisses the document picker.
- [documentPickerMode](documentpickermode.md): Deprecated. The document picker’s file-transfer operation. (read-only)
- [documentStorageURL](documentstorageurl.md): Deprecated. The root URL for documents provided by the corresponding File Provider extension. (read-only)
- [originalURL](originalurl.md): Deprecated. The URL of the file to be exported. (read-only)
- [prepareForPresentationInMode:](prepareforpresentation%28in_%29.md): Deprecated. Performs any custom configuration of the document picker view controller.
- [providerIdentifier](provideridentifier.md): Deprecated. An identifier shared by this Document Picker extension and its corresponding File Provider extension. (read-only)
