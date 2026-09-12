> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridestatus/completionstatus](https://developer.apple.com/documentation/intents/inridestatus/completionstatus)

# completionStatus (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Information about how the ride ended.

## Declaration

```swift
@NSCopying var completionStatus: INRideCompletionStatus? { get set }
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

When the value of the [phase](phase.md) property is [INRidePhase.completed](../inridephase/completed.md), SiriKit checks this property for additional information about how the ride ended. Use this property to specify whether the ride ended successfully or the user canceled the ride.. You can also include information about the amount paid or the reason for any cancellation.

## See Also

### Specifying the Ride Status

- [phase](phase.md): The current status of the ride.
- [INRidePhase](../inridephase.md): Constants indicating the current ride status.

# completionStatus (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.0+

Information about how the ride ended.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INRideCompletionStatus * completionStatus;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INRideCompletionStatus * completionStatus;
```

## Mentioned In

- [Providing Live Status Updates](../../sirikit/providing-live-status-updates.md)

<a id="Discussion"></a>

## Discussion

When the value of the [phase](phase.md) property is [INRidePhaseCompleted](../inridephase/completed.md), SiriKit checks this property for additional information about how the ride ended. Use this property to specify whether the ride ended successfully or the user canceled the ride.. You can also include information about the amount paid or the reason for any cancellation.

## See Also

### Specifying the Ride Status

- [phase](phase.md): The current status of the ride.
- [INRidePhase](../inridephase.md): Constants indicating the current ride status.
