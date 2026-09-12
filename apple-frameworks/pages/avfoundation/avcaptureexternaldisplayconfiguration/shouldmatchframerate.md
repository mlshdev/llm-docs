> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfiguration/shouldmatchframerate](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration/shouldmatchframerate)

# shouldMatchFrameRate (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

## Declaration

```swift
var shouldMatchFrameRate: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If you want to configure your [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) to match its source [activeVideoMinFrameDuration](../avcapturedevice/activevideominframeduration.md), set [shouldMatchFrameRate](shouldmatchframerate.md) to `true`. The default value is `false`.

## See Also

### Modifying the configuration

- [bypassColorSpaceConversion](bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [preferredResolution](preferredresolution.md): Your preferred external display resolution.

# shouldMatchFrameRate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL shouldMatchFrameRate;
```

<a id="discussion"></a>

## Discussion

If you want to configure your [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) to match its source [activeVideoMinFrameDuration](../avcapturedevice/activevideominframeduration.md), set [shouldMatchFrameRate](shouldmatchframerate.md) to `true`. The default value is `false`.

## See Also

### Modifying the configuration

- [bypassColorSpaceConversion](bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [preferredResolution](preferredresolution.md): Your preferred external display resolution.
