> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationsession/resumetrip(updatedrouteinformation:)

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

### Managing trip navigation

- [pauseTrip(for:description:)](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](pausetrip%28for_description_turncardcolor_%29.md)
- [CPNavigationSession.PauseReason](pausereason.md): A set of reasons for pausing a trip.
- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [cancelTrip()](canceltrip%28%29.md): Tells the navigation session to cancel the trip.

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

### Managing trip navigation

- [pauseTripForReason:description:](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](pausetrip%28for_description_turncardcolor_%29.md)
- [CPTripPauseReason](pausereason.md): A set of reasons for pausing a trip.
- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [cancelTrip](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
