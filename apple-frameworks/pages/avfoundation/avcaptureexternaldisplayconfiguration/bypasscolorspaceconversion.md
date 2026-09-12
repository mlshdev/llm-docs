> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion)

# bypassColorSpaceConversion (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.

## Declaration

```swift
var bypassColorSpaceConversion: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Set [bypassColorSpaceConversion](bypasscolorspaceconversion.md) to `true` if you would like the configurator’s  [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) color space preserved on the output display. This is accomplished by setting the working color space to match the color space of the external display. The color properties of the `CALayer` remain untouched. The default value is `false`.

## See Also

### Modifying the configuration

- [preferredResolution](preferredresolution.md): Your preferred external display resolution.
- [shouldMatchFrameRate](shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

# bypassColorSpaceConversion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL bypassColorSpaceConversion;
```

<a id="discussion"></a>

## Discussion

Set [bypassColorSpaceConversion](bypasscolorspaceconversion.md) to `true` if you would like the configurator’s  [AVCaptureVideoPreviewLayer](../avcapturevideopreviewlayer.md) color space preserved on the output display. This is accomplished by setting the working color space to match the color space of the external display. The color properties of the `CALayer` remain untouched. The default value is `false`.

## See Also

### Modifying the configuration

- [preferredResolution](preferredresolution.md): Your preferred external display resolution.
- [shouldMatchFrameRate](shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.
