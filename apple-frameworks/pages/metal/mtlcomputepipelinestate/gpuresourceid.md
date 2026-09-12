> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/gpuresourceid](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/gpuresourceid)

# gpuResourceID (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An unique identifier that represents the pipeline state, which you can add to an argument buffer.

## Declaration

```swift
var gpuResourceID: MTLResourceID { get }
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that created the pipeline state.
- [label](label.md): A string that helps you identify the compute pipeline state during debugging.

# gpuResourceID (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An unique identifier that represents the pipeline state, which you can add to an argument buffer.

## Declaration

```objectivec
@property (readonly) MTLResourceID gpuResourceID;
```

## Mentioned In

- [Improving CPU performance by using argument buffers](../improving-cpu-performance-by-using-argument-buffers.md)

## See Also

### Identifying a pipeline state

- [device](device.md): The device instance that created the pipeline state.
- [label](label.md): A string that helps you identify the compute pipeline state during debugging.
