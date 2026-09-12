> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(documenttypes:in:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(documenttypes:in:))

# init(documentTypes:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a document picker that can open or copy the specified file types.

> Use [init(forOpeningContentTypes:)](init%28foropeningcontenttypes_%29.md) or [init(forOpeningContentTypes:asCopy:)](init%28foropeningcontenttypes_ascopy_%29.md) instead.

## Declaration

```swift
init(documentTypes allowedUTIs: [String], in mode: UIDocumentPickerMode)
```

## Parameters

- `allowedUTIs`: An array of uniform type identifiers (UTIs). UTIs are strings that uniquely identify a file’s type. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the [UIDocumentPickerMode.import](../uidocumentpickermode/import.md) or [UIDocumentPickerMode.open](../uidocumentpickermode/open.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentPickerViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

In iOS 10 and earlier, this method returns the document picker view controller from the most recently used Document Provider extension. If no valid Document Provider can be found, it defaults back to iCloud Drive.

In iOS 11 and later, it returns the standard browser interface. This interface is the same one used by the [UIDocumentBrowserViewController](../uidocumentbrowserviewcontroller.md) class.

## See Also

### Deprecated

- [init(url:in:)](init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.
- [init(urls:in:)](init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.

# initWithDocumentTypes:inMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a document picker that can open or copy the specified file types.

> Use [initForOpeningContentTypes:](init%28foropeningcontenttypes_%29.md) or [initForOpeningContentTypes:asCopy:](init%28foropeningcontenttypes_ascopy_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithDocumentTypes:(NSArray<NSString *> *) allowedUTIs inMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `allowedUTIs`: An array of uniform type identifiers (UTIs). UTIs are strings that uniquely identify a file’s type. For more information, see [Uniform Type Identifiers Overview](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/understanding_utis/understand_utis_intro/understand_utis_intro.html#//apple_ref/doc/uid/TP40001319).
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the [UIDocumentPickerModeImport](../uidocumentpickermode/import.md) or [UIDocumentPickerModeOpen](../uidocumentpickermode/open.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentPickerViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

In iOS 10 and earlier, this method returns the document picker view controller from the most recently used Document Provider extension. If no valid Document Provider can be found, it defaults back to iCloud Drive.

In iOS 11 and later, it returns the standard browser interface. This interface is the same one used by the [UIDocumentBrowserViewController](../uidocumentbrowserviewcontroller.md) class.

## See Also

### Deprecated

- [initWithURL:inMode:](init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.
- [initWithURLs:inMode:](init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.
