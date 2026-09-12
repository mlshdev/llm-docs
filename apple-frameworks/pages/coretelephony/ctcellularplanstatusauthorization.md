> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatusauthorization](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatusauthorization)

# CTCellularPlanStatusAuthorization (Swift)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate the authorization status for accessing cellular plan information for a phone number.

## Declaration

```swift
enum CTCellularPlanStatusAuthorization
```

<a id="overview"></a>

## Overview

The [requestAuthorization(forPhoneNumber:completion:)](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) and [getAuthorizationStatus(forPhoneNumber:completion:)](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md) methods return a value of this type in their completion handlers.

## Topics

### Determining an authorization state

- [CTCellularPlanStatusAuthorization.authorized](ctcellularplanstatusauthorization/authorized.md): A status that indicates the person granted authorization to access cellular plan status information for the phone number.
- [CTCellularPlanStatusAuthorization.notAuthorized](ctcellularplanstatusauthorization/notauthorized.md): A status that indicates the person didn’t grant authorization, or explicitly denied it.
- [CTCellularPlanStatusAuthorization.restricted](ctcellularplanstatusauthorization/restricted.md): A status that indicates a feature is unavailable for the given phone number.
- [CTCellularPlanStatusAuthorization.notSupported](ctcellularplanstatusauthorization/notsupported.md): A status that indicates the system can’t determine authorization.

### Creating an authorization state

- [init(rawValue:)](ctcellularplanstatusauthorization/init%28rawvalue_%29.md): Initializes an authorization status.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Requesting phone number authorization

- [requestAuthorization(forPhoneNumber:completion:)](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md): Presents a prompt that asks the person to allow cellular plan checks for their phone number.

# CTCellularPlanStatusAuthorization (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

Constants that indicate the authorization status for accessing cellular plan information for a phone number.

## Declaration

```objectivec
enum CTCellularPlanStatusAuthorization : NSInteger;
```

<a id="overview"></a>

## Overview

The [requestAuthorizationForPhoneNumber:completion:](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) and [getAuthorizationStatusForPhoneNumber:completion:](ctcellularplanstatus/getauthorizationstatus%28forphonenumber_completion_%29.md) methods return a value of this type in their completion handlers.

## Topics

### Determining an authorization state

- [CTCellularPlanStatusAuthorizationAuthorized](ctcellularplanstatusauthorization/authorized.md): A status that indicates the person granted authorization to access cellular plan status information for the phone number.
- [CTCellularPlanStatusAuthorizationNotAuthorized](ctcellularplanstatusauthorization/notauthorized.md): A status that indicates the person didn’t grant authorization, or explicitly denied it.
- [CTCellularPlanStatusAuthorizationRestricted](ctcellularplanstatusauthorization/restricted.md): A status that indicates a feature is unavailable for the given phone number.
- [CTCellularPlanStatusAuthorizationNotSupported](ctcellularplanstatusauthorization/notsupported.md): A status that indicates the system can’t determine authorization.

## See Also

### Requesting phone number authorization

- [requestAuthorizationForPhoneNumber:completion:](ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md): Presents a prompt that asks the person to allow cellular plan checks for their phone number.
