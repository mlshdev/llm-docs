> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/devicedidchangename(_:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/devicedidchangename(_:))

# deviceDidChangeName(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate when the name of a device changes.

## Declaration

```swift
optional func deviceDidChangeName(_ device: ICDevice)
```

<a id="Discussion"></a>

## Discussion

This happens if the device module overrides the default name of the device reported by the device’s transport layer, or if the name of the filesystem volume mounted by the device is changed by the user.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Changes

- [deviceDidChangeSharingState(\_:)](devicedidchangesharingstate%28__%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.

# deviceDidChangeName: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+

Tells the delegate when the name of a device changes.

## Declaration

```objectivec
- (void) deviceDidChangeName:(ICDevice *) device;
```

<a id="Discussion"></a>

## Discussion

This happens if the device module overrides the default name of the device reported by the device’s transport layer, or if the name of the filesystem volume mounted by the device is changed by the user.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Changes

- [deviceDidChangeSharingState:](devicedidchangesharingstate%28__%29.md): Deprecated. Tells the delegate when the sharing state of a device changes.
