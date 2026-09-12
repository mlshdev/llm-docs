> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/kcgimageanimationdelaytime](https://developer.apple.com/documentation/imageio/kcgimageanimationdelaytime)

# kCGImageAnimationDelayTime (Swift)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```swift
let kCGImageAnimationDelayTime: CFString
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumber](../corefoundation/cfnumber.md) with a floating-point value. To override the delay time value in the image file, include this property in the options dictionary when animating an image.

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock(\_:\_:\_:)](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock(\_:\_:\_:)](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.

# kCGImageAnimationDelayTime (Objective-C)

**Framework:** Image I/O  
**Kind:** Global Variable  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The number of seconds to wait before displaying the next image in an animated sequence.

## Declaration

```objectivec
extern CFStringRef const kCGImageAnimationDelayTime;
```

<a id="Discussion"></a>

## Discussion

The value of this property is a [CFNumberRef](../corefoundation/cfnumber.md) with a floating-point value. To override the delay time value in the image file, include this property in the options dictionary when animating an image.

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.
