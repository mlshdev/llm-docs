> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realityrenderer/extendeddynamicrangeoutput](https://developer.apple.com/documentation/realitykit/realityrenderer/extendeddynamicrangeoutput)

# extendedDynamicRangeOutput

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+

Specify whether the target Metal layer has been configured for EDR output.

## Declaration

```swift
var extendedDynamicRangeOutput: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If the Metal layer that this [RealityRenderer](../realityrenderer.md) will be rendering into has been configured to output extended dynamic range content (i.e. the property `QuartzCore/CAMetalLayer/wantsExtendedDynamicRangeContent` on the target `QuartzCore/CAMetalLayer` has been set to `true` and a pixel format that supports EDR content has been set), this property should be set to `true` so that [RealityRenderer](../realityrenderer.md) adjusts its tone mapping accordingly.

To control the amount of headroom available for extended dynamic range content, see [extendedDynamicRangeHeadroom](extendeddynamicrangeheadroom.md).

The default value is `false`.
