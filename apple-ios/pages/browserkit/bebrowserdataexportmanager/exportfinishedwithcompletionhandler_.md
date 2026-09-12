> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataexportmanager/exportfinishedwithcompletionhandler:](https://developer.apple.com/documentation/browserkit/bebrowserdataexportmanager/exportfinishedwithcompletionhandler:)

# exportFinishedWithCompletionHandler:

**Interface language:** Objective-C

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

A callback the system invokes when an export of browsing data completes.

## Declaration

```objectivec
- (void) exportFinishedWithCompletionHandler:(void (^)(NSError *)) completionHandler;
```

## Parameters

- `completionHandler`: A closure that the system calls when the export completes or fails.

## See Also

### Exporting browser data

- [requestExportForMetadata:token:completionHandler:](requestexport%28for_token_completionhandler_%29.md): Requests that the system display the browsing-data transfer sheet to export data to another browser.
- [exportBrowserData:completionHandler:](exportbrowserdata_completionhandler_.md): Exports the given browser data with the given completion handler.
