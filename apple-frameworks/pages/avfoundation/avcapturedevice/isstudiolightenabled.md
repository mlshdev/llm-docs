> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/isstudiolightenabled](https://developer.apple.com/documentation/avfoundation/avcapturedevice/isstudiolightenabled)

# isStudioLightEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether a user enabled Studio Light on a device.

## Declaration

```swift
class var isStudioLightEnabled: Bool { get }
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the system artificially lights the subject’s face to simulate the presence of a studio light near the camera.

This property is key-value observable.

## See Also

### Configuring Studio Light

- [isStudioLightActive](isstudiolightactive.md): A Boolean value that indicates whether Studio Light is active on a device.

# studioLightEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether a user enabled Studio Light on a device.

## Declaration

```objectivec
@property (class, readonly, getter=isStudioLightEnabled) BOOL studioLightEnabled;
```

<a id="Discussion"></a>

## Discussion

When the value is [true](https://developer.apple.com/documentation/swift/true), the system artificially lights the subject’s face to simulate the presence of a studio light near the camera.

This property is key-value observable.

## See Also

### Configuring Studio Light

- [studioLightActive](isstudiolightactive.md): A Boolean value that indicates whether Studio Light is active on a device.
