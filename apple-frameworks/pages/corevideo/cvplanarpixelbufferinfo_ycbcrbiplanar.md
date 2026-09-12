> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvplanarpixelbufferinfo_ycbcrbiplanar](https://developer.apple.com/documentation/corevideo/cvplanarpixelbufferinfo_ycbcrbiplanar)

# CVPlanarPixelBufferInfo_YCbCrBiPlanar (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing YCbCr biplanar buffers.

## Declaration

```swift
struct CVPlanarPixelBufferInfo_YCbCrBiPlanar
```

## Topics

### Initializers

- [init()](cvplanarpixelbufferinfo_ycbcrbiplanar/init%28%29.md)
- [init(componentInfoY:componentInfoCbCr:)](cvplanarpixelbufferinfo_ycbcrbiplanar/init%28componentinfoy_componentinfocbcr_%29.md)

### Properties

- [componentInfoCbCr](cvplanarpixelbufferinfo_ycbcrbiplanar/componentinfocbcr.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cb/Cr component of the buffer.
- [componentInfoY](cvplanarpixelbufferinfo_ycbcrbiplanar/componentinfoy.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Y component of the buffer.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CVPixelBuffer](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.

# CVPlanarPixelBufferInfo_YCbCrBiPlanar (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing YCbCr biplanar buffers.

## Declaration

```objectivec
struct CVPlanarPixelBufferInfo_YCbCrBiPlanar;
```

## Topics

### Properties

- [componentInfoCbCr](cvplanarpixelbufferinfo_ycbcrbiplanar/componentinfocbcr.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cb/Cr component of the buffer.
- [componentInfoY](cvplanarpixelbufferinfo_ycbcrbiplanar/componentinfoy.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Y component of the buffer.

## See Also

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
