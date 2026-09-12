> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridephase](https://developer.apple.com/documentation/intents/inridephase)

# INRidePhase (Swift)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the current ride status.

## Declaration

```swift
enum INRidePhase
```

## Topics

### Constants

- [INRidePhase.unknown](inridephase/unknown.md): The state of the ride is unknown.
- [INRidePhase.received](inridephase/received.md): You have received the booking request and are processing it, but have not yet confirmed the request or communicated the pickup information to the driver of the vehicle.
- [INRidePhase.confirmed](inridephase/confirmed.md): You have booked the ride and communicated the pickup information to the driver of the vehicle.
- [INRidePhase.ongoing](inridephase/ongoing.md): The driver has picked up the user’s party and is en route to the destination.
- [INRidePhase.completed](inridephase/completed.md): The driver has transited through all of the waypoints and is now at the ride’s destination.
- [INRidePhase.approachingPickup](inridephase/approachingpickup.md): The driver is approaching the pickup location.
- [INRidePhase.pickup](inridephase/pickup.md): The driver is at the pickup location.

### Initializers

- [init(rawValue:)](inridephase/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Specifying the Ride Status

- [phase](inridestatus/phase.md): The current status of the ride.
- [completionStatus](inridestatus/completionstatus.md): Information about how the ride ended.

# INRidePhase (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Constants indicating the current ride status.

## Declaration

```objectivec
enum INRidePhase : NSInteger;
```

## Topics

### Constants

- [INRidePhaseUnknown](inridephase/unknown.md): The state of the ride is unknown.
- [INRidePhaseReceived](inridephase/received.md): You have received the booking request and are processing it, but have not yet confirmed the request or communicated the pickup information to the driver of the vehicle.
- [INRidePhaseConfirmed](inridephase/confirmed.md): You have booked the ride and communicated the pickup information to the driver of the vehicle.
- [INRidePhaseOngoing](inridephase/ongoing.md): The driver has picked up the user’s party and is en route to the destination.
- [INRidePhaseCompleted](inridephase/completed.md): The driver has transited through all of the waypoints and is now at the ride’s destination.
- [INRidePhaseApproachingPickup](inridephase/approachingpickup.md): The driver is approaching the pickup location.
- [INRidePhasePickup](inridephase/pickup.md): The driver is at the pickup location.

## See Also

### Specifying the Ride Status

- [phase](inridestatus/phase.md): The current status of the ride.
- [completionStatus](inridestatus/completionstatus.md): Information about how the ride ended.
