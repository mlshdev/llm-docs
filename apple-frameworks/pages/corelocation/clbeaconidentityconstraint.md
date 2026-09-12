> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clbeaconidentityconstraint](https://developer.apple.com/documentation/corelocation/clbeaconidentityconstraint)

# CLBeaconIdentityConstraint (Swift)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Identity characteristics that can match one or more beacons.

> Use [CLBeaconIdentityCondition](clbeaconidentitycondition.md) instead.

## Declaration

```swift
class CLBeaconIdentityConstraint
```

<a id="overview"></a>

## Overview

A constraint specifies beacon identity characteristics. Use constraints to check for matching beacons by comparing the beacon’s identity characteristics ([uuid](clbeacon/uuid.md), [major](clbeacon/major.md), and [minor](clbeacon/minor.md)) to those in the constraint.

Constraints always specify a UUID value, but the major and minor values are optional. A beacon satisfies the constraint if all three identity characteristics of the beacon match the same characteristic of the constraint. Major and minor characteristics are wildcards if they have no value. A major or minor wildcard value matches any value in the beacon’s corresponding characteristic.

## Topics

### Getting the beacon identity

- [major](clbeaconidentityconstraint/major.md): The constraint’s value for the major identity characteristic.
- [minor](clbeaconidentityconstraint/minor.md): The constraint’s value for the minor identity characteristic.

## Relationships

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Classes

- [CLBeaconRegion](clbeaconregion.md): Deprecated. A region for detecting the presence of iBeacon devices.
- [CLCircularRegion](clcircularregion.md): Deprecated. A circular geographic region that a center point and radius deine.

# CLBeaconIdentityConstraint (Objective-C)

**Framework:** Core Location  
**Kind:** Class  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0)

Identity characteristics that can match one or more beacons.

> Use [CLBeaconIdentityCondition](clbeaconidentitycondition.md) instead.

## Declaration

```objectivec
@interface CLBeaconIdentityConstraint : CLBeaconIdentityCondition
```

<a id="overview"></a>

## Overview

A constraint specifies beacon identity characteristics. Use constraints to check for matching beacons by comparing the beacon’s identity characteristics ([UUID](clbeacon/uuid.md), [major](clbeacon/major.md), and [minor](clbeacon/minor.md)) to those in the constraint.

Constraints always specify a UUID value, but the major and minor values are optional. A beacon satisfies the constraint if all three identity characteristics of the beacon match the same characteristic of the constraint. Major and minor characteristics are wildcards if they have no value. A major or minor wildcard value matches any value in the beacon’s corresponding characteristic.

## Relationships

### Inherits From

- [CLBeaconIdentityCondition](clbeaconidentitycondition.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Classes

- [CLBeaconRegion](clbeaconregion.md): Deprecated. A region for detecting the presence of iBeacon devices.
- [CLCircularRegion](clcircularregion.md): Deprecated. A circular geographic region that a center point and radius deine.
