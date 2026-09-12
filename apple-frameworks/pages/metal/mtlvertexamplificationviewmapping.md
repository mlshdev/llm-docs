> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlvertexamplificationviewmapping](https://developer.apple.com/documentation/metal/mtlvertexamplificationviewmapping)

# MTLVertexAmplificationViewMapping (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · tvOS 16.0+ · visionOS 1.0+

An offset applied to a render target index and viewport index.

## Declaration

```swift
struct MTLVertexAmplificationViewMapping
```

## Mentioned In

- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)

## Topics

### Creating a view mapping

- [init()](mtlvertexamplificationviewmapping/init%28%29.md): Initializes a default view mapping.
- [init(viewportArrayIndexOffset:renderTargetArrayIndexOffset:)](mtlvertexamplificationviewmapping/init%28viewportarrayindexoffset_rendertargetarrayindexoffset_%29.md): Initializes a new view mapping.

### Specifying mapping offsets

- [renderTargetArrayIndexOffset](mtlvertexamplificationviewmapping/rendertargetarrayindexoffset.md): An offset into the list of render targets.
- [viewportArrayIndexOffset](mtlvertexamplificationviewmapping/viewportarrayindexoffset.md): An offset into the list of viewports.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.

# MTLVertexAmplificationViewMapping (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

An offset applied to a render target index and viewport index.

## Declaration

```objectivec
typedef struct { ... } MTLVertexAmplificationViewMapping;
```

## Mentioned In

- [Improving rendering performance with vertex amplification](improving-rendering-performance-with-vertex-amplification.md)

## Topics

### Specifying mapping offsets

- [renderTargetArrayIndexOffset](mtlvertexamplificationviewmapping/rendertargetarrayindexoffset.md): An offset into the list of render targets.
- [viewportArrayIndexOffset](mtlvertexamplificationviewmapping/viewportarrayindexoffset.md): An offset into the list of viewports.

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.
