> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatusavailabilityconfidence](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatusavailabilityconfidence)

# CTCellularPlanStatusAvailabilityConfidence (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

## Declaration

```swift
enum CTCellularPlanStatusAvailabilityConfidence
```

<a id="overview"></a>

## Overview

The [getHintForPhoneNumber(\_:completion:)](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method returns a value of this type in its completion handler along with the [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md) determination to which it applies. Evaluate the values together when your app considers the result.

## Topics

### Determining a confidence level

- [CTCellularPlanStatusAvailabilityConfidence.high](ctcellularplanstatusavailabilityconfidence/high.md): A high level of confidence about the availability of a cellular plan.
- [CTCellularPlanStatusAvailabilityConfidence.low](ctcellularplanstatusavailabilityconfidence/low.md): A low level of confidence about the availability of a cellular plan.

### Creating a confidence level

- [init(rawValue:)](ctcellularplanstatusavailabilityconfidence/init%28rawvalue_%29.md)

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
- [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.

# CTCellularPlanStatusAvailabilityConfidence (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate the system’s confidence that the device has a cellular plan for a given phone number.

## Declaration

```objectivec
enum CTCellularPlanStatusAvailabilityConfidence : NSInteger;
```

<a id="overview"></a>

## Overview

The [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md) method returns a value of this type in its completion handler along with the [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md) determination to which it applies. Evaluate the values together when your app considers the result.

## Topics

### Determining a confidence level

- [CTCellularPlanStatusAvailabilityConfidenceHigh](ctcellularplanstatusavailabilityconfidence/high.md): A high level of confidence about the availability of a cellular plan.
- [CTCellularPlanStatusAvailabilityConfidenceLow](ctcellularplanstatusavailabilityconfidence/low.md): A low level of confidence about the availability of a cellular plan.

## See Also

### Getting a cellular plan status hint

- [getStatusHintForPhoneNumber:completion:](ctcellularplanstatus/gethintforphonenumber%28__completion_%29.md): Provides an estimate of the system’s confidence of the existence of an active cellular plan for the device’s phone number.
- [CTCellularPlanStatusAvailability](ctcellularplanstatusavailability.md): Constants that indicate whether the device has a cellular plan for the given phone number.
