> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmbatchedsensormanager/devicemotionbatch](https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager/devicemotionbatch)

# deviceMotionBatch (Swift)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
var deviceMotionBatch: [CMDeviceMotion]? { get }
```

## See Also

### Collecting device-motion data

- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md)
- [startDeviceMotionUpdates(handler:)](startdevicemotionupdates%28handler_%29.md)
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md)
- [deviceMotionUpdates()](devicemotionupdates%28%29.md)
- [CMBatchedSensorManager.DeviceMotionUpdates](devicemotionupdates.md)
- [isDeviceMotionActive](isdevicemotionactive.md)

# deviceMotionBatch (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
@property (readonly, nullable) NSArray<CMDeviceMotion *> * deviceMotionBatch;
```

## See Also

### Collecting device-motion data

- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md)
- [startDeviceMotionUpdatesWithHandler:](startdevicemotionupdates%28handler_%29.md)
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md)
- [deviceMotionActive](isdevicemotionactive.md)
