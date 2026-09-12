> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/sourcepixelbufferattributes](https://developer.apple.com/documentation/avfoundation/avvideocompositing/sourcepixelbufferattributes)

# sourcePixelBufferAttributes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The pixel buffer attributes that the compositor accepts for source frames.

## Declaration

```swift
var sourcePixelBufferAttributes: [String : any Sendable]? { get }
```

<a id="Discussion"></a>

## Discussion

The property is required to provide a [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key in the dictionary, along with attributes for which the compositor needs specific values to work properly. Omitted attributes will be supplied by the composition engine to allow for the best performance. If the attribute [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key is not in the dictionary an exception will be raised. The value of the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) is an array of `kCVPixelFormatType_*` constants as defined in Pixel_Format_Types.

If the custom compositor is meant to be used with an [AVVideoCompositionCoreAnimationTool](../avvideocompositioncoreanimationtool.md) created using the [init(additionalLayer:asTrackID:)](../avvideocompositioncoreanimationtool/init%28additionallayer_astrackid_%29.md) method, [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) should be included as one of the supported pixel format types.

Missing attributes will be set by the composition engine to values allowing the best performance.

This property is queried once before any composition request is sent to the compositor. Changing source buffer attributes afterwards is not supported.

## See Also

### Inspecting processing requirements

- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [supportsWideColorSourceFrames](supportswidecolorsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.
- [canConformColorOfSourceFrames](canconformcolorofsourceframes.md): A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)

# sourcePixelBufferAttributes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The pixel buffer attributes that the compositor accepts for source frames.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSDictionary<NSString *,id> * sourcePixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

The property is required to provide a [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key in the dictionary, along with attributes for which the compositor needs specific values to work properly. Omitted attributes will be supplied by the composition engine to allow for the best performance. If the attribute [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) key is not in the dictionary an exception will be raised. The value of the [kCVPixelBufferPixelFormatTypeKey](../../corevideo/kcvpixelbufferpixelformattypekey.md) is an array of `kCVPixelFormatType_*` constants as defined in Pixel_Format_Types.

If the custom compositor is meant to be used with an [AVVideoCompositionCoreAnimationTool](../avvideocompositioncoreanimationtool.md) created using the [videoCompositionCoreAnimationToolWithAdditionalLayer:asTrackID:](../avvideocompositioncoreanimationtool/init%28additionallayer_astrackid_%29.md) method, [kCVPixelFormatType_32BGRA](../../corevideo/kcvpixelformattype_32bgra.md) should be included as one of the supported pixel format types.

Missing attributes will be set by the composition engine to values allowing the best performance.

This property is queried once before any composition request is sent to the compositor. Changing source buffer attributes afterwards is not supported.

## See Also

### Inspecting processing requirements

- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [supportsWideColorSourceFrames](supportswidecolorsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.
- [canConformColorOfSourceFrames](canconformcolorofsourceframes.md): A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)
