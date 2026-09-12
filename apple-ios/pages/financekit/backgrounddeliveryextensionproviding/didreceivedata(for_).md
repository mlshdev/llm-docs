> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/backgrounddeliveryextensionproviding/didreceivedata(for:)](https://developer.apple.com/documentation/financekit/backgrounddeliveryextensionproviding/didreceivedata(for:))

# didReceiveData(for:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Handle changes to data within the finance store.

## Declaration

```swift
func didReceiveData(for types: [FinanceStore.BackgroundDataType]) async
```

## Parameters

- `types`: An array of `BackgroundDataType` that indicates which types of data have changed in the Finance Store.

<a id="Discussion"></a>

## Discussion

The entry point of a `BackgroundDeliveryExtension`, called when data changes within the finance store. From here, use the FinanceKit API to query and process those changes.

Before you can receive changes, enable them for your extension using [enableBackgroundDelivery(for:frequency:)](../financestore/enablebackgrounddelivery%28for_frequency_%29.md).

> **Note**

>  Returning from this function closes the extension, ending any ongoing operations.

## See Also

### Instance Methods

- [willTerminate()](willterminate%28%29.md): Get alerted when a `BackgroundDeliveryExtension` is about to close.
