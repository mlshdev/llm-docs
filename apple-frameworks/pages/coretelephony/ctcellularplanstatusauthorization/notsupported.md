> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretelephony/ctcellularplanstatusauthorization/notsupported](https://developer.apple.com/documentation/coretelephony/ctcellularplanstatusauthorization/notsupported)

# CTCellularPlanStatusAuthorization.notSupported (Swift)

**Framework:** Core Telephony  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A status that indicates the system can’t determine authorization.

## Declaration

```swift
case notSupported
```

<a id="discussion"></a>

## Discussion

The framework returns this status when both of the following criteria are met:

- The given phone number doesn’t match a cellular plan on the device.
- At least one active cellular plan has a phone number the system can’t confirm.

Unlike [CTCellularPlanStatusAuthorization.notAuthorized](notauthorized.md), this status doesn’t indicate that the person denied authorization; it also doesn’t identify a permanent condition. Although the status might be permanent for the given phone number, your app can call [requestAuthorization(forPhoneNumber:completion:)](../ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) again later to check, for example, if an underlying carrier-side condition changed.

## See Also

### Determining an authorization state

- [CTCellularPlanStatusAuthorization.authorized](authorized.md): A status that indicates the person granted authorization to access cellular plan status information for the phone number.
- [CTCellularPlanStatusAuthorization.notAuthorized](notauthorized.md): A status that indicates the person didn’t grant authorization, or explicitly denied it.
- [CTCellularPlanStatusAuthorization.restricted](restricted.md): A status that indicates a feature is unavailable for the given phone number.

# CTCellularPlanStatusAuthorizationNotSupported (Objective-C)

**Framework:** Core Telephony  
**Kind:** Enumeration Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

A status that indicates the system can’t determine authorization.

## Declaration

```objectivec
CTCellularPlanStatusAuthorizationNotSupported
```

<a id="discussion"></a>

## Discussion

The framework returns this status when both of the following criteria are met:

- The given phone number doesn’t match a cellular plan on the device.
- At least one active cellular plan has a phone number the system can’t confirm.

Unlike [CTCellularPlanStatusAuthorizationNotAuthorized](notauthorized.md), this status doesn’t indicate that the person denied authorization; it also doesn’t identify a permanent condition. Although the status might be permanent for the given phone number, your app can call [requestAuthorizationForPhoneNumber:completion:](../ctcellularplanstatus/requestauthorization%28forphonenumber_completion_%29.md) again later to check, for example, if an underlying carrier-side condition changed.

## See Also

### Determining an authorization state

- [CTCellularPlanStatusAuthorizationAuthorized](authorized.md): A status that indicates the person granted authorization to access cellular plan status information for the phone number.
- [CTCellularPlanStatusAuthorizationNotAuthorized](notauthorized.md): A status that indicates the person didn’t grant authorization, or explicitly denied it.
- [CTCellularPlanStatusAuthorizationRestricted](restricted.md): A status that indicates a feature is unavailable for the given phone number.
