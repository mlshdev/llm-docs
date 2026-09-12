> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/canconformcolorofsourceframes](https://developer.apple.com/documentation/avfoundation/avvideocompositing/canconformcolorofsourceframes)

# canConformColorOfSourceFrames (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.

## Declaration

```swift
optional var canConformColorOfSourceFrames: Bool { get }
```

<a id="Discussion"></a>

## Discussion

A custom compositor indicates its processing requirements through the [sourcePixelBufferAttributes](sourcepixelbufferattributes.md) and [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) properties. By default, the composition engine prepares source frames by converting them to meet the compositor’s configuration.

When this property value is true, the engine doesn’t convert source pixel buffers that meet the compositor’s processing requirements. However, it does convert buffers that don’t meet the processing requirements, which includes the following cases:

- The values of [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) and [supportsHDRSourceFrames](supportshdrsourceframes.md) are [false](https://developer.apple.com/documentation/swift/false), but the source buffers contain wide color. In this case, the engine converts the color space of source pixel buffers to BT.709 color space. Note that when [supportsHDRSourceFrames](supportshdrsourceframes.md) is [true](https://developer.apple.com/documentation/swift/true), the engine also assumes [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) is [true](https://developer.apple.com/documentation/swift/true).
- The value of [supportsHDRSourceFrames](supportshdrsourceframes.md) is [false](https://developer.apple.com/documentation/swift/false) and source buffers contain HDR color. In this case, the engine converts the color space of source pixel buffers to the composition color space.
- The pixel format of the source buffers isn’t specified in [sourcePixelBufferAttributes](sourcepixelbufferattributes.md). In this case, the engine converts the pixel format to a supported format and converts the color space to the composition color space.

## See Also

### Inspecting processing requirements

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): The pixel buffer attributes that the compositor accepts for source frames.
- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [supportsWideColorSourceFrames](supportswidecolorsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)

# canConformColorOfSourceFrames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL canConformColorOfSourceFrames;
```

<a id="Discussion"></a>

## Discussion

A custom compositor indicates its processing requirements through the [sourcePixelBufferAttributes](sourcepixelbufferattributes.md) and [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) properties. By default, the composition engine prepares source frames by converting them to meet the compositor’s configuration.

When this property value is true, the engine doesn’t convert source pixel buffers that meet the compositor’s processing requirements. However, it does convert buffers that don’t meet the processing requirements, which includes the following cases:

- The values of [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) and [supportsHDRSourceFrames](supportshdrsourceframes.md) are [false](https://developer.apple.com/documentation/swift/false), but the source buffers contain wide color. In this case, the engine converts the color space of source pixel buffers to BT.709 color space. Note that when [supportsHDRSourceFrames](supportshdrsourceframes.md) is [true](https://developer.apple.com/documentation/swift/true), the engine also assumes [supportsWideColorSourceFrames](supportswidecolorsourceframes.md) is [true](https://developer.apple.com/documentation/swift/true).
- The value of [supportsHDRSourceFrames](supportshdrsourceframes.md) is [false](https://developer.apple.com/documentation/swift/false) and source buffers contain HDR color. In this case, the engine converts the color space of source pixel buffers to the composition color space.
- The pixel format of the source buffers isn’t specified in [sourcePixelBufferAttributes](sourcepixelbufferattributes.md). In this case, the engine converts the pixel format to a supported format and converts the color space to the composition color space.

## See Also

### Inspecting processing requirements

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): The pixel buffer attributes that the compositor accepts for source frames.
- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [supportsWideColorSourceFrames](supportswidecolorsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)
