> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcountersamplebuffererror-swift.struct/code/invalid](https://developer.apple.com/documentation/metal/mtlcountersamplebuffererror-swift.struct/code/invalid)

# MTLCounterSampleBufferError.Code.invalid (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.

## Declaration

```swift
case invalid
```

<a id="discussion"></a>

## Discussion

This error applies to the [MTLDevice](../../mtldevice.md) protocol’s [makeCounterSampleBuffer(descriptor:)](../../mtldevice/makecountersamplebuffer%28descriptor_%29.md) method and its [MTLCounterSampleBufferDescriptor](../../mtlcountersamplebufferdescriptor.md) parameter.

## See Also

### Error codes

- [MTLCounterSampleBufferError.Code.outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferError.Code.internal](internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferError.Code.outOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferError.Code.internal](internal.md): An error code that indicates the Metal framework has an internal problem.

# MTLCounterSampleBufferErrorInvalid (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

An error code that indicates when a counter-sample buffer descriptor has at least one invalid property.

## Declaration

```objectivec
MTLCounterSampleBufferErrorInvalid
```

<a id="discussion"></a>

## Discussion

This error applies to the [MTLDevice](../../mtldevice.md) protocol’s [newCounterSampleBufferWithDescriptor:error:](../../mtldevice/makecountersamplebuffer%28descriptor_%29.md) method and its [MTLCounterSampleBufferDescriptor](../../mtlcountersamplebufferdescriptor.md) parameter.

## See Also

### Error codes

- [MTLCounterSampleBufferErrorOutOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferErrorInternal](internal.md): An error code that indicates the Metal framework has an internal problem.
- [MTLCounterSampleBufferErrorOutOfMemory](outofmemory.md): An error code that indicates the GPU device doesn’t have sufficient memory to create a counter sample buffer.
- [MTLCounterSampleBufferErrorInternal](internal.md): An error code that indicates the Metal framework has an internal problem.
