> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/setargumenttable(_:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/setargumenttable(_:))

# setArgumentTable(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an argument table for the compute shader stage of this pipeline.

## Declaration

```swift
func setArgumentTable(_ argumentTable: (any MTL4ArgumentTable)?)
```

## Parameters

- `argumentTable`: A [MTL4ArgumentTable](../mtl4argumenttable.md) to set on the command encoder.

<a id="discussion"></a>

## Discussion

Metal takes a snapshot of the resources in the argument table when you make dispatch or execute calls on this encoder instance. Metal makes the snapshot contents available to the compute shader function of the current pipeline state.

## See Also

### Configuring the pass

- [setComputePipelineState(\_:)](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setThreadgroupMemoryLength(\_:index:)](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockSize(width:height:)](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.

# setArgumentTable: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets an argument table for the compute shader stage of this pipeline.

## Declaration

```objectivec
- (void) setArgumentTable:(id<MTL4ArgumentTable>) argumentTable;
```

## Parameters

- `argumentTable`: A [MTL4ArgumentTable](../mtl4argumenttable.md) to set on the command encoder.

<a id="discussion"></a>

## Discussion

Metal takes a snapshot of the resources in the argument table when you make dispatch or execute calls on this encoder instance. Metal makes the snapshot contents available to the compute shader function of the current pipeline state.

## See Also

### Configuring the pass

- [setComputePipelineState:](setcomputepipelinestate%28__%29.md): Configures this encoder with a compute pipeline state that applies to your subsequent dispatch commands.
- [setThreadgroupMemoryLength:atIndex:](setthreadgroupmemorylength%28__index_%29.md): Configures the size of a threadgroup memory buffer for a threadgroup argument in the compute shader function.
- [setImageblockWidth:height:](setimageblocksize%28width_height_%29.md): Specifies the size, in pixels, of imageblock data in tile memory.
