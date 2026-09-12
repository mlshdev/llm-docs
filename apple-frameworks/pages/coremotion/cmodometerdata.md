> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmodometerdata](https://developer.apple.com/documentation/coremotion/cmodometerdata)

# CMOdometerData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 1.0+

A class that represents odometer data for workouts.

## Declaration

```swift
class CMOdometerData
```

<a id="overview"></a>

## Overview

To get the measurements, use the [speed](cmodometerdata/speed.md) and [slope](cmodometerdata/slope-96hlt.md) properties. To compute distances, use the [deltaDistance](cmodometerdata/deltadistance.md) and [deltaAltitude](cmodometerdata/deltaaltitude.md) properties.

## Topics

### Getting speed and slope

- [speed](cmodometerdata/speed.md): The instantaneous velocity of the device, measured in meters per second.
- [slope](cmodometerdata/slope-9h3m4.md): The slope at the location toward the direction of travel, measured in degrees.
- [maxAbsSlope](cmodometerdata/maxabsslope-9mnfd.md): The maximum absolute slope at the location toward all directions, measured in degrees.

### Getting date and times

- [startDate](cmodometerdata/startdate.md): The time that the device starts recording the odometer data.
- [endDate](cmodometerdata/enddate.md): The time that the device stops recording the odometer data.
- [gpsDate](cmodometerdata/gpsdate.md): The time of the GPS measurement associated with the location.

### Measuring distances

- [deltaDistance](cmodometerdata/deltadistance.md): The change in distance that the user travels since the last location, measured in meters.
- [deltaAltitude](cmodometerdata/deltaaltitude.md): The change in altitude above mean sea level associated with the location, measured in meters.

### Getting the location accuracy

- [speedAccuracy](cmodometerdata/speedaccuracy.md): The accuracy of the speed value.
- [verticalAccuracy](cmodometerdata/verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.
- [deltaDistanceAccuracy](cmodometerdata/deltadistanceaccuracy.md): The accuracy of the change in distance value.

### Getting the device

- [originDevice](cmodometerdata/origindevice.md): The device that measures the data.
- [CMOdometerOriginDevice](cmodometerorigindevice.md): The device that the odometer sample originates from.

### Initializers

- [init(coder:)](cmodometerdata/init%28coder_%29.md)

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

# CMOdometerData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 1.0+

A class that represents odometer data for workouts.

## Declaration

```objectivec
@interface CMOdometerData : NSObject
```

<a id="overview"></a>

## Overview

To get the measurements, use the [speed](cmodometerdata/speed.md) and [slope](cmodometerdata/slope-96hlt.md) properties. To compute distances, use the [deltaDistance](cmodometerdata/deltadistance.md) and [deltaAltitude](cmodometerdata/deltaaltitude.md) properties.

## Topics

### Getting speed and slope

- [speed](cmodometerdata/speed.md): The instantaneous velocity of the device, measured in meters per second.
- [slope](cmodometerdata/slope-96hlt.md): The slope at the location toward the direction of travel, measured in degrees.
- [maxAbsSlope](cmodometerdata/maxabsslope-96ulr.md): The maximum absolute slope at the location toward all directions, measured in degrees.

### Getting date and times

- [startDate](cmodometerdata/startdate.md): The time that the device starts recording the odometer data.
- [endDate](cmodometerdata/enddate.md): The time that the device stops recording the odometer data.
- [gpsDate](cmodometerdata/gpsdate.md): The time of the GPS measurement associated with the location.

### Measuring distances

- [deltaDistance](cmodometerdata/deltadistance.md): The change in distance that the user travels since the last location, measured in meters.
- [deltaAltitude](cmodometerdata/deltaaltitude.md): The change in altitude above mean sea level associated with the location, measured in meters.

### Getting the location accuracy

- [speedAccuracy](cmodometerdata/speedaccuracy.md): The accuracy of the speed value.
- [verticalAccuracy](cmodometerdata/verticalaccuracy.md): The validity of the altitude values and their estimated uncertainty, measured in meters.
- [deltaDistanceAccuracy](cmodometerdata/deltadistanceaccuracy.md): The accuracy of the change in distance value.

### Getting the device

- [originDevice](cmodometerdata/origindevice.md): The device that measures the data.
- [CMOdometerOriginDevice](cmodometerorigindevice.md): The device that the odometer sample originates from.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.
