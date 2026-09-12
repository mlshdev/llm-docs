> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/stages()](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/stages())

# stages() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Queries a bitmask representing the shader stages on which commands currently present in this command encoder operate.

## Declaration

```swift
func stages() -> MTLStages
```

<a id="return-value"></a>

## Return Value

A bitmask representing shader stages that commands currently present in this command encoder operate on.

<a id="discussion"></a>

## Discussion

Metal dynamically updates this property based on the commands you encode into the command encoder, for example, it sets the bit [dispatch](../mtlstages/dispatch.md) if this encoder contains any commands that dispatch a compute kernel.

Similarly, it sets the bit [blit](../mtlstages/blit.md) if this encoder contains any commands to copy or modify buffers, textures, or indirect command buffers.

Finally, Metal sets the bit [accelerationStructure](../mtlstages/accelerationstructure.md) if this encoder contains any commands that build, copy, or refit acceleration structures.

# stages (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Queries a bitmask representing the shader stages on which commands currently present in this command encoder operate.

## Declaration

```objectivec
- (MTLStages) stages;
```

<a id="return-value"></a>

## Return Value

A bitmask representing shader stages that commands currently present in this command encoder operate on.

<a id="discussion"></a>

## Discussion

Metal dynamically updates this property based on the commands you encode into the command encoder, for example, it sets the bit [MTLStageDispatch](../mtlstages/dispatch.md) if this encoder contains any commands that dispatch a compute kernel.

Similarly, it sets the bit [MTLStageBlit](../mtlstages/blit.md) if this encoder contains any commands to copy or modify buffers, textures, or indirect command buffers.

Finally, Metal sets the bit [MTLStageAccelerationStructure](../mtlstages/accelerationstructure.md) if this encoder contains any commands that build, copy, or refit acceleration structures.
