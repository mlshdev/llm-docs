> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvplanarpixelbufferinfo_ycbcrplanar](https://developer.apple.com/documentation/corevideo/cvplanarpixelbufferinfo_ycbcrplanar)

# CVPlanarPixelBufferInfo_YCbCrPlanar (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing YCbCr planar buffers.

## Declaration

```swift
struct CVPlanarPixelBufferInfo_YCbCrPlanar
```

## Topics

### Initializers

- [init()](cvplanarpixelbufferinfo_ycbcrplanar/init%28%29.md)
- [init(componentInfoY:componentInfoCb:componentInfoCr:)](cvplanarpixelbufferinfo_ycbcrplanar/init%28componentinfoy_componentinfocb_componentinfocr_%29.md)

### Properties

- [componentInfoCb](cvplanarpixelbufferinfo_ycbcrplanar/componentinfocb.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cb component of the buffer.
- [componentInfoCr](cvplanarpixelbufferinfo_ycbcrplanar/componentinfocr.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cr component of the buffer.
- [componentInfoY](cvplanarpixelbufferinfo_ycbcrplanar/componentinfoy.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Y component of the buffer.

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
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

# CVPlanarPixelBufferInfo_YCbCrPlanar (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing YCbCr planar buffers.

## Declaration

```objectivec
struct CVPlanarPixelBufferInfo_YCbCrPlanar;
```

## Topics

### Properties

- [componentInfoCb](cvplanarpixelbufferinfo_ycbcrplanar/componentinfocb.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cb component of the buffer.
- [componentInfoCr](cvplanarpixelbufferinfo_ycbcrplanar/componentinfocr.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Cr component of the buffer.
- [componentInfoY](cvplanarpixelbufferinfo_ycbcrplanar/componentinfoy.md): A [CVPlanarComponentInfo](cvplanarcomponentinfo.md) structure containing information on the Y component of the buffer.

## See Also

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.
