> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imageio/cganimateimageaturlwithblock(_:_:_:)](https://developer.apple.com/documentation/imageio/cganimateimageaturlwithblock(_:_:_:))

# CGAnimateImageAtURLWithBlock(\_:\_:\_:) (Swift)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.

## Declaration

```swift
func CGAnimateImageAtURLWithBlock(_ url: CFURL, _ options: CFDictionary?, _ block: @escaping CGImageSourceAnimationBlock) -> OSStatus
```

## Parameters

- `url`: The URL of the image file.
- `options`: Additional playback options. Include the [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md) or [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md) keys to override the timing information in the image file. Include the [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md) key to specify the index of the first image in the animation.
- `block`: The animation block to execute for each image frame. The system executes this block on the main queue, and at the intervals indicated by the image’s delay time metadata. Use this block to display the provided image in your interface.

<a id="return-value"></a>

## Return Value

A status code indicating the success or failure of the animation.

<a id="Discussion"></a>

## Discussion

The function executes the provided `block` for each frame of the animation. By default, the function uses the timing information contained in the image’s metadata. This information includes the number of seconds between individual frames, and the number of times to loop the animation. For example, the function uses the [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md) and [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md) tags from a GIF file’s metadata. To override the default timing information, provide the appropriate keys in the `options` dictionary.

## See Also

### Animations

- [CGAnimateImageDataWithBlock(\_:\_:\_:)](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.

# CGAnimateImageAtURLWithBlock (Objective-C)

**Framework:** Image I/O  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Animate the sequence of images in the Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file at the specified URL.

## Declaration

```objectivec
extern OSStatus CGAnimateImageAtURLWithBlock(CFURLRef url, CFDictionaryRef options, CGImageSourceAnimationBlock block);
```

## Parameters

- `url`: The URL of the image file.
- `options`: Additional playback options. Include the [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md) or [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md) keys to override the timing information in the image file. Include the [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md) key to specify the index of the first image in the animation.
- `block`: The animation block to execute for each image frame. The system executes this block on the main queue, and at the intervals indicated by the image’s delay time metadata. Use this block to display the provided image in your interface.

<a id="return-value"></a>

## Return Value

A status code indicating the success or failure of the animation.

<a id="Discussion"></a>

## Discussion

The function executes the provided `block` for each frame of the animation. By default, the function uses the timing information contained in the image’s metadata. This information includes the number of seconds between individual frames, and the number of times to loop the animation. For example, the function uses the [kCGImagePropertyGIFDelayTime](kcgimagepropertygifdelaytime.md) and [kCGImagePropertyGIFLoopCount](kcgimagepropertygifloopcount.md) tags from a GIF file’s metadata. To override the default timing information, provide the appropriate keys in the `options` dictionary.

## See Also

### Animations

- [CGAnimateImageDataWithBlock](cganimateimagedatawithblock%28______%29.md): Animate the sequence of images using data from a Graphics Interchange Format (GIF) or Animated Portable Network Graphics (APNG) file file.
- [CGImageSourceAnimationBlock](cgimagesourceanimationblock.md): The block to execute for each frame of an image animation.
- [kCGImageAnimationStartIndex](kcgimageanimationstartindex.md): A property that specifies the index of the first frame of an animation.
- [kCGImageAnimationDelayTime](kcgimageanimationdelaytime.md): The number of seconds to wait before displaying the next image in an animated sequence.
- [kCGImageAnimationLoopCount](kcgimageanimationloopcount.md): The number of times to repeat the animated sequence.
- [CGImageAnimationStatus](cgimageanimationstatus.md): Constants that indicate the result of animating an image sequence.
