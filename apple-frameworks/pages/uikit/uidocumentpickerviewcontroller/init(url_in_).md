> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(url:in:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(url:in:))

# init(url:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a document picker that can export or copy the specified document.

> Use [init(forExporting:)](init%28forexporting_%29.md) or [init(forExporting:asCopy:)](init%28forexporting_ascopy_%29.md) instead.

## Declaration

```swift
init(url: URL, in mode: UIDocumentPickerMode)
```

## Parameters

- `url`: The document that the document picker exports or moves.
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the [UIDocumentPickerMode.exportToService](../uidocumentpickermode/exporttoservice.md) or [UIDocumentPickerMode.moveToService](../uidocumentpickermode/movetoservice.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentPickerViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

In iOS 10 and earlier, this method returns the document picker view controller from the most recently used Document Provider extension. If no valid Document Provider can be found, it defaults back to iCloud Drive.

In iOS 11 and later, it returns the standard browser interface. This interface is the same one used by the [UIDocumentBrowserViewController](../uidocumentbrowserviewcontroller.md) class.

## See Also

### Deprecated

- [init(documentTypes:in:)](init%28documenttypes_in_%29.md): Deprecated. Creates and returns a document picker that can open or copy the specified file types.
- [init(urls:in:)](init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.

# initWithURL:inMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 14.0) · iPadOS 8.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Initializes and returns a document picker that can export or copy the specified document.

> Use [initForExportingURLs:](init%28forexporting_%29.md) or [initForExportingURLs:asCopy:](init%28forexporting_ascopy_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithURL:(NSURL *) url inMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `url`: The document that the document picker exports or moves.
- `mode`: The type of file-transfer operation that the document picker performs. This argument accepts only the [UIDocumentPickerModeExportToService](../uidocumentpickermode/exporttoservice.md) or [UIDocumentPickerModeMoveToService](../uidocumentpickermode/movetoservice.md) mode.

<a id="return-value"></a>

## Return Value

Returns an initialized `UIDocumentPickerViewController` object, or `nil` if the object could not be successfully initialized.

<a id="Discussion"></a>

## Discussion

In iOS 10 and earlier, this method returns the document picker view controller from the most recently used Document Provider extension. If no valid Document Provider can be found, it defaults back to iCloud Drive.

In iOS 11 and later, it returns the standard browser interface. This interface is the same one used by the [UIDocumentBrowserViewController](../uidocumentbrowserviewcontroller.md) class.

## See Also

### Deprecated

- [initWithDocumentTypes:inMode:](init%28documenttypes_in_%29.md): Deprecated. Creates and returns a document picker that can open or copy the specified file types.
- [initWithURLs:inMode:](init%28urls_in_%29.md): Deprecated. Creates and returns a document picker that can export or move the specified documents.
