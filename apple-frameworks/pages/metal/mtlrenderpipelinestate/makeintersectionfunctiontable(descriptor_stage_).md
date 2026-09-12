> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/makeintersectionfunctiontable(descriptor:stage:)](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/makeintersectionfunctiontable(descriptor:stage:))

# makeIntersectionFunctionTable(descriptor:stage:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new intersection function table.

## Declaration

```swift
func makeIntersectionFunctionTable(descriptor: MTLIntersectionFunctionTableDescriptor, stage: MTLRenderStages) -> (any MTLIntersectionFunctionTable)?
```

## Parameters

- `descriptor`: An [MTLIntersectionFunctionTableDescriptor](../mtlintersectionfunctiontabledescriptor.md) instance that configures the visible function table the method creates.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the render pass stage the intersection function table applies to.

## See Also

### Creating function handles and tables

- [functionHandle(function:stage:)](functionhandle%28function_stage_%29-7uvul.md): Creates a function handle for a shader.
- [makeVisibleFunctionTable(descriptor:stage:)](makevisiblefunctiontable%28descriptor_stage_%29.md): Creates a new visible function table.

# newIntersectionFunctionTableWithDescriptor:stage: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new intersection function table.

## Declaration

```objectivec
- (id<MTLIntersectionFunctionTable>) newIntersectionFunctionTableWithDescriptor:(MTLIntersectionFunctionTableDescriptor *) descriptor stage:(MTLRenderStages) stage;
```

## Parameters

- `descriptor`: An [MTLIntersectionFunctionTableDescriptor](../mtlintersectionfunctiontabledescriptor.md) instance that configures the visible function table the method creates.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the render pass stage the intersection function table applies to.

## See Also

### Creating function handles and tables

- [functionHandleWithFunction:stage:](functionhandle%28function_stage_%29-7uvul.md): Creates a function handle for a shader.
- [newVisibleFunctionTableWithDescriptor:stage:](makevisiblefunctiontable%28descriptor_stage_%29.md): Creates a new visible function table.
