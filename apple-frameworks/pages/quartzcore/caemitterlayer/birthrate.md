> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/birthrate](https://developer.apple.com/documentation/quartzcore/caemitterlayer/birthrate)

# birthRate (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines a multiplier that is applied to the cell-defined birth rate. Animatable

## Declaration

```swift
var birthRate: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The birth rate of each cell is multiplied by this number to give the actual number of particles created every second. Default value is `1.0`.

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.

# birthRate (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines a multiplier that is applied to the cell-defined birth rate. Animatable

## Declaration

```objectivec
@property float birthRate;
```

<a id="Discussion"></a>

## Discussion

The birth rate of each cell is multiplied by this number to give the actual number of particles created every second. Default value is `1.0`.

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.
