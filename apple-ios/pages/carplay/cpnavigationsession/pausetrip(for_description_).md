> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/pausetrip(for:description:)](https://developer.apple.com/documentation/carplay/cpnavigationsession/pausetrip(for:description:))

# pauseTrip(for:description:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the navigation session to pause the trip for the specified reason.

## Declaration

```swift
func pauseTrip(for reason: CPNavigationSession.PauseReason, description: String?)
```

## Parameters

- `reason`: The reason for pausing the trip.
- `description`: An optional description of the pause reason. To use a system-provided value, set this parameter to `nil`.

## See Also

### Managing Trip Navigation

- [cancelTrip()](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip()](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:turnCardColor:)](pausetrip%28for_description_turncardcolor_%29.md)
- [CPNavigationSession.PauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTrip(updatedRouteInformation:)](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.

# pauseTripForReason:description: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Tells the navigation session to pause the trip for the specified reason.

## Declaration

```objectivec
- (void) pauseTripForReason:(CPTripPauseReason) reason description:(NSString *) description;
```

## Parameters

- `reason`: The reason for pausing the trip.
- `description`: An optional description of the pause reason. To use a system-provided value, set this parameter to `nil`.

## See Also

### Managing Trip Navigation

- [cancelTrip](canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip](finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:turnCardColor:](pausetrip%28for_description_turncardcolor_%29.md)
- [CPTripPauseReason](pausereason.md): A set of reasons for pausing a trip.
- [resumeTripWithUpdatedRouteInformation:](resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
