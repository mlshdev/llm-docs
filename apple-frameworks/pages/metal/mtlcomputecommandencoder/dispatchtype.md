> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/dispatchtype](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/dispatchtype)

# dispatchType (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The dispatch type to use when submitting compute work to the GPU.

## Declaration

```swift
var dispatchType: MTLDispatchType { get }
```

<a id="discussion"></a>

## Discussion

You set this property when you create the command encoder, and it doesn’t change for the remainder of the encoding.

See [makeComputeCommandEncoder(dispatchType:)](../mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md) for more information.

## See Also

### Configuring the pipeline state

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Configures the compute encoder with a pipeline state for subsequent kernel calls.

# dispatchType (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

The dispatch type to use when submitting compute work to the GPU.

## Declaration

```objectivec
@property (readonly) MTLDispatchType dispatchType;
```

<a id="discussion"></a>

## Discussion

You set this property when you create the command encoder, and it doesn’t change for the remainder of the encoding.

See [computeCommandEncoderWithDispatchType:](../mtlcommandbuffer/makecomputecommandencoder%28dispatchtype_%29.md) for more information.

## See Also

### Configuring the pipeline state

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Configures the compute encoder with a pipeline state for subsequent kernel calls.
