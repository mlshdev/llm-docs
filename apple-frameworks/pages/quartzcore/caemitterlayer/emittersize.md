> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/emittersize](https://developer.apple.com/documentation/quartzcore/caemitterlayer/emittersize)

# emitterSize (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Determines the size of the particle emitter shape. Animatable.

## Declaration

```swift
var emitterSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

How the emitter size is applied depends on the emitter shape. See [Emitter Shape](../emitter-shape.md) for details. Depending on the value of [emitterShape](emittershape.md), this value may be ignored.

Default is `0.0`.

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.

# emitterSize (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Determines the size of the particle emitter shape. Animatable.

## Declaration

```objectivec
@property CGSize emitterSize;
```

<a id="Discussion"></a>

## Discussion

How the emitter size is applied depends on the emitter shape. See [Emitter Shape](../emitter-shape.md) for details. Depending on the value of [emitterShape](emittershape.md), this value may be ignored.

Default is `0.0`.

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterDepth](emitterdepth.md): Determines the depth of the emitter shape.
