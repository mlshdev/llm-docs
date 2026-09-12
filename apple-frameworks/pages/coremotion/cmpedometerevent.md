> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmpedometerevent](https://developer.apple.com/documentation/coremotion/cmpedometerevent)

# CMPedometerEvent (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 3.0+

A change in the user’s pedestrian activity.

## Declaration

```swift
class CMPedometerEvent
```

## Topics

### Pedometer Data

- [date](cmpedometerevent/date.md): The date on which the pedometer event was recorded.
- [type](cmpedometerevent/type.md): The type of change that occurred.
- [CMPedometerEventType](cmpedometereventtype.md): Constants indicating the change that occurred to the user’s pedestrian activity.

### Initializers

- [init(coder:)](cmpedometerevent/init%28coder_%29.md)

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
- [CMPedometerData](cmpedometerdata.md): Information about the distance traveled by a user on foot.
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.

# CMPedometerEvent (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+ · watchOS 3.0+

A change in the user’s pedestrian activity.

## Declaration

```objectivec
@interface CMPedometerEvent : NSObject
```

## Topics

### Pedometer Data

- [date](cmpedometerevent/date.md): The date on which the pedometer event was recorded.
- [type](cmpedometerevent/type.md): The type of change that occurred.
- [CMPedometerEventType](cmpedometereventtype.md): Constants indicating the change that occurred to the user’s pedestrian activity.

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
- [CMStepCounter](cmstepcounter.md): Deprecated. The number of steps the user has taken with the device.
- [CMOdometerData](cmodometerdata.md): A class that represents odometer data for workouts.
- [CMHighFrequencyHeartRateData](cmhighfrequencyheartratedata.md): A class that represents heart rate data collected at 1 Hz.
