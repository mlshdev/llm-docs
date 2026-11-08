> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-0edb2c9c8b69; integrity is recorded in the provenance manifest.
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

Read the status with `AccessoryWorker/authorizationStatus(for:)` or `AccessoryGPUWorker/authorizationStatus(for:)` and enroll the feature with a matching `requestAuthorization(for:)` method.

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
