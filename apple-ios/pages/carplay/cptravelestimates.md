> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cptravelestimates](https://developer.apple.com/documentation/carplay/cptravelestimates)

# CPTravelEstimates (Swift)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that describes the time and distance remaining for a maneuver in a navigation session.

## Declaration

```swift
class CPTravelEstimates
```

## Topics

### Getting the trip

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.

### Managing upcoming maneuvers

- [add(\_:)](cpnavigationsession/add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [add(\_:)](cpnavigationsession/add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.

### Creating a Travel Estimates Object

- [init(distanceRemaining:timeRemaining:)](cptravelestimates/init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.
- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:)](cptravelestimates/init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.

### Updating travel estimates

- [updateEstimates(\_:for:)](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.

### Managing trip navigation

- [cancelTrip()](cpnavigationsession/canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip()](cpnavigationsession/finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTrip(for:description:)](cpnavigationsession/pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTrip(for:description:turnCardColor:)](cpnavigationsession/pausetrip%28for_description_turncardcolor_%29.md)
- [resumeTrip(updatedRouteInformation:)](cpnavigationsession/resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
- [CPNavigationSession.PauseReason](cpnavigationsession/pausereason.md): A set of reasons for pausing a trip.

### Getting Travel Estimates

- [distanceRemaining](cptravelestimates/distanceremaining.md): The remaining distance for the travel estimate.
- [distanceRemainingToDisplay](cptravelestimates/distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](cptravelestimates/timeremaining.md): The remaining time for the travel estimate.

### Initializers

- [init(coder:)](cptravelestimates/init%28coder_%29.md)
- [init(distanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails:)](cptravelestimates/init%28distanceremaining_distanceremainingtodisplay_timeremaining_routedetails_%29.md): Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.

### Instance Properties

- [routeDetails](cptravelestimates/routedetails.md): Additional trip information such as battery, fuel, or toll information to display with travel estimates.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Updating Travel Estimates

- [updateEstimates(\_:for:)](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.

# CPTravelEstimates (Objective-C)

**Framework:** CarPlay  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+

An object that describes the time and distance remaining for a maneuver in a navigation session.

## Declaration

```objectivec
@interface CPTravelEstimates : NSObject
```

## Topics

### Getting the trip

- [CPTrip](cptrip.md): An object that represents a journey between an origin and a destination.

### Managing upcoming maneuvers

- [addManeuvers:](cpnavigationsession/add%28__%29-17l62.md): Adds one or more maneuvers, in chronological order, to the navigation session.
- [addLaneGuidances:](cpnavigationsession/add%28__%29-93qpu.md): Adds one or more lane guidance instances to the navigation session.
- [CPManeuver](cpmaneuver.md): An object that describes a single navigation instruction.

### Creating a Travel Estimates Object

- [initWithDistanceRemaining:timeRemaining:](cptravelestimates/init%28distanceremaining_timeremaining_%29.md): Creates travel estimates with the remaining distance and time.
- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:](cptravelestimates/init%28distanceremaining_distanceremainingtodisplay_timeremaining_%29.md): Creates a travel estimates instance with the distance remaining that the framework displays to a person.

### Updating travel estimates

- [updateTravelEstimates:forManeuver:](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.

### Managing trip navigation

- [cancelTrip](cpnavigationsession/canceltrip%28%29.md): Tells the navigation session to cancel the trip.
- [finishTrip](cpnavigationsession/finishtrip%28%29.md): Tells the navigation session to finish the trip.
- [pauseTripForReason:description:](cpnavigationsession/pausetrip%28for_description_%29.md): Tells the navigation session to pause the trip for the specified reason.
- [pauseTripForReason:description:turnCardColor:](cpnavigationsession/pausetrip%28for_description_turncardcolor_%29.md)
- [resumeTripWithUpdatedRouteInformation:](cpnavigationsession/resumetrip%28updatedrouteinformation_%29.md): Resumes the current trip with updated route information.
- [CPTripPauseReason](cpnavigationsession/pausereason.md): A set of reasons for pausing a trip.

### Getting Travel Estimates

- [distanceRemaining](cptravelestimates/distanceremaining.md): The remaining distance for the travel estimate.
- [distanceRemainingToDisplay](cptravelestimates/distanceremainingtodisplay.md): The distance remaining that the framework displays to a person, in the default units of measurement.
- [timeRemaining](cptravelestimates/timeremaining.md): The remaining time for the travel estimate.

### Instance Properties

- [routeDetails](cptravelestimates/routedetails.md): Additional trip information such as battery, fuel, or toll information to display with travel estimates.

### Instance Methods

- [initWithDistanceRemaining:distanceRemainingToDisplay:timeRemaining:routeDetails:](cptravelestimates/init%28distanceremaining_distanceremainingtodisplay_timeremaining_routedetails_%29.md): Initialize a @c CPTravelEstimates with distance, distance to display, time remaining, and additional trip information.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Updating Travel Estimates

- [updateTravelEstimates:forManeuver:](cpnavigationsession/updateestimates%28__for_%29.md): Updates the travel estimates for the specified maneuver.
