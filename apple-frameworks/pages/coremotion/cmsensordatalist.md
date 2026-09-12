> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmsensordatalist](https://developer.apple.com/documentation/coremotion/cmsensordatalist)

# CMSensorDataList (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A list of the accelerometer data recorded by the system.

## Declaration

```swift
class CMSensorDataList
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. Instead, you receive one as the result of a query for accelerometer data from a [CMSensorRecorder](cmsensorrecorder.md) object.

You use a sensor data list object to enumerate over the accelerometer data as shown in the following example:

```objc
-(void)processSamplesFromDate:(NSDate*)start toDate:(NSDate)end {
   CMSensorRecorder* recorder = [[CMSensorRecorder alloc] init];
   CMSensorDataList* list = [recorder accelerometerDataFrom:start to:end];
 
   for (CMRecordedAccelerometerData* data in list) {
      // Process the data.
      NSLog(@"Sample: (%f, %f, %f)", data.acceleration.x,
              data.acceleration.y, data.acceleration.z);
   }
}
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Accelerometers

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMAccelerometerData](cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.

# CMSensorDataList (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · watchOS 2.0+

A list of the accelerometer data recorded by the system.

## Declaration

```objectivec
@interface CMSensorDataList : NSObject
```

<a id="overview"></a>

## Overview

You do not create instances of this class directly. Instead, you receive one as the result of a query for accelerometer data from a [CMSensorRecorder](cmsensorrecorder.md) object.

You use a sensor data list object to enumerate over the accelerometer data as shown in the following example:

```objc
-(void)processSamplesFromDate:(NSDate*)start toDate:(NSDate)end {
   CMSensorRecorder* recorder = [[CMSensorRecorder alloc] init];
   CMSensorDataList* list = [recorder accelerometerDataFrom:start to:end];
 
   for (CMRecordedAccelerometerData* data in list) {
      // Process the data.
      NSLog(@"Sample: (%f, %f, %f)", data.acceleration.x,
              data.acceleration.y, data.acceleration.z);
   }
}
```

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSFastEnumeration](../foundation/nsfastenumeration.md)

## See Also

### Accelerometers

- [Getting raw accelerometer events](getting-raw-accelerometer-events.md): Retrieve data from the onboard accelerometers.
- [CMAccelerometerData](cmaccelerometerdata.md): A data sample from the device’s three accelerometers.
- [CMRecordedAccelerometerData](cmrecordedaccelerometerdata.md): A single piece of accelerometer data that was recorded by the device.
- [CMSensorRecorder](cmsensorrecorder.md): An object that gathers and retrieves accelerometer data from a device.
