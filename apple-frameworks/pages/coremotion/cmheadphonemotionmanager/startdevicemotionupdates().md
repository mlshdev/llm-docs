> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmheadphonemotionmanager/startdevicemotionupdates()](https://developer.apple.com/documentation/coremotion/cmheadphonemotionmanager/startdevicemotionupdates())

# startDeviceMotionUpdates() (Swift)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Starts device-motion updates.

## Declaration

```swift
func startDeviceMotionUpdates()
```

<a id="Discussion"></a>

## Discussion

To receive the latest device-motion data, examine the [deviceMotion](devicemotion.md) property.

## See Also

### Starting and Stopping Updates

- [startDeviceMotionUpdates(to:withHandler:)](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates with a handler.
- [startConnectionStatusUpdates()](startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates()](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates()](stopconnectionstatusupdates%28%29.md)

# startDeviceMotionUpdates (Objective-C)

**Framework:** Core Motion  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 14.0+ · watchOS 7.0+

Starts device-motion updates.

## Declaration

```objectivec
- (void) startDeviceMotionUpdates;
```

<a id="Discussion"></a>

## Discussion

To receive the latest device-motion data, examine the [deviceMotion](devicemotion.md) property.

## See Also

### Starting and Stopping Updates

- [startDeviceMotionUpdatesToQueue:withHandler:](startdevicemotionupdates%28to_withhandler_%29.md): Starts device-motion updates with a handler.
- [startConnectionStatusUpdates](startconnectionstatusupdates%28%29.md)
- [stopDeviceMotionUpdates](stopdevicemotionupdates%28%29.md): Stops device-motion updates.
- [stopConnectionStatusUpdates](stopconnectionstatusupdates%28%29.md)
