> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uidocumentpickerviewcontroller/init(urls:in:)](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller/init(urls:in:))

# init(urls:in:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a document picker that can export or move the specified documents.

> Use [init(forExporting:)](init%28forexporting_%29.md) or [init(forExporting:asCopy:)](init%28forexporting_ascopy_%29.md) instead.

## Declaration

```swift
init(urls: [URL], in mode: UIDocumentPickerMode)
```

## Parameters

- `urls`: An array of documents that the document picked exports or moves.
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
- [init(url:in:)](init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.

# initWithURLs:inMode: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 14.0) · iPadOS 11.0+ (deprecated in 14.0) · Mac Catalyst 13.1+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a document picker that can export or move the specified documents.

> Use [initForExportingURLs:](init%28forexporting_%29.md) or [initForExportingURLs:asCopy:](init%28forexporting_ascopy_%29.md) instead.

## Declaration

```objectivec
- (instancetype) initWithURLs:(NSArray<NSURL *> *) urls inMode:(UIDocumentPickerMode) mode;
```

## Parameters

- `urls`: An array of documents that the document picked exports or moves.
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
- [initWithURL:inMode:](init%28url_in_%29.md): Deprecated. Initializes and returns a document picker that can export or copy the specified document.
