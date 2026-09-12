> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/accessoryauthorizationresult](https://developer.apple.com/documentation/accessoryliveactivities/accessoryauthorizationresult)

# AccessoryAuthorizationResult

**Framework:** Accessory Live Activities  
**Kind:** Enumeration  
**Availability:** iOS 26.5+ · iPadOS 26.5+

Responses to the Live Activity forwarding permission prompt.

## Declaration

```swift
enum AccessoryAuthorizationResult
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](receiving-live-activities-on-an-accessory.md)

<a id="Overview"></a>

## Overview

Call [authorization(forAccessory:)](liveactivityforwarding/authorization%28foraccessory_%29.md) to check the current forwarding authorization for an accessory without showing any UI. If the result is `.undetermined`, ask people for their permission to forward iOS system notifications and Live Activities to your accessory. For more information, see [Receiving Live Activity updates and alerts on an accessory](receiving-live-activities-on-an-accessory.md).

To ask if someone wants to update their current selection – for example, if they previously denied Live Activity forwarding – call [presentAuthorizationSheet(forAccessory:)](liveactivityforwarding/presentauthorizationsheet%28foraccessory_%29.md).

## Topics

### Identifying the decision

- [AccessoryAuthorizationResult.undetermined](accessoryauthorizationresult/undetermined.md): An option that indicates the system hasn’t shown the authorization prompt to the person.
- [AccessoryAuthorizationResult.allow](accessoryauthorizationresult/allow.md): An option that indicates the person allows Live Activity forwarding from all apps that support them.
- [AccessoryAuthorizationResult.limited](accessoryauthorizationresult/limited.md): An option that indicates the person allows Live Activities from a selected subset of apps.
- [AccessoryAuthorizationResult.deny](accessoryauthorizationresult/deny.md): An option that indicates the person doesn’t allow Live Activities.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Authorization

- [LiveActivityForwarding](liveactivityforwarding.md): A class for requesting permission to forward Live Activities to your accessory and handle them in your accessory’s data provider extension.
