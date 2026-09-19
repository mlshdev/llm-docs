> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlcountersamplebuffererror-swift.struct/outofmemory

# outOfMemory

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.

## Declaration

```swift
static var outOfMemory: MTLCounterSampleBufferError.Code { get }
```

## See Also

### Error code values

- [invalid](invalid.md): An error code that indicates the descriptor for creating a counter sample buffer descriptor has an invalid property.
- [internal](internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferError.Code](code.md): The underlying error code type that indicates why a GPU driver can’t create a counter sample buffer.
