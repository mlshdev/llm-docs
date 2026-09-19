> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4logicaltophysicalcolorattachmentmappingstate/inherited

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

This setting instructs the pipeline state to inherit the color attachment map of the current render encoder:

- For an [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md), call its [setColorAttachmentMap(\_:)](../mtl4rendercommandencoder/setcolorattachmentmap%28__%29.md) method.
- For an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), call its [setColorAttachmentMap(\_:)](../mtlrendercommandencoder/setcolorattachmentmap%28__%29.md) method.

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

This setting instructs the pipeline state to inherit the color attachment map of the current render encoder:

- For an [MTL4RenderCommandEncoder](../mtl4rendercommandencoder.md), call its [setColorAttachmentMap:](../mtl4rendercommandencoder/setcolorattachmentmap%28__%29.md) method.
- For an [MTLRenderCommandEncoder](../mtlrendercommandencoder.md), call its [setColorAttachmentMap:](../mtlrendercommandencoder/setcolorattachmentmap%28__%29.md) method.
