> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/supportindirectcommandbuffers

# supportIndirectCommandBuffers (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether the render pipeline supports encoding commands into an indirect command buffer.

## Declaration

```swift
var supportIndirectCommandBuffers: Bool { get }
```

<a id="discussion"></a>

## Discussion

This property gets its value by copying from the [supportIndirectCommandBuffers](../mtlrenderpipelinedescriptor/supportindirectcommandbuffers.md) property of the [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance as the GPU device creates the pipeline state.

# supportIndirectCommandBuffers (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A Boolean value that indicates whether the render pipeline supports encoding commands into an indirect command buffer.

## Declaration

```objectivec
@property (readonly) BOOL supportIndirectCommandBuffers;
```

<a id="discussion"></a>

## Discussion

This property gets its value by copying from the [supportIndirectCommandBuffers](../mtlrenderpipelinedescriptor/supportindirectcommandbuffers.md) property of the [MTLRenderPipelineDescriptor](../mtlrenderpipelinedescriptor.md) instance as the GPU device creates the pipeline state.
