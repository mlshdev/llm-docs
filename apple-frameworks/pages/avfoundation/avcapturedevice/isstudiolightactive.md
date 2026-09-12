> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isstudiolightactive](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isstudiolightactive)

# isStudioLightActive (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether Studio Light is active on a device.

## Declaration

```swift
var isStudioLightActive: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the system artificially lights the subject’s face to simulate the presence of a studio light near the camera.

## See Also

### Configuring Studio Light

- [isStudioLightEnabled](isstudiolightenabled.md): A Boolean value that indicates whether a user enabled Studio Light on a device.

# studioLightActive (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether Studio Light is active on a device.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isStudioLightActive) BOOL studioLightActive;
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the system artificially lights the subject’s face to simulate the presence of a studio light near the camera.

## See Also

### Configuring Studio Light

- [studioLightEnabled](isstudiolightenabled.md): A Boolean value that indicates whether a user enabled Studio Light on a device.
