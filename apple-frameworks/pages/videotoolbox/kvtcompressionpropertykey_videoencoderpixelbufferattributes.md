> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_videoencoderpixelbufferattributes](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_videoencoderpixelbufferattributes)

# kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The video encoder’s pixel buffer attributes for the compression session.

## Declaration

```swift
let kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes: CFString
```

<a id="Discussion"></a>

## Discussion

You can use these attributes to create a pixel buffer pool for source pixel buffers.

## See Also

### Buffers

- [kVTCompressionPropertyKey_NumberOfPendingFrames](kvtcompressionpropertykey_numberofpendingframes.md): The number of pending frames in the compression session.
- [kVTCompressionPropertyKey_PixelBufferPoolIsShared](kvtcompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.

# kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The video encoder’s pixel buffer attributes for the compression session.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes;
```

<a id="Discussion"></a>

## Discussion

You can use these attributes to create a pixel buffer pool for source pixel buffers.

## See Also

### Buffers

- [kVTCompressionPropertyKey_NumberOfPendingFrames](kvtcompressionpropertykey_numberofpendingframes.md): The number of pending frames in the compression session.
- [kVTCompressionPropertyKey_PixelBufferPoolIsShared](kvtcompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.
