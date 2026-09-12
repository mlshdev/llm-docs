> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkupdatefrequency](https://developer.apple.com/documentation/healthkit/hkupdatefrequency)

# HKUpdateFrequency (Swift)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that determine how often the system launches your app in response to changes to HealthKit data.

## Declaration

```swift
enum HKUpdateFrequency
```

<a id="overview"></a>

## Overview

For more information, see [HKObserverQuery](hkobserverquery.md).

## Topics

### Constants

- [HKUpdateFrequency.immediate](hkupdatefrequency/immediate.md): The system launches your app every time it detects a change.
- [HKUpdateFrequency.hourly](hkupdatefrequency/hourly.md): The system launches your app at most once an hour in response to changes.
- [HKUpdateFrequency.daily](hkupdatefrequency/daily.md): The system launches your app at most once a day in response to changes.
- [HKUpdateFrequency.weekly](hkupdatefrequency/weekly.md): The system launches your app at most once per week in response to changes.

### Initializers

- [init(rawValue:)](hkupdatefrequency/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing background delivery

- [enableBackgroundDelivery(for:frequency:withCompletion:)](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.
- [com.apple.developer.healthkit.background-delivery](../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [disableBackgroundDelivery(for:withCompletion:)](hkhealthstore/disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDelivery(completion:)](hkhealthstore/disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.

# HKUpdateFrequency (Objective-C)

**Framework:** HealthKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that determine how often the system launches your app in response to changes to HealthKit data.

## Declaration

```objectivec
enum HKUpdateFrequency : NSInteger;
```

<a id="overview"></a>

## Overview

For more information, see [HKObserverQuery](hkobserverquery.md).

## Topics

### Constants

- [HKUpdateFrequencyImmediate](hkupdatefrequency/immediate.md): The system launches your app every time it detects a change.
- [HKUpdateFrequencyHourly](hkupdatefrequency/hourly.md): The system launches your app at most once an hour in response to changes.
- [HKUpdateFrequencyDaily](hkupdatefrequency/daily.md): The system launches your app at most once a day in response to changes.
- [HKUpdateFrequencyWeekly](hkupdatefrequency/weekly.md): The system launches your app at most once per week in response to changes.

## See Also

### Managing background delivery

- [enableBackgroundDeliveryForType:frequency:withCompletion:](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.
- [com.apple.developer.healthkit.background-delivery](../bundleresources/entitlements/com.apple.developer.healthkit.background-delivery.md): A Boolean value that indicates whether observer queries receive updates while running in the background.
- [disableBackgroundDeliveryForType:withCompletion:](hkhealthstore/disablebackgrounddelivery%28for_withcompletion_%29.md): Disables background deliveries of update notifications for the specified data type.
- [disableAllBackgroundDeliveryWithCompletion:](hkhealthstore/disableallbackgrounddelivery%28completion_%29.md): Disables all background deliveries of update notifications.
