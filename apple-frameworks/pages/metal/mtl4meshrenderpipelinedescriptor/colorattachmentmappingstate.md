> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4meshrenderpipelinedescriptor/colorattachmentmappingstate

# colorAttachmentMappingState (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the logical-to-physical rendering remap state.

## Declaration

```swift
var colorAttachmentMappingState: MTL4LogicalToPhysicalColorAttachmentMappingState { get set }
```

<a id="discussion"></a>

## Discussion

Use this property to assign how a [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) instance maps the output of your fragment shader to physical color attachments.

# colorAttachmentMappingState (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the logical-to-physical rendering remap state.

## Declaration

```objectivec
@property (nonatomic, readwrite) MTL4LogicalToPhysicalColorAttachmentMappingState colorAttachmentMappingState;
```

<a id="discussion"></a>

## Discussion

Use this property to assign how a [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) instance maps the output of your fragment shader to physical color attachments.
