> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/rendermode](https://developer.apple.com/documentation/quartzcore/caemitterlayer/rendermode)

# renderMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines how particle cells are rendered into the layer.

## Declaration

```swift
var renderMode: CAEmitterLayerRenderMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for render modes are shown in [Emitter Modes](../emitter-modes.md). The default value is [unordered](../caemitterlayerrendermode/unordered.md).

## See Also

### Emitter Geometry

- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.

# renderMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines how particle cells are rendered into the layer.

## Declaration

```objectivec
@property (copy) CAEmitterLayerRenderMode renderMode;
```

<a id="Discussion"></a>

## Discussion

The possible values for render modes are shown in [Emitter Modes](../emitter-modes.md). The default value is [kCAEmitterLayerUnordered](../caemitterlayerrendermode/unordered.md).

## See Also

### Emitter Geometry

- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.
