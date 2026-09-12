> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setstageinregionwithindirectbuffer(_:indirectbufferoffset:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setstageinregionwithindirectbuffer(_:indirectbufferoffset:))

# setStageInRegionWithIndirectBuffer(\_:indirectBufferOffset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.

## Declaration

```swift
func setStageInRegionWithIndirectBuffer(_ indirectBuffer: any MTLBuffer, indirectBufferOffset: Int)
```

## Parameters

- `indirectBuffer`: The [MTLRegion](../mtlregion.md) defining how to interpret a thread’s location as a coordinate for stage-in data.
- `indirectBufferOffset`: Where the data begins, in bytes, from the start of the buffer.

<a id="discussion"></a>

## Discussion

> **Important**

>  Lay out the data in the buffer as described in the [MTLStageInRegionIndirectArguments](../mtlstageinregionindirectarguments.md) structure.

The region’s origin point, starting from `(0,0,0)` in the upper left of the bound data, determines the final index of `[[stage_in]]` data. Note that the total number of threads Metal launches may be larger than your stage-in data.

To determine the index used to fetch `[[stage_in]]` data for a given thread, the GPU adds the values specified by the region’s origin to the thread position in the grid. Threads in the grid outside of the maximum stage-in data size have undefined behavior when accessing the stage-in memory region.

## See Also

### Configuring stage-in data

- [setStageInRegion(\_:)](setstageinregion%28__%29.md): Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.

# setStageInRegionWithIndirectBuffer:indirectBufferOffset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.

## Declaration

```objectivec
- (void) setStageInRegionWithIndirectBuffer:(id<MTLBuffer>) indirectBuffer indirectBufferOffset:(NSUInteger) indirectBufferOffset;
```

## Parameters

- `indirectBuffer`: The [MTLRegion](../mtlregion.md) defining how to interpret a thread’s location as a coordinate for stage-in data.
- `indirectBufferOffset`: Where the data begins, in bytes, from the start of the buffer.

<a id="discussion"></a>

## Discussion

> **Important**

>  Lay out the data in the buffer as described in the [MTLStageInRegionIndirectArguments](../mtlstageinregionindirectarguments.md) structure.

The region’s origin point, starting from `(0,0,0)` in the upper left of the bound data, determines the final index of `[[stage_in]]` data. Note that the total number of threads Metal launches may be larger than your stage-in data.

To determine the index used to fetch `[[stage_in]]` data for a given thread, the GPU adds the values specified by the region’s origin to the thread position in the grid. Threads in the grid outside of the maximum stage-in data size have undefined behavior when accessing the stage-in memory region.

## See Also

### Configuring stage-in data

- [setStageInRegion:](setstageinregion%28__%29.md): Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.
