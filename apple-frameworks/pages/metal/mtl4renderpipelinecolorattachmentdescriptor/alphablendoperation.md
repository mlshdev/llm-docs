> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtl4renderpipelinecolorattachmentdescriptor/alphablendoperation

# alphaBlendOperation (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the alpha blending operation.

## Declaration

```swift
var alphaBlendOperation: MTLBlendOperation { get set }
```

<a id="discussion"></a>

## Discussion

This property defaults to [MTLBlendOperation.add](../mtlblendoperation/add.md).

# alphaBlendOperation (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configures the alpha blending operation.

## Declaration

```objectivec
@property (nonatomic) MTLBlendOperation alphaBlendOperation;
```

<a id="discussion"></a>

## Discussion

This property defaults to [MTLBlendOperationAdd](../mtlblendoperation/add.md).
