> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataimportmanager/importbrowserdatawithtoken:importblock:](https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager/importbrowserdatawithtoken:importblock:)

# importBrowserDataWithToken:importBlock:

**Interface language:** Objective-C

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Imports browser data using the given token and processes it the given block.

## Declaration

```objectivec
- (void) importBrowserDataWithToken:(NSUUID *) token importBlock:(void (^)(BEBrowserData *, BOOL , NSError *)) importBlock;
```

## Parameters

- `token`: A UUID that identifies the import operation. Pass that [BEBrowserDataExchangeImportToken](importtokenuserinfokey-3bqve.md) value that you receive while launching from the [userActivityType](useractivitytype-35jes.md) activity.
- `importBlock`: A closure called for each imported browser data item.

<a id="discussion"></a>

## Discussion

Call this method from the [userActivityType](useractivitytype-35jes.md) to begin receiving a stream of another app’s browsing data. For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Importing browser data

- [requestImportForMetadata:completionHandler:](requestimport%28for_completionhandler_%29.md): Requests that the system display the sheet to import data from another browser.
