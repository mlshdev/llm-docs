> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setstageinregion(_:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setstageinregion(_:))

# setStageInRegion(\_:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.

## Declaration

```swift
func setStageInRegion(_ region: MTLRegion)
```

## Parameters

- `region`: The [MTLRegion](../mtlregion.md) defining how to interpret a thread’s location as a coordinate for stage-in data.

<a id="discussion"></a>

## Discussion

The region’s origin point, starting from `(0,0,0)` in the upper left of the bound data, determines the final index of `[[stage_in]]` data. Note that the total number of threads Metal launches may be larger than your stage-in data.

To determine the index used to fetch `[[stage_in]]` data for a given thread, the GPU adds the values specified by the region’s origin to the thread position in the grid. Threads in the grid outside of the maximum stage-in data size have undefined behavior when accessing the stage-in memory region.

## See Also

### Configuring stage-in data

- [setStageInRegionWithIndirectBuffer(\_:indirectBufferOffset:)](setstageinregionwithindirectbuffer%28__indirectbufferoffset_%29.md): Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.

# setStageInRegion: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+

Sets the dimensions over the thread grid of how your compute kernel receives stage-in arguments.

## Declaration

```objectivec
- (void) setStageInRegion:(MTLRegion) region;
```

## Parameters

- `region`: The [MTLRegion](../mtlregion.md) defining how to interpret a thread’s location as a coordinate for stage-in data.

<a id="discussion"></a>

## Discussion

The region’s origin point, starting from `(0,0,0)` in the upper left of the bound data, determines the final index of `[[stage_in]]` data. Note that the total number of threads Metal launches may be larger than your stage-in data.

To determine the index used to fetch `[[stage_in]]` data for a given thread, the GPU adds the values specified by the region’s origin to the thread position in the grid. Threads in the grid outside of the maximum stage-in data size have undefined behavior when accessing the stage-in memory region.

## See Also

### Configuring stage-in data

- [setStageInRegionWithIndirectBuffer:indirectBufferOffset:](setstageinregionwithindirectbuffer%28__indirectbufferoffset_%29.md): Sets the region of the stage-in attributes to apply to a compute kernel using an indirect buffer.
