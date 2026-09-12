> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffererror-swift.struct](https://developer.apple.com/documentation/metal/mtlcountersamplebuffererror-swift.struct)

# MTLCounterSampleBufferError

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

The error codes that indicate why a GPU driver can’t create a counter sample buffer.

## Declaration

```swift
struct MTLCounterSampleBufferError
```

## Topics

### Error code values

- [outOfMemory](mtlcountersamplebuffererror-swift.struct/outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [invalid](mtlcountersamplebuffererror-swift.struct/invalid.md): An error code that indicates the descriptor for creating a counter sample buffer descriptor has an invalid property.
- [internal](mtlcountersamplebuffererror-swift.struct/internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferError.Code](mtlcountersamplebuffererror-swift.struct/code.md): The underlying error code type that indicates why a GPU driver can’t create a counter sample buffer.

### Error domain

- [errorDomain](mtlcountersamplebuffererror-swift.struct/errordomain.md): The current counter sample buffer error domain.
- [MTLCounterErrorDomain](mtlcountererrordomain.md): The domain for Metal counter sample buffer errors.

## Relationships

### Conforms To

- [CustomNSError](../foundation/customnserror.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
