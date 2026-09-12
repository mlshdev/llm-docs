> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerdata](https://developer.apple.com/documentation/coremotion/cmpedometerdata)

# CMPedometerData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Information about the distance traveled by a user on foot.

## Declaration

```swift
class CMPedometerData
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. Instead, you use a [CMPedometer](cmpedometer.md) object to request pedometer data from the system. The data for each request is packaged into an instance of this class and delivered to the handlers you registered with the pedometer object.

## Topics

### Getting the Dates

- [startDate](cmpedometerdata/startdate.md): The start time for the pedometer data.
- [endDate](cmpedometerdata/enddate.md): The end time for the pedometer data.

### Getting the Pedestrian Data

- [numberOfSteps](cmpedometerdata/numberofsteps.md): The number of steps taken by the user.
- [distance](cmpedometerdata/distance.md): The estimated distance (in meters) traveled by the user.
- [averageActivePace](cmpedometerdata/averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentPace](cmpedometerdata/currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](cmpedometerdata/currentcadence.md): The rate at which steps are taken, measured in steps per second.

### Getting the Floor Counts

- [floorsAscended](cmpedometerdata/floorsascended.md): The approximate number of floors ascended by walking.
- [floorsDescended](cmpedometerdata/floorsdescended.md): The approximate number of floors descended by walking.

### Initializers

- [init(coder:)](cmpedometerdata/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

# CMPedometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · watchOS 2.0+

Information about the distance traveled by a user on foot.

## Declaration

```objectivec
@interface CMPedometerData : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class yourself. Instead, you use a [CMPedometer](cmpedometer.md) object to request pedometer data from the system. The data for each request is packaged into an instance of this class and delivered to the handlers you registered with the pedometer object.

## Topics

### Getting the Dates

- [startDate](cmpedometerdata/startdate.md): The start time for the pedometer data.
- [endDate](cmpedometerdata/enddate.md): The end time for the pedometer data.

### Getting the Pedestrian Data

- [numberOfSteps](cmpedometerdata/numberofsteps.md): The number of steps taken by the user.
- [distance](cmpedometerdata/distance.md): The estimated distance (in meters) traveled by the user.
- [averageActivePace](cmpedometerdata/averageactivepace.md): The average pace of the user, measured in seconds per meter.
- [currentPace](cmpedometerdata/currentpace.md): The current pace of the user, measured in seconds per meter.
- [currentCadence](cmpedometerdata/currentcadence.md): The rate at which steps are taken, measured in steps per second.

### Getting the Floor Counts

- [floorsAscended](cmpedometerdata/floorsascended.md): The approximate number of floors ascended by walking.
- [floorsDescended](cmpedometerdata/floorsdescended.md): The approximate number of floors descended by walking.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.
