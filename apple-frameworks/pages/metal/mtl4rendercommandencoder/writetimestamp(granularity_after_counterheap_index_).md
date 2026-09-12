> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4rendercommandencoder/writetimestamp(granularity:after:counterheap:index:)](https://developer.apple.com/documentation/metal/mtl4rendercommandencoder/writetimestamp(granularity:after:counterheap:index:))

# writeTimestamp(granularity:after:counterHeap:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Writes a GPU timestamp into the given [MTL4CounterHeap](../mtl4counterheap.md) at `index` after `stage` completes.

## Declaration

```swift
func writeTimestamp(granularity: MTL4TimestampGranularity, after stage: MTLRenderStages, counterHeap: any MTL4CounterHeap, index: Int)
```

## Parameters

- `granularity`: A [MTL4TimestampGranularity](../mtl4timestampgranularity.md) hint.
- `stage`: [MTLRenderStages](../mtlrenderstages.md) that need to complete before Metal writes the timestamp. This may also include later stages that are related, for example [mesh](../mtlrenderstages/mesh.md) may include [vertex](../mtlrenderstages/vertex.md).
- `counterHeap`: [MTL4CounterHeap](../mtl4counterheap.md) into which Metal writes timestamps.
- `index`: The index value into which Metal writes this timestamp.

<a id="discussion"></a>

## Discussion

This command only guarantees all draws prior to this command are complete when Metal writes the timestamp into the counter heap you provide in the `counterHeap` parameter. The timestamp may also include subsequent operations.

If you call this method before any draw calls, Metal writes a timestamp before the stage you specify in the `stage` parameter begins.

# writeTimestampWithGranularity:afterStage:intoHeap:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Writes a GPU timestamp into the given [MTL4CounterHeap](../mtl4counterheap.md) at `index` after `stage` completes.

## Declaration

```objectivec
- (void) writeTimestampWithGranularity:(MTL4TimestampGranularity) granularity afterStage:(MTLRenderStages) stage intoHeap:(id<MTL4CounterHeap>) counterHeap atIndex:(NSUInteger) index;
```

## Parameters

- `granularity`: A [MTL4TimestampGranularity](../mtl4timestampgranularity.md) hint.
- `stage`: [MTLRenderStages](../mtlrenderstages.md) that need to complete before Metal writes the timestamp. This may also include later stages that are related, for example [MTLRenderStageMesh](../mtlrenderstages/mesh.md) may include [MTLRenderStageVertex](../mtlrenderstages/vertex.md).
- `counterHeap`: [MTL4CounterHeap](../mtl4counterheap.md) into which Metal writes timestamps.
- `index`: The index value into which Metal writes this timestamp.

<a id="discussion"></a>

## Discussion

This command only guarantees all draws prior to this command are complete when Metal writes the timestamp into the counter heap you provide in the `counterHeap` parameter. The timestamp may also include subsequent operations.

If you call this method before any draw calls, Metal writes a timestamp before the stage you specify in the `stage` parameter begins.
