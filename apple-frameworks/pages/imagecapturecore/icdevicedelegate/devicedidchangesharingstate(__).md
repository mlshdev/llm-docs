> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicedelegate/devicedidchangesharingstate(_:)](https://developer.apple.com/documentation/imagecapturecore/icdevicedelegate/devicedidchangesharingstate(_:))

# deviceDidChangeSharingState(\_:) (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Tells the delegate when the sharing state of a device changes.

> Device sharing is no longer available

## Declaration

```swift
optional func deviceDidChangeSharingState(_ device: ICDevice)
```

<a id="Discussion"></a>

## Discussion

Any Image Capture client application can choose to share the device over the network using the sharing or webSharing facility in Image Capture.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Changes

- [deviceDidChangeName(\_:)](devicedidchangename%28__%29.md): Tells the delegate when the name of a device changes.

# deviceDidChangeSharingState: (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Tells the delegate when the sharing state of a device changes.

> Device sharing is no longer available

## Declaration

```objectivec
- (void) deviceDidChangeSharingState:(ICDevice *) device;
```

<a id="Discussion"></a>

## Discussion

Any Image Capture client application can choose to share the device over the network using the sharing or webSharing facility in Image Capture.

Execution of the delegate callback occurs on the main thread.

## See Also

### Responding to Device Changes

- [deviceDidChangeName:](devicedidchangename%28__%29.md): Tells the delegate when the name of a device changes.
