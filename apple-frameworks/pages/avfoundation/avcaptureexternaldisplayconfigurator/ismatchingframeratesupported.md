> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/ismatchingframeratesupported](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/ismatchingframeratesupported)

# isMatchingFrameRateSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports matching frame rate to a capture device.

## Declaration

```swift
class var isMatchingFrameRateSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [shouldMatchFrameRate](../avcaptureexternaldisplayconfiguration/shouldmatchframerate.md) set to `true`.

## See Also

### Determining configuration support

- [isPreferredResolutionSupported](ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.
- [isBypassingColorSpaceConversionSupported](isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.

# shouldMatchFrameRateSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports matching frame rate to a capture device.

## Declaration

```objectivec
@property (class, readonly, getter=isMatchingFrameRateSupported) BOOL shouldMatchFrameRateSupported;
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [shouldMatchFrameRate](../avcaptureexternaldisplayconfiguration/shouldmatchframerate.md) set to `true`.

## See Also

### Determining configuration support

- [supportsPreferredResolution](ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.
- [supportsBypassingColorSpaceConversion](isbypassingcolorspaceconversionsupported.md): Whether the external display supports bypassing color space conversion.
