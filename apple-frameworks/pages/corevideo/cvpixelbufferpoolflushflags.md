> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvpixelbufferpoolflushflags](https://developer.apple.com/documentation/corevideo/cvpixelbufferpoolflushflags)

# CVPixelBufferPoolFlushFlags (Swift)

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags to pass to flush the pool.

## Declaration

```swift
struct CVPixelBufferPoolFlushFlags
```

## Topics

### Type Properties

- [excessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md): The value to pass to flush all unused buffers regardless of age.

### Initializers

- [init(rawValue:)](cvpixelbufferpoolflushflags/init%28rawvalue_%29.md): Creates a pixel buffer pool flush flags set with the options flags that you specify.

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

### Data types

- [CVPixelBufferPool](cvpixelbufferpool.md): A reference to a pixel buffer pool object.

# CVPixelBufferPoolFlushFlags (Objective-C)

**Framework:** Core Video  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

The flags to pass to flush the pool.

## Declaration

```objectivec
enum CVPixelBufferPoolFlushFlags : CVOptionFlags;
```

## Topics

### Type Properties

- [kCVPixelBufferPoolFlushExcessBuffers](cvpixelbufferpoolflushflags/excessbuffers.md): The value to pass to flush all unused buffers regardless of age.

## See Also

### Data types

- [CVPixelBufferPoolRef](cvpixelbufferpool.md): A reference to a pixel buffer pool object.
