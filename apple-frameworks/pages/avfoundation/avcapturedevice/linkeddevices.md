> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avcapturedevice/linkeddevices

# linkedDevices (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of capture devices that are physically linked to a device.

## Declaration

```swift
var linkedDevices: [AVCaptureDevice] { get }
```

<a id="Discussion"></a>

## Discussion

For an external iSight camera, the array contains an [AVCaptureDevice](../avcapturedevice.md) instance that represents the external iSight microphone.

# linkedDevices (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

An array of capture devices that are physically linked to a device.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<AVCaptureDevice *> * linkedDevices;
```

<a id="Discussion"></a>

## Discussion

For an external iSight camera, the array contains an [AVCaptureDevice](../avcapturedevice.md) instance that represents the external iSight microphone.
