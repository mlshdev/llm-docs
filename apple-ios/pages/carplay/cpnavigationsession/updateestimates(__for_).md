> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnavigationsession/updateestimates(_:for:)](https://developer.apple.com/documentation/carplay/cpnavigationsession/updateestimates(_:for:))

# updateEstimates(\_:for:) (Swift)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates the travel estimates for the specified maneuver.

## Declaration

```swift
func updateEstimates(_ estimates: CPTravelEstimates, for maneuver: CPManeuver)
```

## Parameters

- `estimates`: The updated travel estimates.
- `maneuver`: The maneuver to update.

## See Also

### Updating Travel Estimates

- [CPTravelEstimates](../cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.

# updateTravelEstimates:forManeuver: (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

Updates the travel estimates for the specified maneuver.

## Declaration

```objectivec
- (void) updateTravelEstimates:(CPTravelEstimates *) estimates forManeuver:(CPManeuver *) maneuver;
```

## Parameters

- `estimates`: The updated travel estimates.
- `maneuver`: The maneuver to update.

## See Also

### Updating Travel Estimates

- [CPTravelEstimates](../cptravelestimates.md): An object that describes the time and distance remaining for a maneuver in a navigation session.
