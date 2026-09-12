> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/setcomputepipelinestate(_:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/setcomputepipelinestate(_:))

# setComputePipelineState(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.

## Declaration

```swift
func setComputePipelineState(_ state: any MTLComputePipelineState)
```

## Parameters

- `state`: A non-`nil` [MTLComputePipelineState](../mtlcomputepipelinestate.md).

## See Also

### Configuring the pass

- [setArgumentTable(\_:)](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockSize(width:height:)](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.

# setComputePipelineState: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.

## Declaration

```objectivec
- (void) setComputePipelineState:(id<MTLComputePipelineState>) state;
```

## Parameters

- `state`: A non-`nil` [MTLComputePipelineState](../mtlcomputepipelinestate.md).

## See Also

### Configuring the pass

- [setArgumentTable:](setargumenttable%28__%29.md): Sets an argument table for the compute shader stage of this pipeline.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockWidth:height:](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.
