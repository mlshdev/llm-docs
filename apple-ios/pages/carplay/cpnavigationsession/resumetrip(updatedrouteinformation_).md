> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/resumetrip(updatedrouteinformation:)](https://developer.apple.com/documentation/carplay/cpnavigationsession/resumetrip(updatedrouteinformation:))

# resumeTrip(updatedRouteInformation:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Resumes the current trip with updated route information.

## Declaration

```swift
func resumeTrip(updatedRouteInformation routeInformation: CPRouteInformation)
```

## Parameters

- `routeInformation`: The updated route information for the current trip.

## See Also

### Managing Trip Navigation

- [cancelTrip()](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:)](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](pausetrip%28for_description_turncardcolor_%29.md)
- [CPNavigationSession.PauseReason](pausereason.md): A set of reasons for pausing a trip.

# resumeTripWithUpdatedRouteInformation: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+

Resumes the current trip with updated route information.

## Declaration

```objectivec
- (void) resumeTripWithUpdatedRouteInformation:(CPRouteInformation *) routeInformation;
```

## Parameters

- `routeInformation`: The updated route information for the current trip.

## See Also

### Managing Trip Navigation

- [cancelTrip](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](pausetrip%28for_description_turncardcolor_%29.md)
- [CPTripPauseReason](pausereason.md): A set of reasons for pausing a trip.
