> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/disableallbackgrounddelivery()](https://developer.apple.com/documentation/financekit/financestore/disableallbackgrounddelivery())

# disableAllBackgroundDelivery()

**Framework:** FinanceKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Disables background delivery for all data types.

## Declaration

```swift
func disableAllBackgroundDelivery()
```

<a id="Discussion"></a>

## Discussion

The app’s background delivery extension will no longer receive updates when data changes in the finance store.

## See Also

### Instance Methods

- [disableBackgroundDelivery(for:)](disablebackgrounddelivery%28for_%29.md): Disables background delivery for the specified types.
- [enableBackgroundDelivery(for:frequency:)](enablebackgrounddelivery%28for_frequency_%29.md): Enables background delivery for the specified types and frequency.
