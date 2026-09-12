> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltriangletessellationfactorshalf](https://developer.apple.com/documentation/metal/mtltriangletessellationfactorshalf)

# MTLTriangleTessellationFactorsHalf (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The per-patch tessellation factors for a triangle patch.

## Declaration

```swift
struct MTLTriangleTessellationFactorsHalf
```

<a id="overview"></a>

## Overview

Refer to the [Tessellation](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Tessellation/Tessellation.html#//apple_ref/doc/uid/TP40014221-CH15) chapter of the [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221) for further information.

## Topics

### Initializers

- [init()](mtltriangletessellationfactorshalf/init%28%29.md)
- [init(edgeTessellationFactor:insideTessellationFactor:)](mtltriangletessellationfactorshalf/init%28edgetessellationfactor_insidetessellationfactor_%29.md)

### Instance Properties

- [edgeTessellationFactor](mtltriangletessellationfactorshalf/edgetessellationfactor.md): The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.
- [insideTessellationFactor](mtltriangletessellationfactorshalf/insidetessellationfactor.md): The inside tessellation factor.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.

# MTLTriangleTessellationFactorsHalf (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The per-patch tessellation factors for a triangle patch.

## Declaration

```objectivec
typedef struct { ... } MTLTriangleTessellationFactorsHalf;
```

<a id="overview"></a>

## Overview

Refer to the [Tessellation](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Tessellation/Tessellation.html#//apple_ref/doc/uid/TP40014221-CH15) chapter of the [Metal Programming Guide](https://developer.apple.com/library/archive/documentation/Miscellaneous/Conceptual/MetalProgrammingGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40014221) for further information.

## Topics

### Instance Properties

- [edgeTessellationFactor](mtltriangletessellationfactorshalf/edgetessellationfactor.md): The edge tessellation factors, with each index value providing the tessellation factor for a particular edge.
- [insideTessellationFactor](mtltriangletessellationfactorshalf/insidetessellationfactor.md): The inside tessellation factor.

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
