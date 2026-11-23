> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnavigationsession/pausetrip(for:description:turncardcolor:)

# pauseTrip(for:description:turnCardColor:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

## Declaration

```swift
func pauseTrip(for reason: CPNavigationSession.PauseReason, description: String?, turnCardColor: UIColor?)
```

## See Also

### Managing trip navigation

- [pauseTrip(for:description:)](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [CPNavigationSession.PauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTrip(updatedRouteInformation:)](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [cancelTrip()](canceltrip%28%29.md): Tells the navigation session to cancel the trip.

# pauseTripForReason:description:turnCardColor: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 15.4+ · iPadOS 15.4+ · Mac Catalyst 15.4+

## Declaration

```objectivec
- (void) pauseTripForReason:(CPTripPauseReason) reason description:(NSString *) description turnCardColor:(UIColor *) turnCardColor;
```

## See Also

### Managing trip navigation

- [pauseTripForReason:description:](pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [CPTripPauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTripWithUpdatedRouteInformation:](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [cancelTrip](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
