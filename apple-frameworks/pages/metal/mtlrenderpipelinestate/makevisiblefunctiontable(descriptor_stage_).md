> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/makevisiblefunctiontable(descriptor:stage:)](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/makevisiblefunctiontable(descriptor:stage:))

# makeVisibleFunctionTable(descriptor:stage:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new visible function table.

## Declaration

```swift
func makeVisibleFunctionTable(descriptor: MTLVisibleFunctionTableDescriptor, stage: MTLRenderStages) -> (any MTLVisibleFunctionTable)?
```

## Parameters

- `descriptor`: An [MTLVisibleFunctionTableDescriptor](../mtlvisiblefunctiontabledescriptor.md) instance that configures the visible function table the method creates.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the render pass stage the visible function table applies to.

## See Also

### Creating function handles and tables

- [functionHandle(function:stage:)](functionhandle%28function_stage_%29-7uvul.md): Creates a function handle for a shader.
- [makeIntersectionFunctionTable(descriptor:stage:)](makeintersectionfunctiontable%28descriptor_stage_%29.md): Creates a new intersection function table.

# newVisibleFunctionTableWithDescriptor:stage: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a new visible function table.

## Declaration

```objectivec
- (id<MTLVisibleFunctionTable>) newVisibleFunctionTableWithDescriptor:(MTLVisibleFunctionTableDescriptor *) descriptor stage:(MTLRenderStages) stage;
```

## Parameters

- `descriptor`: An [MTLVisibleFunctionTableDescriptor](../mtlvisiblefunctiontabledescriptor.md) instance that configures the visible function table the method creates.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the render pass stage the visible function table applies to.

## See Also

### Creating function handles and tables

- [functionHandleWithFunction:stage:](functionhandle%28function_stage_%29-7uvul.md): Creates a function handle for a shader.
- [newIntersectionFunctionTableWithDescriptor:stage:](makeintersectionfunctiontable%28descriptor_stage_%29.md): Creates a new intersection function table.
