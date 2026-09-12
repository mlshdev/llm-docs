> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/cvmutablepixelbuffer/pool/allocationattributes](https://developer.apple.com/documentation/corevideo/cvmutablepixelbuffer/pool/allocationattributes)

# CVMutablePixelBuffer.Pool.AllocationAttributes

**Framework:** Core Video  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Controls how new pixel buffers are allocated when `CVMutablePixelBuffer/Pool/mutablePixelBuffer(with:)` is called.

## Declaration

```swift
struct AllocationAttributes
```

## Topics

### Initializers

- [init(allocationThreshold:)](allocationattributes/init%28allocationthreshold_%29.md)

### Instance Properties

- [allocationThreshold](allocationattributes/allocationthreshold.md): A new pixel buffer will not be allocated if the pool already has this many or more pixel buffers allocated. This does not prevent already-allocated buffers from being recycled. If this causes allocation failure, then `CVMutablePixelBuffer/Pool/mutablePixelBuffer(allocationThreshold:)` throws [wouldExceedAllocationThreshold](../../cverror/wouldexceedallocationthreshold.md).

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
