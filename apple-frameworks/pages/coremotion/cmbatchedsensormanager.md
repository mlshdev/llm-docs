> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmbatchedsensormanager](https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager)

# CMBatchedSensorManager (Swift)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
class CMBatchedSensorManager
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

## Topics

### Determining authorization and availability

- [authorizationStatus](cmbatchedsensormanager/authorizationstatus.md)
- [isAccelerometerSupported](cmbatchedsensormanager/isaccelerometersupported.md)
- [isDeviceMotionSupported](cmbatchedsensormanager/isdevicemotionsupported.md)

### Configuring the update frequency

- [deviceMotionDataFrequency](cmbatchedsensormanager/devicemotiondatafrequency.md)
- [accelerometerDataFrequency](cmbatchedsensormanager/accelerometerdatafrequency.md)

### Collecting device-motion data

- [startDeviceMotionUpdates()](cmbatchedsensormanager/startdevicemotionupdates%28%29.md)
- [startDeviceMotionUpdates(handler:)](cmbatchedsensormanager/startdevicemotionupdates%28handler_%29.md)
- [stopDeviceMotionUpdates()](cmbatchedsensormanager/stopdevicemotionupdates%28%29.md)
- [deviceMotionBatch](cmbatchedsensormanager/devicemotionbatch.md)
- [deviceMotionUpdates()](cmbatchedsensormanager/devicemotionupdates%28%29.md)
- [CMBatchedSensorManager.DeviceMotionUpdates](cmbatchedsensormanager/devicemotionupdates.md)
- [isDeviceMotionActive](cmbatchedsensormanager/isdevicemotionactive.md)

### Collecting accelerometer data

- [startAccelerometerUpdates()](cmbatchedsensormanager/startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdates(handler:)](cmbatchedsensormanager/startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates()](cmbatchedsensormanager/stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](cmbatchedsensormanager/accelerometerbatch.md)
- [accelerometerUpdates()](cmbatchedsensormanager/accelerometerupdates%28%29.md)
- [CMBatchedSensorManager.AccelerometerUpdates](cmbatchedsensormanager/accelerometerupdates.md)
- [isAccelerometerActive](cmbatchedsensormanager/isaccelerometeractive.md)

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

# CMBatchedSensorManager (Objective-C)

**Framework:** Core Motion  
**Kind:** Class  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
@interface CMBatchedSensorManager : NSObject
```

## Mentioned In

- [Getting processed device-motion data](getting-processed-device-motion-data.md)

## Topics

### Determining authorization and availability

- [authorizationStatus](cmbatchedsensormanager/authorizationstatus.md)
- [accelerometerSupported](cmbatchedsensormanager/isaccelerometersupported.md)
- [deviceMotionSupported](cmbatchedsensormanager/isdevicemotionsupported.md)

### Configuring the update frequency

- [deviceMotionDataFrequency](cmbatchedsensormanager/devicemotiondatafrequency.md)
- [accelerometerDataFrequency](cmbatchedsensormanager/accelerometerdatafrequency.md)

### Collecting device-motion data

- [startDeviceMotionUpdates](cmbatchedsensormanager/startdevicemotionupdates%28%29.md)
- [startDeviceMotionUpdatesWithHandler:](cmbatchedsensormanager/startdevicemotionupdates%28handler_%29.md)
- [stopDeviceMotionUpdates](cmbatchedsensormanager/stopdevicemotionupdates%28%29.md)
- [deviceMotionBatch](cmbatchedsensormanager/devicemotionbatch.md)
- [deviceMotionActive](cmbatchedsensormanager/isdevicemotionactive.md)

### Collecting accelerometer data

- [startAccelerometerUpdates](cmbatchedsensormanager/startaccelerometerupdates%28%29.md)
- [startAccelerometerUpdatesWithHandler:](cmbatchedsensormanager/startaccelerometerupdates%28handler_%29.md)
- [stopAccelerometerUpdates](cmbatchedsensormanager/stopaccelerometerupdates%28%29.md)
- [accelerometerBatch](cmbatchedsensormanager/accelerometerbatch.md)
- [accelerometerActive](cmbatchedsensormanager/isaccelerometeractive.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
