> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataimportmanager/requestimport(for:completionhandler:)](https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager/requestimport(for:completionhandler:))

# requestImport(for:completionHandler:) (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Requests that the system display the sheet to import data from another browser.

## Declaration

```swift
func requestImport(for metadata: BEImportMetadata, completionHandler: @escaping @Sendable (BEImportOptions?, (any Error)?) -> Void)
```

```swift
func requestImport(for metadata: BEImportMetadata) async throws -> BEImportOptions
```

## Parameters

- `metadata`: Metadata that describes the import capabilities, including file import support.
- `completionHandler`: A closure that the system calls and provides the import options, which contain the person’s selections in the sheet.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

Call this method when someone interacts with your browser app’s UI to import browsing data from another browser app.

This method provides your completion handler an option that indicates whether the person requests loading browsing data from files rather than directly from another browser on the device.

## See Also

### Importing browser data

- [importBrowserData(token:)](importbrowserdata%28token_%29.md): Imports another app’s browsing data as a stream.

# requestImportForMetadata:completionHandler: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Requests that the system display the sheet to import data from another browser.

## Declaration

```objectivec
- (void) requestImportForMetadata:(BEImportMetadata *) metadata completionHandler:(void (^)(BEImportOptions *, NSError *)) completionHandler;
```

## Parameters

- `metadata`: Metadata that describes the import capabilities, including file import support.
- `completionHandler`: A closure that the system calls and provides the import options, which contain the person’s selections in the sheet.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

Call this method when someone interacts with your browser app’s UI to import browsing data from another browser app.

This method provides your completion handler an option that indicates whether the person requests loading browsing data from files rather than directly from another browser on the device.

## See Also

### Importing browser data

- [importBrowserDataWithToken:importBlock:](importbrowserdatawithtoken_importblock_.md): Imports browser data using the given token and processes it the given block.
