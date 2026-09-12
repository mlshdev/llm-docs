> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cgimagesourceanimationblock](https://developer.apple.com/documentation/imageio/cgimagesourceanimationblock)

# CGImageSourceAnimationBlock (Swift)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to execute for each frame of an image animation.

## Declaration

```swift
typealias CGImageSourceAnimationBlock = (Int, CGImage, UnsafeMutablePointer<Bool>) -> Void
```

## Parameters

- `index`: The index of the image in the file.
- `image`: The image to display.
- `stop`: A Boolean flag set to `false` on input. To stop the animation, set the value of this parameter to `true`.

<a id="Discussion"></a>

## Discussion

During the animation of an image, the system calls this block for each successive frame of the animation. Use this block to display the new image in your app’s interface, and to update any additional details.

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock(\_:\_:\_:)](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock(\_:\_:\_:)](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.

# CGImageSourceAnimationBlock (Objective-C)

**Framework:** Image I/O  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The block to execute for each frame of an image animation.

## Declaration

```objectivec
typedef void (^)(unsigned long, struct CGImage *, _Bool *) CGImageSourceAnimationBlock;
```

## Parameters

- `index`: The index of the image in the file.
- `image`: The image to display.
- `stop`: A Boolean flag set to `false` on input. To stop the animation, set the value of this parameter to `true`.

<a id="Discussion"></a>

## Discussion

During the animation of an image, the system calls this block for each successive frame of the animation. Use this block to display the new image in your app’s interface, and to update any additional details.

## See Also

### Animations

- [CGAnimateImageAtURLWithBlock](cganimateimageaturlwithblock%28______%29.md): Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.
- [CGAnimateImageDataWithBlock](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.
