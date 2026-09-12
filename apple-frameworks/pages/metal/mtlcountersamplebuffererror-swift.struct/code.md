> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffererror-swift.struct/code](https://developer.apple.com/documentation/metal/mtlcountersamplebuffererror-swift.struct/code)

# MTLCounterSampleBufferError.Code (Swift)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The underlying error code type that indicates why a GPU driver can’t create a counter sample buffer.

## Declaration

```swift
enum Code
```

## Topics

### Error codes

- [MTLCounterSampleBufferError.Code.outOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferError.Code.invalid](code/invalid.md): An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.
- [MTLCounterSampleBufferError.Code.internal](code/internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferError.Code.outOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferError.Code.invalid](code/invalid.md): An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.
- [MTLCounterSampleBufferError.Code.internal](code/internal.md): An error code that indicates the Metal framework has an internal problem.

### Initializers

- [init(rawValue:)](code/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# MTLCounterSampleBufferError (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The underlying error code type that indicates why a GPU driver can’t create a counter sample buffer.

## Declaration

```objectivec
enum MTLCounterSampleBufferError : NSInteger;
```

## Topics

### Error codes

- [MTLCounterSampleBufferErrorOutOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferErrorInvalid](code/invalid.md): An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.
- [MTLCounterSampleBufferErrorInternal](code/internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferErrorOutOfMemory](code/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferErrorInvalid](code/invalid.md): An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.
- [MTLCounterSampleBufferErrorInternal](code/internal.md): An error code that indicates the Metal framework has an internal problem.

## See Also

### Counter sample buffer errors

- [MTLCounterErrorDomain](../mtlcountererrordomain.md): The domain for Metal counter sample buffer errors.
