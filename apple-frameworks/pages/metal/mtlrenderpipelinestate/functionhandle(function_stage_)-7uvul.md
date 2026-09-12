> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/functionhandle(function:stage:)-7uvul](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/functionhandle(function:stage:)-7uvul)

# functionHandle(function:stage:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a function handle for a shader.

## Declaration

```swift
func functionHandle(function: any MTLFunction, stage: MTLRenderStages) -> (any MTLFunctionHandle)?
```

## Parameters

- `function`: An [MTLFunction](../mtlfunction.md) instance that represents the shader the method creates a handle for.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the rendering stage that invokes the shader that `function` represents.

## See Also

### Creating function handles and tables

- [makeVisibleFunctionTable(descriptor:stage:)](makevisiblefunctiontable%28descriptor_stage_%29.md): Creates a new visible function table.
- [makeIntersectionFunctionTable(descriptor:stage:)](makeintersectionfunctiontable%28descriptor_stage_%29.md): Creates a new intersection function table.

# functionHandleWithFunction:stage: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Creates a function handle for a shader.

## Declaration

```objectivec
- (id<MTLFunctionHandle>) functionHandleWithFunction:(id<MTLFunction>) function stage:(MTLRenderStages) stage;
```

## Parameters

- `function`: An [MTLFunction](../mtlfunction.md) instance that represents the shader the method creates a handle for.
- `stage`: An [MTLRenderStages](../mtlrenderstages.md) instance that represents the rendering stage that invokes the shader that `function` represents.

## See Also

### Creating function handles and tables

- [newVisibleFunctionTableWithDescriptor:stage:](makevisiblefunctiontable%28descriptor_stage_%29.md): Creates a new visible function table.
- [newIntersectionFunctionTableWithDescriptor:stage:](makeintersectionfunctiontable%28descriptor_stage_%29.md): Creates a new intersection function table.
