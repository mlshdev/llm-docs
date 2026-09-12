> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/seed](https://developer.apple.com/documentation/quartzcore/caemitterlayer/seed)

# seed (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the seed used to initialize the random number generator.

## Declaration

```swift
var seed: UInt32 { get set }
```

<a id="Discussion"></a>

## Discussion

Each layer has its own random number generator state. Emitter cell properties that are defined as a mean and a range, such as a cell’s `speed`, the value of the properties are uniformly distributed in the interval \[M - R/2, M + R/2\].

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.

# seed (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Specifies the seed used to initialize the random number generator.

## Declaration

```objectivec
@property unsigned int seed;
```

<a id="Discussion"></a>

## Discussion

Each layer has its own random number generator state. Emitter cell properties that are defined as a mean and a range, such as a cell’s `speed`, the value of the properties are uniformly distributed in the interval \[M - R/2, M + R/2\].

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
- [preservesDepth](preservesdepth.md): Defines whether the layer flattens the particles into its plane.
