> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlviewport](https://developer.apple.com/documentation/metal/mtlviewport)

# MTLViewport (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 3D rectangular region for the viewport clipping.

## Declaration

```swift
struct MTLViewport
```

## Topics

### Creating a viewport

- [init()](mtlviewport/init%28%29.md): Returns a new viewport.
- [init(originX:originY:width:height:znear:zfar:)](mtlviewport/init%28originx_originy_width_height_znear_zfar_%29.md): Returns a new viewport of a specified size at a specified origin.

### Specifying viewport boundaries

- [originX](mtlviewport/originx.md): The x coordinate of the upper-left corner of the viewport.
- [originY](mtlviewport/originy.md): The y coordinate of the upper-left corner of the viewport.
- [width](mtlviewport/width.md): The width of the viewport, in pixels.
- [height](mtlviewport/height.md): The height of the viewport, in pixels.
- [znear](mtlviewport/znear.md): The z coordinate of the near clipping plane of the viewport.
- [zfar](mtlviewport/zfar.md): The z coordinate of the far clipping plane of the viewport.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Dynamic render pipeline states

- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.

# MTLViewport (Objective-C)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

A 3D rectangular region for the viewport clipping.

## Declaration

```objectivec
typedef struct { ... } MTLViewport;
```

## Topics

### Specifying viewport boundaries

- [originX](mtlviewport/originx.md): The x coordinate of the upper-left corner of the viewport.
- [originY](mtlviewport/originy.md): The y coordinate of the upper-left corner of the viewport.
- [width](mtlviewport/width.md): The width of the viewport, in pixels.
- [height](mtlviewport/height.md): The height of the viewport, in pixels.
- [znear](mtlviewport/znear.md): The z coordinate of the near clipping plane of the viewport.
- [zfar](mtlviewport/zfar.md): The z coordinate of the far clipping plane of the viewport.

## See Also

### Dynamic render pipeline states

- [MTLScissorRect](mtlscissorrect.md): A rectangle for the scissor fragment test.
- [MTLVertexAmplificationViewMapping](mtlvertexamplificationviewmapping.md): An offset applied to a render target index and viewport index.
- [MTLQuadTessellationFactorsHalf](mtlquadtessellationfactorshalf.md): The per-patch tessellation factors for a quad patch.
- [MTLTriangleTessellationFactorsHalf](mtltriangletessellationfactorshalf.md): The per-patch tessellation factors for a triangle patch.
