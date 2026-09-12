> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makecountersamplebuffer(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makecountersamplebuffer(descriptor:))

# makeCounterSampleBuffer(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a counter sample buffer.

## Declaration

```swift
func makeCounterSampleBuffer(descriptor: MTLCounterSampleBufferDescriptor) throws -> any MTLCounterSampleBuffer
```

## Parameters

- `descriptor`: An [MTLCounterSampleBufferDescriptor](../mtlcountersamplebufferdescriptor.md) instance.

<a id="return-value"></a>

## Return Value

A new [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

The method may produce an error if the GPU driver has exhausted its underlying resources for counter sample buffers.

## See Also

### Sampling a GPU device’s counters

- [counterSets](countersets.md): The counter sets supported by the device object.
- [supportsCounterSampling(\_:)](supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.

# newCounterSampleBufferWithDescriptor:error: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 14.0+ · visionOS 1.0+

Creates a counter sample buffer.

## Declaration

```objectivec
- (id<MTLCounterSampleBuffer>) newCounterSampleBufferWithDescriptor:(MTLCounterSampleBufferDescriptor *) descriptor error:(NSError **) error;
```

## Parameters

- `descriptor`: An [MTLCounterSampleBufferDescriptor](../mtlcountersamplebufferdescriptor.md) instance.
- `error`: On return, if an error occurs, a pointer to an error information instance; otherwise `nil`.

<a id="return-value"></a>

## Return Value

A new [MTLCounterSampleBuffer](../mtlcountersamplebuffer.md) instance if the method completes successfully; otherwise Swift throws an error and Objective-C returns `nil`.

## Mentioned In

- [Creating a counter sample buffer to store a GPU’s counter data during a pass](../creating-a-counter-sample-buffer-to-store-a-gpus-counter-data-during-a-pass.md)

<a id="discussion"></a>

## Discussion

The method may produce an error if the GPU driver has exhausted its underlying resources for counter sample buffers.

## See Also

### Sampling a GPU device’s counters

- [counterSets](countersets.md): The counter sets supported by the device object.
- [supportsCounterSampling:](supportscountersampling%28__%29.md): Returns a Boolean value that indicates whether you can read GPU counters at the specified command boundary.
- [MTLCounterSamplingPoint](../mtlcountersamplingpoint.md): Options for different times when you can sample GPU counters.
