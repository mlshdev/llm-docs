> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbuffer](https://developer.apple.com/documentation/corevideo/cvpixelbuffer)

# CVPixelBuffer (Swift)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a Core Video pixel buffer object.

## Declaration

```swift
typealias CVPixelBuffer = CVImageBuffer
```

<a id="Discussion"></a>

## Discussion

The pixel buffer stores an image in main memory.

## See Also

### Data Types

- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

# CVPixelBufferRef (Objective-C)

**Framework:** Core Video  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A reference to a Core Video pixel buffer object.

## Declaration

```objectivec
typedef CVImageBufferRef CVPixelBufferRef;
```

<a id="Discussion"></a>

## Discussion

The pixel buffer stores an image in main memory.

## See Also

### Data Types

- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.
