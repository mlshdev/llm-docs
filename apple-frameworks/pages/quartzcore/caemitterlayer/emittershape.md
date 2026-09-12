> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/emittershape](https://developer.apple.com/documentation/quartzcore/caemitterlayer/emittershape)

# emitterShape (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the emitter shape.

## Declaration

```swift
var emitterShape: CAEmitterLayerEmitterShape { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for emitterMode are shown in [Emitter Shape](../emitter-shape.md). The default value is [point](../caemitterlayeremittershape/point.md).

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.

# emitterShape (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the emitter shape.

## Declaration

```objectivec
@property (copy) CAEmitterLayerEmitterShape emitterShape;
```

<a id="Discussion"></a>

## Discussion

The possible values for emitterMode are shown in [Emitter Shape](../emitter-shape.md). The default value is [kCAEmitterLayerPoint](../caemitterlayeremittershape/point.md).

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.
