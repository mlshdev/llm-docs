> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/pausereason](https://developer.apple.com/documentation/carplay/cpnavigationsession/pausereason)

# CPNavigationSession.PauseReason (Swift)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A set of reasons for pausing a trip.

## Declaration

```swift
enum PauseReason
```

## Topics

### Reasons

- [CPNavigationSession.PauseReason.arrived](pausereason/arrived.md): The user arrived at the destination.
- [CPNavigationSession.PauseReason.loading](pausereason/loading.md): The system is loading the route.
- [CPNavigationSession.PauseReason.locating](pausereason/locating.md): The system is locating the destination.
- [CPNavigationSession.PauseReason.proceedToRoute](pausereason/proceedtoroute.md): The system is waiting for the user to proceed to the route.
- [CPNavigationSession.PauseReason.rerouting](pausereason/rerouting.md): The system is rerouting the trip.

### Initializers

- [init(rawValue:)](pausereason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing Trip Navigation

- [cancelTrip()](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:)](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](pausetrip%28for_description_turncardcolor_%29.md)
- [resumeTrip(updatedRouteInformation:)](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.

# CPTripPauseReason (Objective-C)

**Framework:** CarPlay  
**Kind:** Enumeration  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

A set of reasons for pausing a trip.

## Declaration

```objectivec
enum CPTripPauseReason : NSUInteger;
```

## Topics

### Reasons

- [CPTripPauseReasonArrived](pausereason/arrived.md): The user arrived at the destination.
- [CPTripPauseReasonLoading](pausereason/loading.md): The system is loading the route.
- [CPTripPauseReasonLocating](pausereason/locating.md): The system is locating the destination.
- [CPTripPauseReasonProceedToRoute](pausereason/proceedtoroute.md): The system is waiting for the user to proceed to the route.
- [CPTripPauseReasonRerouting](pausereason/rerouting.md): The system is rerouting the trip.

## See Also

### Managing Trip Navigation

- [cancelTrip](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](pausetrip%28for_description_turncardcolor_%29.md)
- [resumeTripWithUpdatedRouteInformation:](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
