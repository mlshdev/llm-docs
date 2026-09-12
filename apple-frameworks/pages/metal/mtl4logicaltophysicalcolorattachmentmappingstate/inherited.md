> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4logicaltophysicalcolorattachmentmappingstate/inherited](https://developer.apple.com/documentation/metal/mtl4logicaltophysicalcolorattachmentmappingstate/inherited)

# MTL4LogicalToPhysicalColorAttachmentMappingState.inherited (Swift)

**Framework:** Metal  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Deduces the color attachment mapping by inheriting it from the color attachment map of the current encoder.

## Declaration

```swift
case inherited
```

<a id="discussion"></a>

## Discussion

Use this setting to indicate Metal should inherit the mapping from the `colorAttachmentMap` property of the current [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) or [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) in use at draw time.

# MTL4LogicalToPhysicalColorAttachmentMappingStateInherited (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Deduces the color attachment mapping by inheriting it from the color attachment map of the current encoder.

## Declaration

```objectivec
MTL4LogicalToPhysicalColorAttachmentMappingStateInherited
```

<a id="discussion"></a>

## Discussion

Use this setting to indicate Metal should inherit the mapping from the `colorAttachmentMap` property of the current [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md) or [MTLRenderCommandEncoder](../mtlrendercommandencoder.md) in use at draw time.
