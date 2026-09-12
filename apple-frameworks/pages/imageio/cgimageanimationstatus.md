> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimageanimationstatus](https://developer.apple.com/documentation/imageio/cgimageanimationstatus)

# CGImageAnimationStatus (Swift)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the result of animating an image sequence.

## Declaration

```swift
enum CGImageAnimationStatus
```

## Topics

### Animation Status

- [CGImageAnimationStatus.allocationFailure](cgimageanimationstatus/allocationfailure.md)
- [CGImageAnimationStatus.corruptInputImage](cgimageanimationstatus/corruptinputimage.md)
- [CGImageAnimationStatus.incompleteInputImage](cgimageanimationstatus/incompleteinputimage.md)
- [CGImageAnimationStatus.parameterError](cgimageanimationstatus/parametererror.md)
- [CGImageAnimationStatus.unsupportedFormat](cgimageanimationstatus/unsupportedformat.md)

### Initializers

- [init(rawValue:)](cgimageanimationstatus/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock(\_:\_:\_:)](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock(\_:\_:\_:)](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.

# CGImageAnimationStatus (Objective-C)

**Framework:** Image I/O  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Constants that indicate the result of animating an image sequence.

## Declaration

```objectivec
enum CGImageAnimationStatus : OSStatus;
```

## Topics

### Animation Status

- [kCGImageAnimationStatus_AllocationFailure](cgimageanimationstatus/allocationfailure.md)
- [kCGImageAnimationStatus_CorruptInputImage](cgimageanimationstatus/corruptinputimage.md)
- [kCGImageAnimationStatus_IncompleteInputImage](cgimageanimationstatus/incompleteinputimage.md)
- [kCGImageAnimationStatus_ParameterError](cgimageanimationstatus/parametererror.md)
- [kCGImageAnimationStatus_UnsupportedFormat](cgimageanimationstatus/unsupportedformat.md)

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
