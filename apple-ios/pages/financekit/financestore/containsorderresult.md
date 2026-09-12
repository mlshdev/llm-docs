> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/containsorderresult](https://developer.apple.com/documentation/financekit/financestore/containsorderresult)

# FinanceStore.ContainsOrderResult

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Result type for queries against the finance store’s orders.

## Declaration

```swift
enum ContainsOrderResult
```

<a id="overview"></a>

## Overview

These values represent the possible results of the `containsOrder` method you use to check whether an order you specified exists in the `FinanceStore`.

## Topics

### Enumeration Cases

- [FinanceStore.ContainsOrderResult.exists](containsorderresult/exists.md): The specified order exists.
- [FinanceStore.ContainsOrderResult.newerExists](containsorderresult/newerexists.md): A newer order than the one you specified exists.
- [FinanceStore.ContainsOrderResult.notFound](containsorderresult/notfound.md): The specified order doesn’t exist.
- [FinanceStore.ContainsOrderResult.olderExists](containsorderresult/olderexists.md): A older order than the one you specified exists.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [FinanceStore.DataType](datatype.md): Values that describe the kinds of data in the finance store.
- [FinanceStore.SaveOrderResult](saveorderresult.md): Result type for the finance store’s save order method.
- [FinanceStore.BackgroundDataType](backgrounddatatype.md): Types of data in the finance store supported by background delivery.
- [FinanceStore.UpdateFrequency](updatefrequency.md): Frequencies of background delivery updates.
