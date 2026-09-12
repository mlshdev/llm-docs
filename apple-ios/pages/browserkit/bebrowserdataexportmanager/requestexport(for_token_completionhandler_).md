> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager/requestexport(for:token:completionhandler:)](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager/requestexport(for:token:completionhandler:))

# requestExport(for:token:completionHandler:) (Swift)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Requests that the system display the browsing-data transfer sheet to export data to another browser.

## Declaration

```swift
func requestExport(for metadata: BEExportMetadata, token: UUID?, completionHandler: @escaping @Sendable (BEExportOptions?, (any Error)?) -> Void)
```

```swift
func requestExport(for metadata: BEExportMetadata, token: UUID?) async throws -> BEExportOptions
```

## Parameters

- `metadata`: Metadata that describes the available data for export, including types, counts, and whether the sheet can include the option to export the data to files instead of directly to another browser.
- `token`: A UUID that identifies the export operation. Pass `nil` if your app presents the export sheet through a person’s interaction with your app’s UI. If the system launches your app with the [userActivityType](useractivitytype-4ar5j.md) activity, pass the token you retrieve from the activity’s info dictionary using the [exportTokenUserInfoKey](exporttokenuserinfokey-1y5l1.md).
- `completionHandler`: A closure that the system calls, passing in export options that contain the person’s selections in the sheet.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

This method provides your completion handler with an object that describes the types of browsing data someone exports, and also indicates whether the export needs to send data to files rather than directly to another browser on the device.

## See Also

### Exporting browser data

- [exportBrowserData(\_:)](exportbrowserdata%28__%29.md): Exports the given browser data.

# requestExportForMetadata:token:completionHandler: (Objective-C)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Requests that the system display the browsing-data transfer sheet to export data to another browser.

## Declaration

```objectivec
- (void) requestExportForMetadata:(BEExportMetadata *) metadata token:(NSUUID *) token completionHandler:(void (^)(BEExportOptions *, NSError *)) completionHandler;
```

## Parameters

- `metadata`: Metadata that describes the available data for export, including types, counts, and whether the sheet can include the option to export the data to files instead of directly to another browser.
- `token`: A UUID that identifies the export operation. Pass `nil` if your app presents the export sheet through a person’s interaction with your app’s UI. If the system launches your app with the [userActivityType](useractivitytype-4ar5j.md) activity, pass the token you retrieve from the activity’s info dictionary using the [exportTokenUserInfoKey](exporttokenuserinfokey-1y5l1.md).
- `completionHandler`: A closure that the system calls, passing in export options that contain the person’s selections in the sheet.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

This method provides your completion handler with an object that describes the types of browsing data someone exports, and also indicates whether the export needs to send data to files rather than directly to another browser on the device.

## See Also

### Exporting browser data

- [exportBrowserData:completionHandler:](exportbrowserdata_completionhandler_.md): Exports the given browser data with the given completion handler.
- [exportFinishedWithCompletionHandler:](exportfinishedwithcompletionhandler_.md): A callback the system invokes when an export of browsing data completes.
