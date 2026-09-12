> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/isconstantcolorsupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/isconstantcolorsupported)

# isConstantColorSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether a photo output supports constant color capture.

## Declaration

```swift
var isConstantColorSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The light sources illuminating a scene affect an object’s color in a photograph, so the color of the same object captured in warm light might look significantly different than in colder light. In some cases, ambient light-induced color variation is undesirable, and you may prefer an estimate of what these materials would look like under a standard light such as daylight (D65), regardless of the lighting conditions at the time of capture. Some devices are capable of producing such constant color photos.

Constant color captures require the flash to fire and may require a pre-flash sequence to determine the correct focus and exposure, therefore it might take several seconds to acquire a constant color photo. Due to this flash requirement, you can only take a constant color capture with [AVCaptureDevice.FlashMode.auto](../avcapturedevice/flashmode-swift.enum/auto.md) or [AVCaptureDevice.FlashMode.on](../avcapturedevice/flashmode-swift.enum/on.md) as the flash mode, otherwise the system throws an exception.

You can only achieve constant color when the flash has a discernible effect on the scene, so it may not perform well in bright conditions such as direct sunlight. Use the photo’s [constantColorConfidenceMap](../avcapturephoto/constantcolorconfidencemap.md) property to examine the confidence level, and therefore the usefulness, of each region of a constant color photo.

The property value is [true](https://developer.apple.com/documentation/swift/true) if the session’s current configuration allows the output to capture photos with constant color.

When switching cameras or formats this property may change. When this property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), the value of [isConstantColorEnabled](isconstantcolorenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false). If you’ve previously opted in to constant color and then change configurations, you may need to set the value of [isConstantColorEnabled](isconstantcolorenabled.md) to [true](https://developer.apple.com/documentation/swift/true) again.

This property is key-value observable.

## See Also

### Configuring constant color

- [isConstantColorEnabled](isconstantcolorenabled.md): A Boolean value that indicates whether the photo output configures the render pipeline to perform constant color capture.

# constantColorSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+

A Boolean value that indicates whether a photo output supports constant color capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isConstantColorSupported) BOOL constantColorSupported;
```

<a id="Discussion"></a>

## Discussion

The light sources illuminating a scene affect an object’s color in a photograph, so the color of the same object captured in warm light might look significantly different than in colder light. In some cases, ambient light-induced color variation is undesirable, and you may prefer an estimate of what these materials would look like under a standard light such as daylight (D65), regardless of the lighting conditions at the time of capture. Some devices are capable of producing such constant color photos.

Constant color captures require the flash to fire and may require a pre-flash sequence to determine the correct focus and exposure, therefore it might take several seconds to acquire a constant color photo. Due to this flash requirement, you can only take a constant color capture with [AVCaptureFlashModeAuto](../avcapturedevice/flashmode-swift.enum/auto.md) or [AVCaptureFlashModeOn](../avcapturedevice/flashmode-swift.enum/on.md) as the flash mode, otherwise the system throws an exception.

You can only achieve constant color when the flash has a discernible effect on the scene, so it may not perform well in bright conditions such as direct sunlight. Use the photo’s [constantColorConfidenceMap](../avcapturephoto/constantcolorconfidencemap.md) property to examine the confidence level, and therefore the usefulness, of each region of a constant color photo.

The property value is [true](https://developer.apple.com/documentation/swift/true) if the session’s current configuration allows the output to capture photos with constant color.

When switching cameras or formats this property may change. When this property changes from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), the value of [constantColorEnabled](isconstantcolorenabled.md) also reverts to [false](https://developer.apple.com/documentation/swift/false). If you’ve previously opted in to constant color and then change configurations, you may need to set the value of [constantColorEnabled](isconstantcolorenabled.md) to [true](https://developer.apple.com/documentation/swift/true) again.

This property is key-value observable.

## See Also

### Configuring constant color

- [constantColorEnabled](isconstantcolorenabled.md): A Boolean value that indicates whether the photo output configures the render pipeline to perform constant color capture.
