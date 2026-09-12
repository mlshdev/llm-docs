> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfiguration/preferredresolution](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfiguration/preferredresolution)

# preferredResolution (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Your preferred external display resolution.

## Declaration

```swift
var preferredResolution: CMVideoDimensions { get set }
```

<a id="discussion"></a>

## Discussion

Use [preferredResolution](preferredresolution.md) to set your desired resolution of the external display. When left at the default value of { 0, 0 },  the native resolution of the external display is used.

## See Also

### Modifying the configuration

- [bypassColorSpaceConversion](bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [shouldMatchFrameRate](shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.

# preferredResolution (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Your preferred external display resolution.

## Declaration

```objectivec
@property (nonatomic, assign) CMVideoDimensions preferredResolution;
```

<a id="discussion"></a>

## Discussion

Use [preferredResolution](preferredresolution.md) to set your desired resolution of the external display. When left at the default value of { 0, 0 },  the native resolution of the external display is used.

## See Also

### Modifying the configuration

- [bypassColorSpaceConversion](bypasscolorspaceconversion.md): A property indicating whether the color space of the configurator’s preview layer should be preserved on the output display by avoiding color space conversions.
- [shouldMatchFrameRate](shouldmatchframerate.md): A property indicating whether the frame rate of the external display should be configured to match the camera’s frame rate.
