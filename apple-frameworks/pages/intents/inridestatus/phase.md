> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/phase](https://developer.apple.com/documentation/intents/inridestatus/phase)

# phase (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The current status of the ride.

## Declaration

```swift
var phase: INRidePhase { get set }
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to convey the current status of the ride. When doing the initial confirmation of details with the user, you typically set this property to [INRidePhase.unknown](../inridephase/unknown.md). When the user books the ride, set the phase to [INRidePhase.received](../inridephase/received.md) if you have received the request but not yet assigned a driver to handle the request. After assigning a driver, change the status to [INRidePhase.confirmed](../inridephase/confirmed.md) until the driver picks up the user, at which point you should change the phase to values indicating the pickup status.

When the ride is complete or canceled, change the value to [INRidePhase.completed](../inridephase/completed.md) and update the [completionStatus](completionstatus.md) property with additional details about how the ride ended.

The default value of this property is [INRidePhase.unknown](../inridephase/unknown.md).

## See Also

### Specifying the Ride Status

- [INRidePhase](../inridephase.md): Constants indicating the current ride status.
- [completionStatus](completionstatus.md): Information about how the ride ended.

# phase (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

The current status of the ride.

## Declaration

```objectivec
@property (nonatomic, assign, readwrite) INRidePhase phase;
```

```objectivec
@property (atomic, assign, readwrite) INRidePhase phase;
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

Use this property to convey the current status of the ride. When doing the initial confirmation of details with the user, you typically set this property to [INRidePhaseUnknown](../inridephase/unknown.md). When the user books the ride, set the phase to [INRidePhaseReceived](../inridephase/received.md) if you have received the request but not yet assigned a driver to handle the request. After assigning a driver, change the status to [INRidePhaseConfirmed](../inridephase/confirmed.md) until the driver picks up the user, at which point you should change the phase to values indicating the pickup status.

When the ride is complete or canceled, change the value to [INRidePhaseCompleted](../inridephase/completed.md) and update the [completionStatus](completionstatus.md) property with additional details about how the ride ended.

The default value of this property is [INRidePhaseUnknown](../inridephase/unknown.md).

## See Also

### Specifying the Ride Status

- [INRidePhase](../inridephase.md): Constants indicating the current ride status.
- [completionStatus](completionstatus.md): Information about how the ride ended.
