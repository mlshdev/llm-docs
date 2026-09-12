> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenuviewcontroller/init(url:in:)](https://developer.apple.com/documentation/uikit/uidocumentmenuviewcontroller/init(url:in:))

# init(url:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a document menu to export or move the given document.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
init(url: URL, in mode: UIDocumentPickerMode)
```

## Parameters

- `url`: The document to be exported or moved.
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the UIDocumentPickerModeExportToService or UIDocumentPickerModeMoveToService mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentMenuViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

The resulting document menu displays all the document pickers appropriate for the given mode.

## See Also

### Creating a document menu

- [init(documentTypes:in:)](init%28documenttypes_in_%29.md): Deprecated. Initializes and returns a document menu to import or open the given file types.
- [init(coder:)](init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.

# initWithURL:inMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a document menu to export or move the given document.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url inMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `url`: The document to be exported or moved.
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the UIDocumentPickerModeExportToService or UIDocumentPickerModeMoveToService mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentMenuViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

The resulting document menu displays all the document pickers appropriate for the given mode.

## See Also

### Creating a document menu

- [initWithDocumentTypes:inMode:](init%28documenttypes_in_%29.md): Deprecated. Initializes and returns a document menu to import or open the given file types.
- [initWithCoder:](init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.
