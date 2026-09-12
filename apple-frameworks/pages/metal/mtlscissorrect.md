> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlscissorrect](https://developer.apple.com/documentation/metal/mtlscissorrect)

# MTLScissorRect (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A rectangle for the scissor fragment test.

## Declaration

```swift
struct MTLScissorRect
```

## Topics

### Creating a scissor rectangle

- [init()](mtlscissorrect/init%28%29.md)
- [init(x:y:width:height:)](mtlscissorrect/init%28x_y_width_height_%29.md)

### Specifying scissor boundaries

- [height](mtlscissorrect/height.md): The height of the scissor rectangle, in pixels.
- [width](mtlscissorrect/width.md): The width of the scissor rectangle, in pixels.
- [x](mtlscissorrect/x.md): The x window coordinate of the upper-left corner of the scissor rectangle.
- [y](mtlscissorrect/y.md): The y window coordinate of the upper-left corner of the scissor rectangle.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.

# MTLScissorRect (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A rectangle for the scissor fragment test.

## Declaration

```objectivec
typedef struct { ... } MTLScissorRect;
```

## Topics

### Specifying scissor boundaries

- [height](mtlscissorrect/height.md): The height of the scissor rectangle, in pixels.
- [width](mtlscissorrect/width.md): The width of the scissor rectangle, in pixels.
- [x](mtlscissorrect/x.md): The x window coordinate of the upper-left corner of the scissor rectangle.
- [y](mtlscissorrect/y.md): The y window coordinate of the upper-left corner of the scissor rectangle.

## See Also

### Dynamic render pipeline states

- [MTLViewport](mtlviewport.md): A 3D rectangular region for the viewport clipping.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.
