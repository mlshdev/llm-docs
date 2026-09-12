> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/enablebackgrounddelivery(for:frequency:)](https://developer.apple.com/documentation/financekit/financestore/enablebackgrounddelivery(for:frequency:))

# enableBackgroundDelivery(for:frequency:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Enables background delivery for the specified types and frequency.

## Declaration

```swift
func enableBackgroundDelivery(for types: [FinanceStore.BackgroundDataType], frequency: FinanceStore.UpdateFrequency)
```

## Parameters

- `types`: The types of data to enable updates for.
- `frequency`: The frequency at which updates should occur.

<a id="Discussion"></a>

## Discussion

The app’s background delivery extension will receive updates at the specified frequency when data of the given types change in the finance store.

> **Note**

>  Subsequent calls with the same type will update the delivery frequency.

## See Also

### Instance Methods

- [disableAllBackgroundDelivery()](disableallbackgrounddelivery%28%29.md): Disables background delivery for all data types.
- [disableBackgroundDelivery(for:)](disablebackgrounddelivery%28for_%29.md): Disables background delivery for the specified types.
