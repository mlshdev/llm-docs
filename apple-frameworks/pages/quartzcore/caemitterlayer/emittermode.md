> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/emittermode](https://developer.apple.com/documentation/quartzcore/caemitterlayer/emittermode)

# emitterMode (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the emitter mode.

## Declaration

```swift
var emitterMode: CAEmitterLayerEmitterMode { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for emitterMode are shown in [Emitter Modes](../emitter-modes.md). The default value is [volume](../caemitterlayeremittermode/volume.md).

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.

# emitterMode (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the emitter mode.

## Declaration

```objectivec
@property (copy) CAEmitterLayerEmitterMode emitterMode;
```

<a id="Discussion"></a>

## Discussion

The possible values for emitterMode are shown in [Emitter Modes](../emitter-modes.md). The default value is [kCAEmitterLayerVolume](../caemitterlayeremittermode/volume.md).

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.
