> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmstepcounter](https://developer.apple.com/documentation/coremotion/cmstepcounter)

# CMStepCounter (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The number of steps the user has taken with the device.

> Use the [CMPedometer](cmpedometer.md) class instead.

## Declaration

```swift
class CMStepCounter
```

<a id="overview"></a>

## Overview

Step information is gathered on devices with the appropriate built-in hardware and stored so that you can run queries to determine the user’s recent physical activity. You use this class to gather both current step data and any historical data.

## Topics

### Determining Step Counting Availability

- [isStepCountingAvailable()](cmstepcounter/isstepcountingavailable%28%29.md): Deprecated. Returns a Boolean indicating whether step-counting support is available on the current device.

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdates(to:updateOn:withHandler:)](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [stopStepCountingUpdates()](cmstepcounter/stopstepcountingupdates%28%29.md): Deprecated. Stops the delivery of step-counting updates to your app.
- [CMStepUpdateHandler](cmstepupdatehandler.md): A block that reports the number of steps recorded since updates began.

### Getting Historical Step Counting Data

- [queryStepCountStarting(from:to:to:withHandler:)](cmstepcounter/querystepcountstarting%28from_to_to_withhandler_%29.md): Deprecated. Gathers and returns historical step count data for the specified time period.
- [CMStepQueryHandler](cmstepqueryhandler.md): A block that reports the number of steps for a query operation.

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

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

# CMStepCounter (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 7.0+ (deprecated in 8.0) · iPadOS 7.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

The number of steps the user has taken with the device.

> Use the [CMPedometer](cmpedometer.md) class instead.

## Declaration

```objectivec
@interface CMStepCounter : NSObject
```

<a id="overview"></a>

## Overview

Step information is gathered on devices with the appropriate built-in hardware and stored so that you can run queries to determine the user’s recent physical activity. You use this class to gather both current step data and any historical data.

## Topics

### Determining Step Counting Availability

- [isStepCountingAvailable](cmstepcounter/isstepcountingavailable%28%29.md): Deprecated. Returns a Boolean indicating whether step-counting support is available on the current device.

### Starting and Stopping Step Counting Updates

- [startStepCountingUpdatesToQueue:updateOn:withHandler:](cmstepcounter/startstepcountingupdates%28to_updateon_withhandler_%29.md): Deprecated. Starts the delivery of current step-counting data to your app.
- [stopStepCountingUpdates](cmstepcounter/stopstepcountingupdates%28%29.md): Deprecated. Stops the delivery of step-counting updates to your app.
- [CMStepUpdateHandler](cmstepupdatehandler.md): A block that reports the number of steps recorded since updates began.

### Getting Historical Step Counting Data

- [queryStepCountStartingFrom:to:toQueue:withHandler:](cmstepcounter/querystepcountstarting%28from_to_to_withhandler_%29.md): Deprecated. Gathers and returns historical step count data for the specified time period.
- [CMStepQueryHandler](cmstepqueryhandler.md): A block that reports the number of steps for a query operation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.
