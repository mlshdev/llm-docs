> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/datatype](https://developer.apple.com/documentation/financekit/financestore/datatype)

# FinanceStore.DataType

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Values that describe the kinds of data in the finance store.

## Declaration

```swift
enum DataType
```

## Topics

### Enumeration Cases

- [FinanceStore.DataType.financialData](datatype/financialdata.md): The value that describes financial data, such as account information.
- [FinanceStore.DataType.orders](datatype/orders.md): The value that describes orders records, such as purchases.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [FinanceStore.ContainsOrderResult](containsorderresult.md): Result type for queries against the finance store’s orders.
- [FinanceStore.SaveOrderResult](saveorderresult.md): Result type for the finance store’s save order method.
- [FinanceStore.BackgroundDataType](backgrounddatatype.md): Types of data in the finance store supported by background delivery.
- [FinanceStore.UpdateFrequency](updatefrequency.md): Frequencies of background delivery updates.
