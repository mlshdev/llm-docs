> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridephase/received](https://developer.apple.com/documentation/intents/inridephase/received)

# INRidePhase.received (Swift)

**Framework:** Intents  
**Kind:** Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You have received the booking request and are processing it, but have not yet confirmed the request or communicated the pickup information to the driver of the vehicle.

## Declaration

```swift
case received
```

## See Also

### Constants

- [INRidePhase.unknown](unknown.md): The state of the ride is unknown.
- [INRidePhase.confirmed](confirmed.md): You have booked the ride and communicated the pickup information to the driver of the vehicle.
- [INRidePhase.ongoing](ongoing.md): The driver has picked up the user’s party and is en route to the destination.
- [INRidePhase.completed](completed.md): The driver has transited through all of the waypoints and is now at the ride’s destination.
- [INRidePhase.approachingPickup](approachingpickup.md): The driver is approaching the pickup location.
- [INRidePhase.pickup](pickup.md): The driver is at the pickup location.

# INRidePhaseReceived (Objective-C)

**Framework:** Intents  
**Kind:** Enumeration Case  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

You have received the booking request and are processing it, but have not yet confirmed the request or communicated the pickup information to the driver of the vehicle.

## Declaration

```objectivec
INRidePhaseReceived
```

## See Also

### Constants

- [INRidePhaseUnknown](unknown.md): The state of the ride is unknown.
- [INRidePhaseConfirmed](confirmed.md): You have booked the ride and communicated the pickup information to the driver of the vehicle.
- [INRidePhaseOngoing](ongoing.md): The driver has picked up the user’s party and is en route to the destination.
- [INRidePhaseCompleted](completed.md): The driver has transited through all of the waypoints and is now at the ride’s destination.
- [INRidePhaseApproachingPickup](approachingpickup.md): The driver is approaching the pickup location.
- [INRidePhasePickup](pickup.md): The driver is at the pickup location.
