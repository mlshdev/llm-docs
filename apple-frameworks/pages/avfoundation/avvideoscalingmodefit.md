> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoscalingmodefit](https://developer.apple.com/documentation/avfoundation/avvideoscalingmodefit)

# AVVideoScalingModeFit (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The string identifier for scaling a video to fit the surrounding view’s dimensions.

## Declaration

```swift
let AVVideoScalingModeFit: String
```

<a id="Discussion"></a>

## Discussion

This mode crops the video to remove the edge processing region, preserving the aspect ratio of the cropped source by reducing the specified width or height, if necessary. It doesn’t scale a small source up to larger dimensions.

## See Also

### Scaling mode

- [AVVideoScalingModeKey](avvideoscalingmodekey.md): A key to retrieve the video scaling mode from a dictionary.
- [AVVideoScalingModeResize](avvideoscalingmoderesize.md): The string identifier for resizing a video to fit the surrounding view’s dimensions.
- [AVVideoScalingModeResizeAspect](avvideoscalingmoderesizeaspect.md): The string identifier for resizing a video to its surrounding view’s shorter dimension while preserving its aspect ratio.
- [AVVideoScalingModeResizeAspectFill](avvideoscalingmoderesizeaspectfill.md): The string identifier for resizing a video to fit the surrounding view’s longer dimension while preserving aspect ratio.

# AVVideoScalingModeFit (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The string identifier for scaling a video to fit the surrounding view’s dimensions.

## Declaration

```objectivec
extern NSString * const AVVideoScalingModeFit;
```

<a id="Discussion"></a>

## Discussion

This mode crops the video to remove the edge processing region, preserving the aspect ratio of the cropped source by reducing the specified width or height, if necessary. It doesn’t scale a small source up to larger dimensions.

## See Also

### Scaling mode

- [AVVideoScalingModeKey](avvideoscalingmodekey.md): A key to retrieve the video scaling mode from a dictionary.
- [AVVideoScalingModeResize](avvideoscalingmoderesize.md): The string identifier for resizing a video to fit the surrounding view’s dimensions.
- [AVVideoScalingModeResizeAspect](avvideoscalingmoderesizeaspect.md): The string identifier for resizing a video to its surrounding view’s shorter dimension while preserving its aspect ratio.
- [AVVideoScalingModeResizeAspectFill](avvideoscalingmoderesizeaspectfill.md): The string identifier for resizing a video to fit the surrounding view’s longer dimension while preserving aspect ratio.
