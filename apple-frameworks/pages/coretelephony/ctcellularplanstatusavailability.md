> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatusavailability](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatusavailability)

# CTCellularPlanStatusAvailability (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate whether the device has a cellular plan for the given phone number.

## Declaration

```swift
enum CTCellularPlanStatusAvailability
```

<a id="overview"></a>

## Overview

The [getHintForPhoneNumber(\_:completion:)](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method returns this value alongside a [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md) value in its completion handler.

## Topics

### Determining availability

- [CTCellularPlanStatusAvailability.available](ctcellularplanstatusavailability/available.md): A status that indicates the phone number has an active cellular plan on the device.
- [CTCellularPlanStatusAvailability.unavailable](ctcellularplanstatusavailability/unavailable.md): A status that indicates the phone number’s cellular plan is inactive or the system can’t determine the status.

### Creating an availability state

- [init(rawValue:)](ctcellularplanstatusavailability/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting a cellular plan status hint

- [getHintForPhoneNumber(\_:completion:)](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md): Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.
- [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

# CTCellularPlanStatusAvailability (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate whether the device has a cellular plan for the given phone number.

## Declaration

```objectivec
enum CTCellularPlanStatusAvailability : NSInteger;
```

<a id="overview"></a>

## Overview

The [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method returns this value alongside a [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md) value in its completion handler.

## Topics

### Determining availability

- [CTCellularPlanStatusAvailabilityAvailable](ctcellularplanstatusavailability/available.md): A status that indicates the phone number has an active cellular plan on the device.
- [CTCellularPlanStatusAvailabilityUnavailable](ctcellularplanstatusavailability/unavailable.md): A status that indicates the phone number’s cellular plan is inactive or the system can’t determine the status.

## See Also

### Getting a cellular plan status hint

- [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md): Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.
- [CTCellularPlanStatusAvailabilityConfidence](ctcellularplanstatusavailabilityconfidence.md): Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.
