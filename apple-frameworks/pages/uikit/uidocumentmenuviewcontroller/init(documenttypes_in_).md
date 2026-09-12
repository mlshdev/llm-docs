> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentmenuviewcontroller/init(documenttypes:in:)](https://developer.apple.com/documentation/uikit/uidocumentmenuviewcontroller/init(documenttypes:in:))

# init(documentTypes:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a document menu to import or open the given file types.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```swift
init(documentTypes allowedUTIs: [String], in mode: UIDocumentPickerMode)
```

## Parameters

- `allowedUTIs`: An array of uniform type identifiers. UTIs are strings that uniquely identify a file’s type. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).
- `mode`: The type of file transfer operation the document picker performs. This argument accepts only the [UIDocumentPickerMode.import](../uidocumentpickermode/import.md) or [UIDocumentPickerMode.open](../uidocumentpickermode/open.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentMenuViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

The UTI array defines the type of documents that can be imported or opened. The resulting document menu displays all the document pickers appropriate for the given document types and mode.

## See Also

### Creating a document menu

- [init(url:in:)](init%28url_in_%29.md): Deprecated. Initializes and returns a document menu to export or move the given document.
- [init(coder:)](init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.

# initWithDocumentTypes:inMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 11.0) · iPadOS 8.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a document menu to import or open the given file types.

> For more information, see [UIDocumentMenuViewController](../uidocumentmenuviewcontroller.md).

## Declaration

```objectivec
- (instancetype) initWithDocumentTypes:(NSArray<NSString *> *) allowedUTIs inMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `allowedUTIs`: An array of uniform type identifiers. UTIs are strings that uniquely identify a file’s type. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).
- `mode`: The type of file transfer operation the document picker performs. This argument accepts only the [UIDocumentPickerModeImport](../uidocumentpickermode/import.md) or [UIDocumentPickerModeOpen](../uidocumentpickermode/open.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentMenuViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

The UTI array defines the type of documents that can be imported or opened. The resulting document menu displays all the document pickers appropriate for the given document types and mode.

## See Also

### Creating a document menu

- [initWithURL:inMode:](init%28url_in_%29.md): Deprecated. Initializes and returns a document menu to export or move the given document.
- [initWithCoder:](init%28coder_%29.md): Deprecated. Creates a document menu from data in an unarchiver.
