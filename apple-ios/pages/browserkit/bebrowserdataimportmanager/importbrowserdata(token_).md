> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/browserkit/bebrowserdataimportmanager/importbrowserdata(token:)](https://developer.apple.com/documentation/browserkit/bebrowserdataimportmanager/importbrowserdata(token:))

# importBrowserData(token:)

**Framework:** BrowserKit  
**Kind:** Instance Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+

Imports another app’s browsing data as a stream.

## Declaration

```swift
@nonobjc final func importBrowserData(token: UUID) -> AsyncThrowingStream<BEBrowserData, any Error>
```

## Parameters

- `token`: A UUID that identifies the import operation. Pass the value from the activity’s info dictionary with the [importTokenUserInfoKey](importtokenuserinfokey-3bqve.md) key.

<a id="return-value"></a>

## Return Value

An [AsyncStream](https://developer.apple.com/documentation/swift/asyncstream), in which you import the individual data types.

## Mentioned In

- [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md)

<a id="discussion"></a>

## Discussion

Call this method from the [userActivityType](useractivitytype-35jes.md) to begin receiving a stream of another app’s browsing data. For more information, see [Transferring browsing data to another browser](../transferring-browsing-data-to-another-browser.md).

## See Also

### Importing browser data

- [requestImport(for:completionHandler:)](requestimport%28for_completionhandler_%29.md): Requests that the system display the sheet to import data from another browser.
