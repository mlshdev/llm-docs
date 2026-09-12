> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcopyalldeviceswithobserver](https://developer.apple.com/documentation/metal/mtlcopyalldeviceswithobserver)

# MTLCopyAllDevicesWithObserver

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Function  
**Availability:** macOS 10.13+ (deprecated in 27.0)

Returns an array of all the Metal GPU devices in the system and registers a notification handler that Metal calls when the device list changes.

## Declaration

```objectivec
extern NSArray<id<MTLDevice>> *MTLCopyAllDevicesWithObserver(id<NSObject>*observer, MTLDeviceNotificationHandler handler);
```

## Parameters

- `observer`: A pointer to an object instance the method sets to a new observer — which Metal retains — before returning.
- `handler`: A notification handler you implement that Metal calls when the system adds or removes a GPU device from the system.

## Mentioned In

- [Handling external GPU additions and removals](handling-external-gpu-additions-and-removals.md)
- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md)

<a id="discussion"></a>

## Discussion

Keep a copy of `observer` in your app after this function returns in case you want to stop receiving notifications. You can stop receiving notifications by passing `observer` to the [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md) function.

## See Also

### Locating GPUs

- [Finding multiple GPUs on an Intel-based Mac](finding-multiple-gpus-on-an-intel-based-mac.md): Locate, identify, and choose suitable GPUs for your app.
- [Getting the GPU that drives a view’s display](getting-the-gpu-that-drives-a-views-display.md): Keep up to date with the optimal device for your display.
- [MTLCopyAllDevices](mtlcopyalldevices%28%29.md): Returns an array of all the Metal device instances in the system.
- [MTLRemoveDeviceObserver](mtlremovedeviceobserver%28__%29.md): Deprecated. Removes a registered observer of device notifications.
- [CGDirectDisplayCopyCurrentMetalDevice](../coregraphics/cgdirectdisplaycopycurrentmetaldevice%28__%29.md): Returns the GPU device instance that’s currently driving a display.
- [MTLDeviceNotificationHandler](mtldevicenotificationhandler.md): Deprecated. A Swift closure or an Objective-C block that Metal calls when the system adds or removes a GPU device.
- [MTLDeviceNotificationName](mtldevicenotificationname.md): Deprecated. A notification that represents a change to a GPU device in the system.
