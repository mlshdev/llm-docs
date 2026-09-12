> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/cametallayer/edrmetadata](https://developer.apple.com/documentation/quartzcore/cametallayer/edrmetadata)

# edrMetadata (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Metadata describing the tone mapping to apply to the extended dynamic range (EDR) values in the layer.

## Declaration

```swift
var edrMetadata: CAEDRMetadata? { get set }
```

<a id="Discussion"></a>

## Discussion

You must set this property before calling [nextDrawable()](nextdrawable%28%29.md).

The default value is `nil`, which means that the system doesn’t perform any tone mapping of data prior to passing it on to the display. Values above the maximum ([maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue)) may be clipped.

If non-`nil`, the system uses the metadata provided to tone map values to the display, based on the display’s current characteristics. You must also set [pixelFormat](pixelformat.md) to a pixel format that supports pixel values greater than `1.0` (such as [MTLPixelFormat.rgba16Float](../../metal/mtlpixelformat/rgba16float.md)) and [colorspace](../caopengllayer/colorspace.md) to a color space that supports a linear transfer function.

The tone mapping process requires significant amounts of memory and GPU processing.

## See Also

### Configuring Extended Dynamic Range Behavior

- [wantsExtendedDynamicRangeContent](wantsextendeddynamicrangecontent.md): Enables extended dynamic range values onscreen.

# EDRMetadata (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 10.15+ · visionOS 1.0+

Metadata describing the tone mapping to apply to the extended dynamic range (EDR) values in the layer.

## Declaration

```objectivec
@property (strong, nullable) CAEDRMetadata * EDRMetadata;
```

<a id="Discussion"></a>

## Discussion

You must set this property before calling [nextDrawable](nextdrawable%28%29.md).

The default value is `nil`, which means that the system doesn’t perform any tone mapping of data prior to passing it on to the display. Values above the maximum ([maximumExtendedDynamicRangeColorComponentValue](https://developer.apple.com/documentation/appkit/nsscreen/maximumextendeddynamicrangecolorcomponentvalue)) may be clipped.

If non-`nil`, the system uses the metadata provided to tone map values to the display, based on the display’s current characteristics. You must also set [pixelFormat](pixelformat.md) to a pixel format that supports pixel values greater than `1.0` (such as [MTLPixelFormatRGBA16Float](../../metal/mtlpixelformat/rgba16float.md)) and [colorspace](../caopengllayer/colorspace.md) to a color space that supports a linear transfer function.

The tone mapping process requires significant amounts of memory and GPU processing.

## See Also

### Configuring Extended Dynamic Range Behavior

- [wantsExtendedDynamicRangeContent](wantsextendeddynamicrangecontent.md): Enables extended dynamic range values onscreen.
