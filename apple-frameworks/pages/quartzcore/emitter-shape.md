> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/emitter-shape](https://developer.apple.com/documentation/quartzcore/emitter-shape)

# Emitter Shape (Swift)

**Framework:** Core Animation  
**Kind:** API Collection

The emission shape is a one, two or three dimensional shape that defines where the emitted particles originate. The shapes are defined by a subset of [emitterPosition](caemitterlayer/emitterposition.md), [emitterZPosition](caemitterlayer/emitterzposition.md), [emitterSize](caemitterlayer/emittersize.md) and [emitterDepth](caemitterlayer/emitterdepth.md) properties.

## Topics

### Constants

- [point](caemitterlayeremittershape/point.md): Particles are emitted from a single point at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`)
- [line](caemitterlayeremittershape/line.md): Particles are emitted along a line from (`emitterPosition.x - emitterSize.width/2`, `emitterPosition.y`, `emitterZPosition`) to (`emitterPosition.x + emitterSize.width/2`, `emitterPosition.y`, `emitterZPosition`).
- [rectangle](caemitterlayeremittershape/rectangle.md): Particles are emitted from a rectangle with opposite corners \[emitterPosition.x - emitterSize.width/2, emitterPosition.y - emitterSize.height/2, emitterZPosition\], \[emitterPosition.x + emitterSize.width/2, emitterPosition.y + emitterSize.height/2, emitterZPosition\].
- [cuboid](caemitterlayeremittershape/cuboid.md): Particles are emitted from a cuboid (3D rectangle) with opposite corners: \[emitterPosition.x - emitterSize.width/2, emitterPosition.y - emitterSize.height/2, emitterZPosition - emitterDepth/2\], \[emitterPosition.x + emitterSize.width/2, emitterPosition.y + emitterSize.height/2, emitterZPosition+emitterDepth/2\].
- [circle](caemitterlayeremittershape/circle.md): Particles are emitted from a circle centered at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`) of radius `emitterSize.width`.
- [sphere](caemitterlayeremittershape/sphere.md): Particles are emitted from a sphere centered at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`) of radius `emitterSize.width`.

## See Also

### Constants

- [Emitter Modes](emitter-modes.md): These constants specify the possible emitter modes. They are used by the [emitterMode](caemitterlayer/emittermode.md) property.
- [Emitter Render Order](emitter-render-order.md): These constants specify the order that emitter cells are composited. They are used by the [renderMode](caemitterlayer/rendermode.md) property.

# Emitter Shape (Objective-C)

**Framework:** Core Animation  
**Kind:** API Collection

The emission shape is a one, two or three dimensional shape that defines where the emitted particles originate. The shapes are defined by a subset of [emitterPosition](caemitterlayer/emitterposition.md), [emitterZPosition](caemitterlayer/emitterzposition.md), [emitterSize](caemitterlayer/emittersize.md) and [emitterDepth](caemitterlayer/emitterdepth.md) properties.

## Topics

### Constants

- [kCAEmitterLayerPoint](caemitterlayeremittershape/point.md): Particles are emitted from a single point at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`)
- [kCAEmitterLayerLine](caemitterlayeremittershape/line.md): Particles are emitted along a line from (`emitterPosition.x - emitterSize.width/2`, `emitterPosition.y`, `emitterZPosition`) to (`emitterPosition.x + emitterSize.width/2`, `emitterPosition.y`, `emitterZPosition`).
- [kCAEmitterLayerRectangle](caemitterlayeremittershape/rectangle.md): Particles are emitted from a rectangle with opposite corners \[emitterPosition.x - emitterSize.width/2, emitterPosition.y - emitterSize.height/2, emitterZPosition\], \[emitterPosition.x + emitterSize.width/2, emitterPosition.y + emitterSize.height/2, emitterZPosition\].
- [kCAEmitterLayerCuboid](caemitterlayeremittershape/cuboid.md): Particles are emitted from a cuboid (3D rectangle) with opposite corners: \[emitterPosition.x - emitterSize.width/2, emitterPosition.y - emitterSize.height/2, emitterZPosition - emitterDepth/2\], \[emitterPosition.x + emitterSize.width/2, emitterPosition.y + emitterSize.height/2, emitterZPosition+emitterDepth/2\].
- [kCAEmitterLayerCircle](caemitterlayeremittershape/circle.md): Particles are emitted from a circle centered at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`) of radius `emitterSize.width`.
- [kCAEmitterLayerSphere](caemitterlayeremittershape/sphere.md): Particles are emitted from a sphere centered at (`emitterPosition.x`, `emitterPosition.y`, `emitterZPosition`) of radius `emitterSize.width`.

## See Also

### Constants

- [Emitter Modes](emitter-modes.md): These constants specify the possible emitter modes. They are used by the [emitterMode](caemitterlayer/emittermode.md) property.
- [Emitter Render Order](emitter-render-order.md): These constants specify the order that emitter cells are composited. They are used by the [renderMode](caemitterlayer/rendermode.md) property.
