> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/minimumfocusdistance](https://developer.apple.com/documentation/avfoundation/avcapturedevice/minimumfocusdistance)

# minimumFocusDistance (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The capture device’s minimum focus distance in millimeters.

## Declaration

```swift
var minimumFocusDistance: Int { get }
```

<a id="Discussion"></a>

## Discussion

For virtual cameras, like [builtInDualCamera](devicetype-swift.struct/builtindualcamera.md) or [builtInTripleCamera](devicetype-swift.struct/builtintriplecamera.md), this value represents the smallest minimum focus distance of the autofocus-capable cameras that it sources.

This value is `-1` if the distance is unknown.

# minimumFocusDistance (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+

The capture device’s minimum focus distance in millimeters.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger minimumFocusDistance;
```

<a id="Discussion"></a>

## Discussion

For virtual cameras, like [AVCaptureDeviceTypeBuiltInDualCamera](devicetype-swift.struct/builtindualcamera.md) or [AVCaptureDeviceTypeBuiltInTripleCamera](devicetype-swift.struct/builtintriplecamera.md), this value represents the smallest minimum focus distance of the autofocus-capable cameras that it sources.

This value is `-1` if the distance is unknown.
