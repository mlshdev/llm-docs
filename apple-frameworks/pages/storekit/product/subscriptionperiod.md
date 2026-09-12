> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/storekit/product/subscriptionperiod](https://developer.apple.com/documentation/storekit/product/subscriptionperiod)

# Product.SubscriptionPeriod

**Framework:** StoreKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Values that represent the duration of time between subscription renewals.

## Declaration

```swift
struct SubscriptionPeriod
```

<a id="overview"></a>

## Overview

Use the [value](subscriptionperiod/value.md) and the [unit](subscriptionperiod/unit-swift.property.md) together to determine the subscription period. For example, if the unit is [Product.SubscriptionPeriod.Unit.month](subscriptionperiod/unit-swift.enum/month.md), and the [value](subscriptionperiod/value.md) is `3`, the subscription period is three months.

## Topics

### Getting the subscription period

- [value](subscriptionperiod/value.md): The number of period units.
- [unit](subscriptionperiod/unit-swift.property.md): The increment of time for the subscription period.
- [Product.SubscriptionPeriod.Unit](subscriptionperiod/unit-swift.enum.md): Units of time that describe subscription periods.

### Getting the period date range

- [dateRange(referenceDate:)](subscriptionperiod/daterange%28referencedate_%29.md): The calculated date range of a subscription period, starting at the reference date.

### Getting subscription periods

- [everySixMonths](subscriptionperiod/everysixmonths.md)
- [everyThreeDays](subscriptionperiod/everythreedays.md)
- [everyThreeMonths](subscriptionperiod/everythreemonths.md)
- [everyTwoMonths](subscriptionperiod/everytwomonths.md)
- [everyTwoWeeks](subscriptionperiod/everytwoweeks.md)
- [monthly](subscriptionperiod/monthly.md)
- [weekly](subscriptionperiod/weekly.md)
- [yearly](subscriptionperiod/yearly.md)

### Formatting the subscription period

- [formatted(\_:referenceDate:)](subscriptionperiod/formatted%28__referencedate_%29-3t7wd.md): Formats the subscription period using a format style that takes a date range as an input.
- [formatted(\_:referenceDate:)](subscriptionperiod/formatted%28__referencedate_%29-8s3ar.md): Formats the subscription period using a format style that takes a duration as an input.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting subscription information

- [subscription](subscription.md): The subscription information for an auto-renewable subscripton.
- [Product.SubscriptionInfo](subscriptioninfo.md): Information about an auto-renewable subscription, such as its status, period, subscription group, and subscription offer details.
- [Product.SubscriptionOffer](subscriptionoffer.md): Information about a subscription offer that you configure in App Store Connect.
- [Product.SubscriptionInfo.Status](subscriptioninfo/status-swift.struct.md): The renewal status information for an auto-renewable subscription.
