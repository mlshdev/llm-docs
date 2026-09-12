> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/financekit/financestore/updatefrequency](https://developer.apple.com/documentation/financekit/financestore/updatefrequency)

# FinanceStore.UpdateFrequency

**Framework:** FinanceKit  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

Frequencies of background delivery updates.

## Declaration

```swift
enum UpdateFrequency
```

<a id="overview"></a>

## Overview

These represent the expected minimum interval between updates delivered to a `BackgroundDeliveryExtension` and if no data changes, no updates will occur. After an update is delivered, if data changes again within the interval, the next update won’t happen until the interval has passed.

> **Note**

>  The window of time to process data is larger for longer update frequencies.

## Topics

### Enumeration Cases

- [FinanceStore.UpdateFrequency.daily](updatefrequency/daily.md): Get notified within a day of data updating.
- [FinanceStore.UpdateFrequency.hourly](updatefrequency/hourly.md): Get notified within an hour of data updating.
- [FinanceStore.UpdateFrequency.weekly](updatefrequency/weekly.md): Get notified within a week of data updating.

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
- [FinanceStore.BackgroundDataType](backgrounddatatype.md): Types of data in the finance store supported by background delivery.
