> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometer](https://developer.apple.com/documentation/coremotion/cmpedometer)

# CMPedometer (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

An object for fetching the system-generated live walking data.

## Declaration

```swift
class CMPedometer
```

<a id="overview"></a>

## Overview

You use a pedometer object to retrieve step counts and other information about the distance traveled and the number of floors ascended or descended. The pedometer object manages a cache of historic data that you can query or you can ask for live updates as the data is processed.

To use a pedometer object, create an instance of this class and call the appropriate methods. Use the [queryPedometerData(from:to:withHandler:)](cmpedometer/querypedometerdata%28from_to_withhandler_%29.md) method to retrieve data that has already been gathered. To get live updates, use the [startUpdates(from:withHandler:)](cmpedometer/startupdates%28from_withhandler_%29.md) method to start the delivery of events to the handler you provide.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Pedometer Availability

- [isStepCountingAvailable()](cmpedometer/isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable()](cmpedometer/isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable()](cmpedometer/isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable()](cmpedometer/ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable()](cmpedometer/iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable()](cmpedometer/ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus()](cmpedometer/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Gathering Live Pedometer Data

- [startUpdates(from:withHandler:)](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopUpdates()](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startEventUpdates(handler:)](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopEventUpdates()](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](cmpedometereventhandler.md): A block for processing pedometer events.

### Fetching Historical Pedometer Data

- [queryPedometerData(from:to:withHandler:)](cmpedometer/querypedometerdata%28from_to_withhandler_%29.md): Retrieves the data between the specified start and end dates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Pedometer and fitness

- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

# CMPedometer (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

An object for fetching the system-generated live walking data.

## Declaration

```objectivec
@interface CMPedometer : NSObject
```

<a id="overview"></a>

## Overview

You use a pedometer object to retrieve step counts and other information about the distance traveled and the number of floors ascended or descended. The pedometer object manages a cache of historic data that you can query or you can ask for live updates as the data is processed.

To use a pedometer object, create an instance of this class and call the appropriate methods. Use the [queryPedometerDataFromDate:toDate:withHandler:](cmpedometer/querypedometerdata%28from_to_withhandler_%29.md) method to retrieve data that has already been gathered. To get live updates, use the [startPedometerUpdatesFromDate:withHandler:](cmpedometer/startupdates%28from_withhandler_%29.md) method to start the delivery of events to the handler you provide.

> **Important**

>  To use this API, you must include the [NSMotionUsageDescription](../bundleresources/information-property-list/nsmotionusagedescription.md) key in your app’s `Info.plist` file and provide a usage description string for this key. The usage description appears in the prompt that the user must accept the first time the system asks the user to access motion data for your app. If you don’t include a usage description string, your app crashes when you call this API.

## Topics

### Determining Pedometer Availability

- [isStepCountingAvailable](cmpedometer/isstepcountingavailable%28%29.md): Returns a Boolean value indicating whether step counting is available on the current device.
- [isDistanceAvailable](cmpedometer/isdistanceavailable%28%29.md): Returns a Boolean value indicating whether distance estimation is available on the current device.
- [isFloorCountingAvailable](cmpedometer/isfloorcountingavailable%28%29.md): Returns a Boolean value indicating whether floor counting is available on the current device.
- [isPaceAvailable](cmpedometer/ispaceavailable%28%29.md): Returns a Boolean value indicating whether pace information is available on the current device.
- [isCadenceAvailable](cmpedometer/iscadenceavailable%28%29.md): Returns a Boolean value indicating whether cadence information is available on the current device.
- [isPedometerEventTrackingAvailable](cmpedometer/ispedometereventtrackingavailable%28%29.md): Returns a Boolean value indicating whether pedometer events are available on the current device.
- [authorizationStatus](cmpedometer/authorizationstatus%28%29.md): Returns a value indicating whether the app is authorized to gather pedometer data.
- [CMAuthorizationStatus](cmauthorizationstatus.md): The authorization status for motion-related features.

### Gathering Live Pedometer Data

- [startPedometerUpdatesFromDate:withHandler:](cmpedometer/startupdates%28from_withhandler_%29.md): Starts the delivery of recent pedestrian-related data to your app.
- [stopPedometerUpdates](cmpedometer/stopupdates%28%29.md): Stops the delivery of recent pedestrian data updates to your app.
- [startPedometerEventUpdatesWithHandler:](cmpedometer/starteventupdates%28handler_%29.md): Starts the delivery of pedometer events to your app.
- [stopPedometerEventUpdates](cmpedometer/stopeventupdates%28%29.md): Stops the delivery of pedometer events to your app.
- [CMPedometerHandler](cmpedometerhandler.md): A block for processing pedometer-related data.
- [CMPedometerEventHandler](cmpedometereventhandler.md): A block for processing pedometer events.

### Fetching Historical Pedometer Data

- [queryPedometerDataFromDate:toDate:withHandler:](cmpedometer/querypedometerdata%28from_to_withhandler_%29.md): Retrieves the data between the specified start and end dates.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Pedometer and fitness

- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.
