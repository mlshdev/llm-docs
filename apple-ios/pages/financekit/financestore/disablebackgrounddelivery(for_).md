> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/disablebackgrounddelivery(for:)](https://developer.apple.com/documentation/financekit/financestore/disablebackgrounddelivery(for:))

# disableBackgroundDelivery(for:)

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Disables background delivery for the specified types.

## Declaration

```swift
func disableBackgroundDelivery(for types: [FinanceStore.BackgroundDataType])
```

## Parameters

- `types`: The types of data to disable updates for.

<a id="Discussion"></a>

## Discussion

The app’s background delivery extension will no longer receive updates when data of the given types change in the finance store.

## See Also

### Instance Methods

- [disableAllBackgroundDelivery()](disableallbackgrounddelivery%28%29.md): Disables background delivery for all data types.
- [enableBackgroundDelivery(for:frequency:)](enablebackgrounddelivery%28for_frequency_%29.md): Enables background delivery for the specified types and frequency.
