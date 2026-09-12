> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/backgrounddatatype](https://developer.apple.com/documentation/financekit/financestore/backgrounddatatype)

# FinanceStore.BackgroundDataType

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Types of data in the finance store supported by background delivery.

## Declaration

```swift
enum BackgroundDataType
```

<a id="overview"></a>

## Overview

When these types of data change in the finance store, any background delivery extension with updates enabled for them will be notified.

## Topics

### Enumeration Cases

- [FinanceStore.BackgroundDataType.accountBalances](backgrounddatatype/accountbalances.md): Receive updates for changes to `AccountBalance`.
- [FinanceStore.BackgroundDataType.accounts](backgrounddatatype/accounts.md): Receive updates for changes to `Account`.
- [FinanceStore.BackgroundDataType.transactions](backgrounddatatype/transactions.md): Receive updates for changes to `Transaction`.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [FinanceStore.ContainsOrderResult](containsorderresult.md): Result type for queries against the finance store’s orders.
- [FinanceStore.DataType](datatype.md): Values that describe the kinds of data in the finance store.
- [FinanceStore.SaveOrderResult](saveorderresult.md): Result type for the finance store’s save order method.
- [FinanceStore.UpdateFrequency](updatefrequency.md): Frequencies of background delivery updates.
