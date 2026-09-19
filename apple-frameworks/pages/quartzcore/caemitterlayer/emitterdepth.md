> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/quartzcore/caemitterlayer/emitterdepth

# emitterDepth (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Determines the depth of the emitter shape.

## Declaration

```swift
var emitterDepth: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

How the emitter depth is applied depends on the emitter shape. See [Emitter Shape](../emitter-shape.md) for details. Depending on the value of [emitterShape](emittershape.md), this value may be ignored.

Default is `0.0`.

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.

# emitterDepth (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Determines the depth of the emitter shape.

## Declaration

```objectivec
@property CGFloat emitterDepth;
```

<a id="Discussion"></a>

## Discussion

How the emitter depth is applied depends on the emitter shape. See [Emitter Shape](../emitter-shape.md) for details. Depending on the value of [emitterShape](emittershape.md), this value may be ignored.

Default is `0.0`.

## See Also

### Emitter Geometry

- [renderMode](rendermode.md): Defines how particle cells are rendered into the layer.
- [emitterPosition](emitterposition.md): The position of the center of the particle emitter. Animatable.
- [emitterShape](emittershape.md): Specifies the emitter shape.
- [emitterZPosition](emitterzposition.md): Specifies the center of the particle emitter shape along the z-axis. Animatable.
- [emitterSize](emittersize.md): Determines the size of the particle emitter shape. Animatable.
