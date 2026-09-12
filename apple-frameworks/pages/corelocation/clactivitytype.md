> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clactivitytype](https://developer.apple.com/documentation/corelocation/clactivitytype)

# CLActivityType (Swift)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the type of activity associated with location updates.

## Declaration

```swift
enum CLActivityType
```

## Topics

### Activity types

- [CLActivityType.airborne](clactivitytype/airborne.md): The value that indicates activities in the air.
- [CLActivityType.automotiveNavigation](clactivitytype/automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityType.fitness](clactivitytype/fitness.md): The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.
- [CLActivityType.maritime](clactivitytype/maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityType.other](clactivitytype/other.md): The value that indicates the app is using location manager for an unspecified activity.
- [CLActivityType.otherNavigation](clactivitytype/othernavigation.md): The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.

### Creating an activity type instance

- [init(rawValue:)](clactivitytype/init%28rawvalue_%29.md): Creates an activity type instance with the provided value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Running the standard location service

- [startUpdatingLocation()](cllocationmanager/startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation()](cllocationmanager/stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation()](cllocationmanager/requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](cllocationmanager/pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](cllocationmanager/allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](cllocationmanager/showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](cllocationmanager/activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.

# CLActivityType (Objective-C)

**Framework:** Core Location  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the type of activity associated with location updates.

## Declaration

```objectivec
enum CLActivityType : NSInteger;
```

## Topics

### Activity types

- [CLActivityTypeAirborne](clactivitytype/airborne.md): The value that indicates activities in the air.
- [CLActivityTypeAutomotiveNavigation](clactivitytype/automotivenavigation.md): The value that indicates positioning in an automobile following a road network.
- [CLActivityTypeFitness](clactivitytype/fitness.md): The value that indicates positioning during dedicated fitness sessions, such as walking workouts, running workouts, cycling workouts, and so on.
- [CLActivityTypeMaritime](clactivitytype/maritime.md): The value that indicates positioning for activities in vessels on water, including while anchored.
- [CLActivityTypeOther](clactivitytype/other.md): The value that indicates the app is using location manager for an unspecified activity.
- [CLActivityTypeOtherNavigation](clactivitytype/othernavigation.md): The value that indicates positioning for activities that don’t or may not adhere to roads such as cycling, scooters, trains, boats and off-road vehicles.

## See Also

### Running the standard location service

- [startUpdatingLocation](cllocationmanager/startupdatinglocation%28%29.md): Starts the generation of updates that report the user’s current location.
- [stopUpdatingLocation](cllocationmanager/stopupdatinglocation%28%29.md): Stops the generation of location updates.
- [requestLocation](cllocationmanager/requestlocation%28%29.md): Requests the one-time delivery of the user’s current location.
- [pausesLocationUpdatesAutomatically](cllocationmanager/pauseslocationupdatesautomatically.md): A Boolean value that indicates whether the location-manager object may pause location updates.
- [allowsBackgroundLocationUpdates](cllocationmanager/allowsbackgroundlocationupdates.md): A Boolean value that indicates whether the app receives location updates when running in the background.
- [showsBackgroundLocationIndicator](cllocationmanager/showsbackgroundlocationindicator.md): A Boolean value that indicates whether the status bar changes its appearance when an app uses location services in the background.
- [activityType](cllocationmanager/activitytype.md): The type of activity the app expects the user to typically perform while in the app’s location session.
