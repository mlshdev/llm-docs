> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/nearbyinteraction/nimotionactivitystate](https://developer.apple.com/documentation/nearbyinteraction/nimotionactivitystate)

# NIMotionActivityState (Swift)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

Motion states for a nearby accessory.

## Declaration

```swift
enum NIMotionActivityState
```

<a id="overview"></a>

## Overview

Ranging accuracy improves when the framework knows whether the accessory is moving. Track your accessory’s motion using a method you choose and then use this enumeration to describe the motion among the available states. When the accessory’s motion state changes, inform the session by calling [updateMotionState(\_:forObjectWithToken:)](nisession/updatemotionstate%28__forobjectwithtoken_%29.md)).

## Topics

### Specifying the motion state

- [NIMotionActivityState.stationary](nimotionactivitystate/stationary.md): A value that indicates the accessory isn’t moving.
- [NIMotionActivityState.moving](nimotionactivitystate/moving.md): A value that indicates the accessory is moving.
- [NIMotionActivityState.unknown](nimotionactivitystate/unknown.md): A value that indicates the accessory’s motion state is unknown.

### Creating a motion state

- [init(rawValue:)](nimotionactivitystate/init%28rawvalue_%29.md): Creates a motion state with the specified underlying value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Third-party accessories

- [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md): Establish a connection with a nearby accessory to receive periodic measurements of its distance from the user.
- [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md): A configuration that enables interaction between iPhone and third-party accessories.

# NIMotionActivityState (Objective-C)

**Framework:** Nearby Interaction  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · watchOS

Motion states for a nearby accessory.

## Declaration

```objectivec
enum NIMotionActivityState : NSInteger;
```

<a id="overview"></a>

## Overview

Ranging accuracy improves when the framework knows whether the accessory is moving. Track your accessory’s motion using a method you choose and then use this enumeration to describe the motion among the available states. When the accessory’s motion state changes, inform the session by calling [updateMotionState:forObjectWithToken:](nisession/updatemotionstate%28__forobjectwithtoken_%29.md)).

## Topics

### Specifying the motion state

- [NIMotionActivityStateStationary](nimotionactivitystate/stationary.md): A value that indicates the accessory isn’t moving.
- [NIMotionActivityStateMoving](nimotionactivitystate/moving.md): A value that indicates the accessory is moving.
- [NIMotionActivityStateUnknown](nimotionactivitystate/unknown.md): A value that indicates the accessory’s motion state is unknown.

## See Also

### Third-party accessories

- [Implementing spatial interactions with third-party accessories](implementing-spatial-interactions-with-third-party-accessories.md): Establish a connection with a nearby accessory to receive periodic measurements of its distance from the user.
- [NINearbyAccessoryConfiguration](ninearbyaccessoryconfiguration.md): A configuration that enables interaction between iPhone and third-party accessories.
