> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmhighfrequencyheartratedata](https://developer.apple.com/documentation/coremotion/cmhighfrequencyheartratedata)

# CMHighFrequencyHeartRateData (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 10.0+

A class that represents heart rate data collected at 1 Hz.

## Declaration

```swift
class CMHighFrequencyHeartRateData
```

<a id="overview"></a>

## Overview

Use the [heartRate](cmhighfrequencyheartratedata/heartrate.md) property to get the data, and the [confidence](cmhighfrequencyheartratedata/confidence.md) property for the accuracy.

## Topics

### Accessing heart rate data

- [heartRate](cmhighfrequencyheartratedata/heartrate.md): The heart rate value in units of beats per minute (BPM).
- [confidence](cmhighfrequencyheartratedata/confidence.md): The confidence level of the heart rate value.
- [CMHighFrequencyHeartRateDataConfidence](cmhighfrequencyheartratedataconfidence.md): The level of confidence in the accuracy of the heart rate data.

### Getting the sample date

- [date](cmhighfrequencyheartratedata/date.md): The time the heart rate value occurs.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

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
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.

# CMHighFrequencyHeartRateData (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · watchOS 10.0+

A class that represents heart rate data collected at 1 Hz.

## Declaration

```objectivec
@interface CMHighFrequencyHeartRateData : CMLogItem
```

<a id="overview"></a>

## Overview

Use the [heartRate](cmhighfrequencyheartratedata/heartrate.md) property to get the data, and the [confidence](cmhighfrequencyheartratedata/confidence.md) property for the accuracy.

## Topics

### Accessing heart rate data

- [heartRate](cmhighfrequencyheartratedata/heartrate.md): The heart rate value in units of beats per minute (BPM).
- [confidence](cmhighfrequencyheartratedata/confidence.md): The confidence level of the heart rate value.
- [CMHighFrequencyHeartRateDataConfidence](cmhighfrequencyheartratedataconfidence.md): The level of confidence in the accuracy of the heart rate data.

### Getting the sample date

- [date](cmhighfrequencyheartratedata/date.md): The time the heart rate value occurs.

## Relationships

### Inherits From

- [CMLogItem](cmlogitem.md)

## See Also

### Pedometer and fitness

- [CMPedometer](cmpedometer.md): An object for fetching the system-generated live walking data.
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMPedometerEvent](cmpedometerevent.md): A change in the user’s pedestrian activity.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
