> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avvideocompositing/supportswidecolorsourceframes](https://developer.apple.com/documentation/avfoundation/avvideocompositing/supportswidecolorsourceframes)

# supportsWideColorSourceFrames (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.

## Declaration

```swift
optional var supportsWideColorSourceFrames: Bool { get }
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

## See Also

### Inspecting processing requirements

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): The pixel buffer attributes that the compositor accepts for source frames.
- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [canConformColorOfSourceFrames](canconformcolorofsourceframes.md): A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)

# supportsWideColorSourceFrames (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value that indicates whether the compositor handles source frames that contains wide color properties.

## Declaration

```objectivec
@property (nonatomic, readonly) BOOL supportsWideColorSourceFrames;
```

## Mentioned In

- [Tagging media with video color information](../tagging-media-with-video-color-information.md)

## See Also

### Inspecting processing requirements

- [sourcePixelBufferAttributes](sourcepixelbufferattributes.md): The pixel buffer attributes that the compositor accepts for source frames.
- [requiredPixelBufferAttributesForRenderContext](requiredpixelbufferattributesforrendercontext.md): The pixel buffer attributes that the compositor requires for pixel buffers that it creates.
- [supportsHDRSourceFrames](supportshdrsourceframes.md): A Boolean value that indicates whether the compositor handles source frames that contain high dynamic range (HDR) properties.
- [canConformColorOfSourceFrames](canconformcolorofsourceframes.md): A Boolean value that indicates whether the compositor conforms the color space of source frames to the composition color space.
- [supportsSourceTaggedBuffers](supportssourcetaggedbuffers.md)
