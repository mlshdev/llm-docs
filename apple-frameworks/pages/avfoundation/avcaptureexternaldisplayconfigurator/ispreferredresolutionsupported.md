> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/ispreferredresolutionsupported](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/ispreferredresolutionsupported)

# isPreferredResolutionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports configuration to your preferred resolution.

## Declaration

```swift
class var isPreferredResolutionSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [preferredResolution](../avcaptureexternaldisplayconfiguration/preferredresolution.md) set to `true`.

## See Also

### Determining configuration support

- [isMatchingFrameRateSupported](ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [isBypassingColorSpaceConversionSupported](isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.

# supportsPreferredResolution (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports configuration to your preferred resolution.

## Declaration

```objectivec
@property (class, readonly, getter=isPreferredResolutionSupported) BOOL supportsPreferredResolution;
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [preferredResolution](../avcaptureexternaldisplayconfiguration/preferredresolution.md) set to `true`.

## See Also

### Determining configuration support

- [shouldMatchFrameRateSupported](ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [supportsBypassingColorSpaceConversion](isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.
