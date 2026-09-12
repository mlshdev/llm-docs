> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmbatchedsensormanager/startdevicemotionupdates(handler:)](https://developer.apple.com/documentation/coremotion/cmbatchedsensormanager/startdevicemotionupdates(handler:))

# startDeviceMotionUpdates(handler:) (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```swift
func startDeviceMotionUpdates(handler: @escaping ([CMDeviceMotion]?, (any Error)?) -> Void)
```

## See Also

### Collecting device-motion data

- [startDeviceMotionUpdates()](startdevicemotionupdates%28%29.md)
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md)
- [deviceMotionBatch](devicemotionbatch.md)
- [deviceMotionUpdates()](devicemotionupdates%28%29.md)
- [CMBatchedSensorManager.DeviceMotionUpdates](devicemotionupdates.md)
- [isDeviceMotionActive](isdevicemotionactive.md)

# startDeviceMotionUpdatesWithHandler: (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · visionOS 1.0+ · watchOS 10.0+

## Declaration

```objectivec
- (void) startDeviceMotionUpdatesWithHandler:(void (^)(NSArray<CMDeviceMotion *> *data, NSError *error)) handler;
```

## See Also

### Collecting device-motion data

- [startDeviceMotionUpdates](startdevicemotionupdates%28%29.md)
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md)
- [deviceMotionBatch](devicemotionbatch.md)
- [deviceMotionActive](isdevicemotionactive.md)
