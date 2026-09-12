> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureexternaldisplayconfigurator/isbypassingcolorspaceconversionsupported](https://developer.apple.com/documentation/avfoundation/avcaptureexternaldisplayconfigurator/isbypassingcolorspaceconversionsupported)

# isBypassingColorSpaceConversionSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports bypassing color space conversion.

## Declaration

```swift
class var isBypassingColorSpaceConversionSupported: Bool { get }
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [bypassColorSpaceConversion](../avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion.md) set to `true`.

## See Also

### Determining configuration support

- [isMatchingFrameRateSupported](ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [isPreferredResolutionSupported](ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.

# supportsBypassingColorSpaceConversion (Objective-C)

**Framework:** AVFoundation  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+

Whether the external display supports bypassing color space conversion.

## Declaration

```objectivec
@property (class, readonly, getter=isBypassingColorSpaceConversionSupported) BOOL supportsBypassingColorSpaceConversion;
```

<a id="discussion"></a>

## Discussion

If `true`, you may instantiate a configurator with a configuration specifying [bypassColorSpaceConversion](../avcaptureexternaldisplayconfiguration/bypasscolorspaceconversion.md) set to `true`.

## See Also

### Determining configuration support

- [shouldMatchFrameRateSupported](ismatchingframeratesupported.md): Whether the external display supports matching frame rate to a capture device.
- [supportsPreferredResolution](ispreferredresolutionsupported.md): Whether the external display supports configuration to your preferred resolution.
