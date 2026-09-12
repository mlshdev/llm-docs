> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvplanarcomponentinfo](https://developer.apple.com/documentation/corevideo/cvplanarcomponentinfo)

# CVPlanarComponentInfo (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing planar components.

## Declaration

```swift
struct CVPlanarComponentInfo
```

<a id="overview"></a>

## Overview

Depending on how they were created, planar pixel buffers may or may not have this descriptor at their base address. For this reason, you should use [CVPixelBufferGetBaseAddressOfPlane(\_:\_:)](cvpixelbuffergetbaseaddressofplane%28____%29.md) and [CVPixelBufferGetBytesPerRowOfPlane(\_:\_:)](cvpixelbuffergetbytesperrowofplane%28____%29.md) to get information about a planar pixel buffer.

## Topics

### Initializers

- [init()](cvplanarcomponentinfo/init%28%29.md)
- [init(offset:rowBytes:)](cvplanarcomponentinfo/init%28offset_rowbytes_%29.md)

### Properties

- [offset](cvplanarcomponentinfo/offset.md): The offset from the main base address to the base address of this plane. (big-endian)
- [rowBytes](cvplanarcomponentinfo/rowbytes.md): The number of bytes per row of this plane. (big-endian)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CVPixelBuffer](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

# CVPlanarComponentInfo (Objective-C)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

A structure for describing planar components.

## Declaration

```objectivec
struct CVPlanarComponentInfo;
```

<a id="overview"></a>

## Overview

Depending on how they were created, planar pixel buffers may or may not have this descriptor at their base address. For this reason, you should use [CVPixelBufferGetBaseAddressOfPlane](cvpixelbuffergetbaseaddressofplane%28____%29.md) and [CVPixelBufferGetBytesPerRowOfPlane](cvpixelbuffergetbytesperrowofplane%28____%29.md) to get information about a planar pixel buffer.

## Topics

### Properties

- [offset](cvplanarcomponentinfo/offset.md): The offset from the main base address to the base address of this plane. (big-endian)
- [rowBytes](cvplanarcomponentinfo/rowbytes.md): The number of bytes per row of this plane. (big-endian)

## See Also

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPixelBufferLockFlags](cvpixelbufferlockflags.md): The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.
