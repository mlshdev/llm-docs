> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickermode](https://developer.apple.com/documentation/uikit/uidocumentpickermode)

# UIDocumentPickerMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Modes that define the type of file transfer operation that the document picker uses.

> Use [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md) initializers instead.

## Declaration

```swift
enum UIDocumentPickerMode
```

## Topics

### Constants

- [UIDocumentPickerMode.import](uidocumentpickermode/import.md): Deprecated. The document picker imports a file from outside the app’s sandbox.
- [UIDocumentPickerMode.open](uidocumentpickermode/open.md): Deprecated. The document picker opens an external file outside the app’s sandbox.
- [UIDocumentPickerMode.exportToService](uidocumentpickermode/exporttoservice.md): Deprecated. The document picker exports a local file to a destination outside the app’s sandbox.
- [UIDocumentPickerMode.moveToService](uidocumentpickermode/movetoservice.md): Deprecated. The document picker moves a local file outside the app’s sandbox and provides access to it as an external file.

### Initializers

- [init(rawValue:)](uidocumentpickermode/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring a document picker

- [shouldShowFileExtensions](uidocumentpickerviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [documentPickerMode](uidocumentpickerviewcontroller/documentpickermode.md): Deprecated. The type of file transfer operation that the document picker uses.

# UIDocumentPickerMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Modes that define the type of file transfer operation that the document picker uses.

> Use [UIDocumentPickerViewController](uidocumentpickerviewcontroller.md) initializers instead.

## Declaration

```objectivec
enum UIDocumentPickerMode : NSUInteger;
```

## Topics

### Constants

- [UIDocumentPickerModeImport](uidocumentpickermode/import.md): Deprecated. The document picker imports a file from outside the app’s sandbox.
- [UIDocumentPickerModeOpen](uidocumentpickermode/open.md): Deprecated. The document picker opens an external file outside the app’s sandbox.
- [UIDocumentPickerModeExportToService](uidocumentpickermode/exporttoservice.md): Deprecated. The document picker exports a local file to a destination outside the app’s sandbox.
- [UIDocumentPickerModeMoveToService](uidocumentpickermode/movetoservice.md): Deprecated. The document picker moves a local file outside the app’s sandbox and provides access to it as an external file.

## See Also

### Configuring a document picker

- [shouldShowFileExtensions](uidocumentpickerviewcontroller/shouldshowfileextensions.md): A Boolean value that determines whether the browser always shows file extensions.
- [documentPickerMode](uidocumentpickerviewcontroller/documentpickermode.md): Deprecated. The type of file transfer operation that the document picker uses.
