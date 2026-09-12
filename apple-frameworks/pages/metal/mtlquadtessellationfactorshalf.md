> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlquadtessellationfactorshalf](https://developer.apple.com/documentation/metal/mtlquadtessellationfactorshalf)

# MTLQuadTessellationFactorsHalf (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The per-patch tessellation factors for a quad patch.

## Declaration

```swift
struct MTLQuadTessellationFactorsHalf
```

<a id="overview"></a>

## Overview

Refer to the [Tessellation](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Tessellation/Tessellation.html#//apple_ref/doc/uid/TP40014221-CH15) chapter of the [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221) for further information.

## Topics

### Initializers

- [init()](mtlquadtessellationfactorshalf/init%28%29.md): Returns a new per-patch tessellation factors structure.
- [init(edgeTessellationFactor:insideTessellationFactor:)](mtlquadtessellationfactorshalf/init%28edgetessellationfactor_insidetessellationfactor_%29.md): Returns a new per-patch tessellation factors structure with the specified parameters.

### Instance Properties

- [edgeTessellationFactor](mtlquadtessellationfactorshalf/edgetessellationfactor.md): The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.
- [insideTessellationFactor](mtlquadtessellationfactorshalf/insidetessellationfactor.md): The inside tessellation factors, with the value in index 0 providing the horizontal tessellation factor and the value in index 1 providing the vertical tessellation factor.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.

# MTLQuadTessellationFactorsHalf (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The per-patch tessellation factors for a quad patch.

## Declaration

```objectivec
typedef struct { ... } MTLQuadTessellationFactorsHalf;
```

<a id="overview"></a>

## Overview

Refer to the [Tessellation](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Tessellation/Tessellation.html#//apple_ref/doc/uid/TP40014221-CH15) chapter of the [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221) for further information.

## Topics

### Instance Properties

- [edgeTessellationFactor](mtlquadtessellationfactorshalf/edgetessellationfactor.md): The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.
- [insideTessellationFactor](mtlquadtessellationfactorshalf/insidetessellationfactor.md): The inside tessellation factors, with the value in index 0 providing the horizontal tessellation factor and the value in index 1 providing the vertical tessellation factor.

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.
