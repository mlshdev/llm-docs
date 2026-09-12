> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_pixelbufferpoolisshared](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_pixelbufferpoolisshared)

# kVTCompressionPropertyKey_PixelBufferPoolIsShared (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.

## Declaration

```swift
let kVTCompressionPropertyKey_PixelBufferPoolIsShared: CFString
```

<a id="Discussion"></a>

## Discussion

This value is `false` if separate pools are used because the video encoder’s and the client’s pixel buffer attributes were incompatible.

## See Also

### Buffers

- [kVTCompressionPropertyKey_NumberOfPendingFrames](kvtcompressionpropertykey_numberofpendingframes.md): The number of pending frames in the compression session.
- [kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes](kvtcompressionpropertykey_videoencoderpixelbufferattributes.md): The video encoder’s pixel buffer attributes for the compression session.

# kVTCompressionPropertyKey_PixelBufferPoolIsShared (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_PixelBufferPoolIsShared;
```

<a id="Discussion"></a>

## Discussion

This value is `false` if separate pools are used because the video encoder’s and the client’s pixel buffer attributes were incompatible.

## See Also

### Buffers

- [kVTCompressionPropertyKey_NumberOfPendingFrames](kvtcompressionpropertykey_numberofpendingframes.md): The number of pending frames in the compression session.
- [kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes](kvtcompressionpropertykey_videoencoderpixelbufferattributes.md): The video encoder’s pixel buffer attributes for the compression session.
