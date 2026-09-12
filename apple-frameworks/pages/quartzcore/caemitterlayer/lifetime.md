> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/lifetime](https://developer.apple.com/documentation/quartzcore/caemitterlayer/lifetime)

# lifetime (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.

## Declaration

```swift
var lifetime: Float { get set }
```

<a id="Discussion"></a>

## Discussion

Default value is `1.0`.

By setting an emitter’s [lifetime](lifetime.md) to `0`, you effectively stop particle emission: all new particles created have their [lifetime](../caemittercell/lifetime.md) set to `0` and are never rendered.

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.

# lifetime (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.

## Declaration

```objectivec
@property float lifetime;
```

<a id="Discussion"></a>

## Discussion

Default value is `1.0`.

By setting an emitter’s [lifetime](lifetime.md) to `0`, you effectively stop particle emission: all new particles created have their [lifetime](../caemittercell/lifetime.md) set to `0` and are never rendered.

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.
