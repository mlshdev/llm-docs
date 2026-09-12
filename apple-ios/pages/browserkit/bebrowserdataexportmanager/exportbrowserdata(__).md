> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager/exportbrowserdata(_:)](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager/exportbrowserdata(_:))

# exportBrowserData(\_:)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Exports the given browser data.

## Declaration

```swift
@nonobjc final func exportBrowserData(_ browserDataStream: AsyncStream<BEBrowserData>) async throws
```

## Parameters

- `browserDataStream`: An asynchronous stream of browser data to export.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

Call this method to stream browsing data to the system, as identified by [dataTypes](../beexportoptions/datatypes-swift.property.md).

Use this method after [requestExport(for:token:completionHandler:)](requestexport%28for_token_completionhandler_%29.md) returns an [BEExportOptions](../beexportoptions.md) with [exportToFiles](../beexportoptions/exporttofiles.md) = `false`, or when the system launches your app as part of the transfer of browsing data to another browser.

For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Exporting browser data

- [requestExport(for:token:completionHandler:)](requestexport%28for_token_completionhandler_%29.md): Requests that the system display the browsing-data transfer sheet to export data to another browser.
