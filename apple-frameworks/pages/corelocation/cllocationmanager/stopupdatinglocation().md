> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/cllocationmanager/stopupdatinglocation()](https://developer.apple.com/documentation/corelocation/cllocationmanager/stopupdatinglocation())

# stopUpdatingLocation() (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the generation of location updates.

## Declaration

```swift
func stopUpdatingLocation()
```

<a id="Discussion"></a>

## Discussion

Call this method whenever your code no longer needs to receive location-related events. Disabling event delivery gives the receiver the option of disabling the appropriate hardware (and thereby saving power) when no clients need location data. You can always restart the generation of location updates by calling the [startUpdatingLocation()](startupdatinglocation%28%29.md) method again.

## See Also

### Running the standard location service

- [startUpdatingLocation()](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [requestLocation()](requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.

# stopUpdatingLocation (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Stops the generation of location updates.

## Declaration

```objectivec
- (void) stopUpdatingLocation;
```

<a id="Discussion"></a>

## Discussion

Call this method whenever your code no longer needs to receive location-related events. Disabling event delivery gives the receiver the option of disabling the appropriate hardware (and thereby saving power) when no clients need location data. You can always restart the generation of location updates by calling the [startUpdatingLocation](startupdatinglocation%28%29.md) method again.

## See Also

### Running the standard location service

- [startUpdatingLocation](startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [requestLocation](requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
- [CLActivityType](../clactivitytype.md): Constants that indicate the type of activity associated with location updates.
