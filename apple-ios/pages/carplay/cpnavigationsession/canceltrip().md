> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/canceltrip()](https://developer.apple.com/documentation/carplay/cpnavigationsession/canceltrip())

# cancelTrip() (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the navigation session to cancel the trip.

## Declaration

```swift
func cancelTrip()
```

## See Also

### Managing Trip Navigation

- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:)](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](pausetrip%28for_description_turncardcolor_%29.md)
- [CPNavigationSession.PauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTrip(updatedRouteInformation:)](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.

# cancelTrip (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the navigation session to cancel the trip.

## Declaration

```objectivec
- (void) cancelTrip;
```

## See Also

### Managing Trip Navigation

- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](pausetrip%28for_description_turncardcolor_%29.md)
- [CPTripPauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTripWithUpdatedRouteInformation:](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
