> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/kvtcompressionpropertykey_numberofpendingframes](https://developer.apple.com/documentation/videotoolbox/kvtcompressionpropertykey_numberofpendingframes)

# kVTCompressionPropertyKey_NumberOfPendingFrames (Swift)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The number of pending frames in the compression session.

## Declaration

```swift
let kVTCompressionPropertyKey_NumberOfPendingFrames: CFString
```

<a id="Discussion"></a>

## Discussion

This number may decrease asynchronously.

## See Also

### Buffers

- [kVTCompressionPropertyKey_PixelBufferPoolIsShared](kvtcompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.
- [kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes](kvtcompressionpropertykey_videoencoderpixelbufferattributes.md): The video encoder’s pixel buffer attributes for the compression session.

# kVTCompressionPropertyKey_NumberOfPendingFrames (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The number of pending frames in the compression session.

## Declaration

```objectivec
extern CFStringRef const kVTCompressionPropertyKey_NumberOfPendingFrames;
```

<a id="Discussion"></a>

## Discussion

This number may decrease asynchronously.

## See Also

### Buffers

- [kVTCompressionPropertyKey_PixelBufferPoolIsShared](kvtcompressionpropertykey_pixelbufferpoolisshared.md): A Boolean value indicating whether the common pixel buffer pool is shared between the video encoder and the session client.
- [kVTCompressionPropertyKey_VideoEncoderPixelBufferAttributes](kvtcompressionpropertykey_videoencoderpixelbufferattributes.md): The video encoder’s pixel buffer attributes for the compression session.
