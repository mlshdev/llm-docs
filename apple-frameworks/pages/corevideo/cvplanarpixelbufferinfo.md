> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvplanarpixelbufferinfo](https://developer.apple.com/documentation/corevideo/cvplanarpixelbufferinfo)

# CVPlanarPixelBufferInfo (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing planar buffers.

## Declaration

```swift
struct CVPlanarPixelBufferInfo
```

## Topics

### Initializers

- [init()](cvplanarpixelbufferinfo/init%28%29.md)
- [init(componentInfo:)](cvplanarpixelbufferinfo/init%28componentinfo_%29.md)

### Properties

- [componentInfo](cvplanarpixelbufferinfo/componentinfo.md): An array containing a [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure for each plane of the buffer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CVPixelBuffer](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

# CVPlanarPixelBufferInfo (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing planar buffers.

## Declaration

```objectivec
struct CVPlanarPixelBufferInfo;
```

## Topics

### Properties

- [componentInfo](cvplanarpixelbufferinfo/componentinfo.md): An array containing a [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure for each plane of the buffer.

## See Also

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.
