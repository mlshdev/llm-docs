> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/saveorderresult](https://developer.apple.com/documentation/financekit/financestore/saveorderresult)

# FinanceStore.SaveOrderResult

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Result type for the finance store’s save order method.

## Declaration

```swift
enum SaveOrderResult
```

## Topics

### Enumeration Cases

- [FinanceStore.SaveOrderResult.added](saveorderresult/added.md): The framework added the order to the finance store.
- [FinanceStore.SaveOrderResult.cancelled](saveorderresult/cancelled.md): The individual canceled the order.
- [FinanceStore.SaveOrderResult.newerExisting](saveorderresult/newerexisting.md): There’s a newer, existing order already in the finance store.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [FinanceStore.ContainsOrderResult](containsorderresult.md): Result type for queries against the finance store’s orders.
- [FinanceStore.DataType](datatype.md): Values that describe the kinds of data in the finance store.
- [FinanceStore.BackgroundDataType](backgrounddatatype.md): Types of data in the finance store supported by background delivery.
- [FinanceStore.UpdateFrequency](updatefrequency.md): Frequencies of background delivery updates.
