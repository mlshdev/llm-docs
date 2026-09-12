> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferlockflags](https://developer.apple.com/documentation/corevideo/cvpixelbufferlockflags)

# CVPixelBufferLockFlags (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags to pass to [CVPixelBufferLockBaseAddress(\_:\_:)](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress(\_:\_:)](cvpixelbufferunlockbaseaddress%28____%29.md).

## Declaration

```swift
struct CVPixelBufferLockFlags
```

## Topics

### Constants

- [readOnly](cvpixelbufferlockflags/readonly.md): A read-only buffer.

### Initializers

- [init(rawValue:)](cvpixelbufferlockflags/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Data Types

- [CVPixelBuffer](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.

# CVPixelBufferLockFlags (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags to pass to [CVPixelBufferLockBaseAddress](cvpixelbufferlockbaseaddress%28____%29.md) and [CVPixelBufferUnlockBaseAddress](cvpixelbufferunlockbaseaddress%28____%29.md).

## Declaration

```objectivec
enum CVPixelBufferLockFlags : CVOptionFlags;
```

## Topics

### Constants

- [kCVPixelBufferLock_ReadOnly](cvpixelbufferlockflags/readonly.md): A read-only buffer.

## See Also

### Data Types

- [CVPixelBufferRef](cvpixelbuffer.md): A reference to a Core Video pixel buffer object.
- [CVPlanarComponentInfo](cvplanarcomponentinfo.md): A structure for describing planar components.
- [CVPlanarPixelBufferInfo](cvplanarpixelbufferinfo.md): A structure for describing planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrPlanar](cvplanarpixelbufferinfo_ycbcrplanar.md): A structure for describing YCbCr planar buffers.
- [CVPlanarPixelBufferInfo_YCbCrBiPlanar](cvplanarpixelbufferinfo_ycbcrbiplanar.md): A structure for describing YCbCr biplanar buffers.
