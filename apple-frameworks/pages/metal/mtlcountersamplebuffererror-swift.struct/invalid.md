> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffererror-swift.struct/invalid](https://developer.apple.com/documentation/metal/mtlcountersamplebuffererror-swift.struct/invalid)

# invalid

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates the descriptor for creating a counter sample buffer descriptor has an invalid property.

## Declaration

```swift
static var invalid: MTLCounterSampleBufferError.Code { get }
```

<a id="discussion"></a>

## Discussion

This error applies to the [MTLDevice](../mtldevice.md) protocol’s [makeCounterSampleBuffer(descriptor:)](../mtldevice/makecountersamplebuffer%28descriptor_%29.md) method and its [MTLCounterSampleBufferDescriptor](../mtlcountersamplebufferdescriptor.md) parameter.

## See Also

### Error code values

- [outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [internal](internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferError.Code](code.md): The underlying error code type that indicates why a GPU driver can’t create a counter sample buffer.
