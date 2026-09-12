> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideoscalingmoderesize](https://developer.apple.com/documentation/avfoundation/avvideoscalingmoderesize)

# AVVideoScalingModeResize (Swift)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The string identifier for resizing a video to fit the surrounding view’s dimensions.

## Declaration

```swift
let AVVideoScalingModeResize: String
```

<a id="Discussion"></a>

## Discussion

This mode crops the video to remove the edge processing region and scales the remainder to the destination area. It doesn’t preserve the aspect ratio.

## See Also

### Scaling mode

- [AVVideoScalingModeFit](avvideoscalingmodefit.md): The string identifier for scaling a video to fit the surrounding view’s dimensions.
- [AVVideoScalingModeKey](avvideoscalingmodekey.md): A key to retrieve the video scaling mode from a dictionary.
- [AVVideoScalingModeResizeAspect](avvideoscalingmoderesizeaspect.md): The string identifier for resizing a video to its surrounding view’s shorter dimension while preserving its aspect ratio.
- [AVVideoScalingModeResizeAspectFill](avvideoscalingmoderesizeaspectfill.md): The string identifier for resizing a video to fit the surrounding view’s longer dimension while preserving aspect ratio.

# AVVideoScalingModeResize (Objective-C)

**Framework:** AVFoundation  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+

The string identifier for resizing a video to fit the surrounding view’s dimensions.

## Declaration

```objectivec
extern NSString * const AVVideoScalingModeResize;
```

<a id="Discussion"></a>

## Discussion

This mode crops the video to remove the edge processing region and scales the remainder to the destination area. It doesn’t preserve the aspect ratio.

## See Also

### Scaling mode

- [AVVideoScalingModeFit](avvideoscalingmodefit.md): The string identifier for scaling a video to fit the surrounding view’s dimensions.
- [AVVideoScalingModeKey](avvideoscalingmodekey.md): A key to retrieve the video scaling mode from a dictionary.
- [AVVideoScalingModeResizeAspect](avvideoscalingmoderesizeaspect.md): The string identifier for resizing a video to its surrounding view’s shorter dimension while preserving its aspect ratio.
- [AVVideoScalingModeResizeAspectFill](avvideoscalingmoderesizeaspectfill.md): The string identifier for resizing a video to fit the surrounding view’s longer dimension while preserving aspect ratio.
