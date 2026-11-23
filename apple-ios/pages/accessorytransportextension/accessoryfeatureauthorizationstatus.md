> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorytransportextension/accessoryfeatureauthorizationstatus

# AccessoryFeatureAuthorizationStatus

**Framework:** Accessory Transport Extension  
**Kind:** Enumeration  
**Availability:** iOS 27.3+ beta

A status that describes whether the system authorizes a feature for an accessory.

## Declaration

```swift
enum AccessoryFeatureAuthorizationStatus
```

<a id="overview"></a>

## Overview

The system returns [AccessoryFeatureAuthorizationStatus.unknown](accessoryfeatureauthorizationstatus/unknown.md) until your app enrolls the feature for the accessory. Subsequent calls return the recorded status.

Read the status with [authorizationStatus(for:)](accessoryworker/authorizationstatus%28for_%29.md) or [authorizationStatus(for:)](accessorygpuworker/authorizationstatus%28for_%29.md) and enroll the feature with a matching `requestAuthorization(for:)` method.

## Topics

### Determining the authorization status

- [AccessoryFeatureAuthorizationStatus.unknown](accessoryfeatureauthorizationstatus/unknown.md): Beta. A value that indicates the system doesn’t have an authorization record for the accessory feature.
- [AccessoryFeatureAuthorizationStatus.unauthorized](accessoryfeatureauthorizationstatus/unauthorized.md): Beta. A value that indicates your extension hasn’t authorized the feature.
- [AccessoryFeatureAuthorizationStatus.authorized](accessoryfeatureauthorizationstatus/authorized.md): Beta. A value that indicates your extension authorizes the feature.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking authorization

- [authorizationStatus(for:)](accessorygpuworker/authorizationstatus%28for_%29.md): Beta. Returns the feature’s current authorization status for an accessory.
- [requestAuthorization(for:)](accessorygpuworker/requestauthorization%28for_%29.md): Beta. Enrolls the feature for an accessory.
