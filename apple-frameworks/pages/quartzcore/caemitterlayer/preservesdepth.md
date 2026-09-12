> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/caemitterlayer/preservesdepth](https://developer.apple.com/documentation/quartzcore/caemitterlayer/preservesdepth)

# preservesDepth (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines whether the layer flattens the particles into its plane.

## Declaration

```swift
var preservesDepth: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the layer renders its particles as if they directly inhabit the three-dimensional coordinate space of the layer’s superlayer. When enabled, the effect of the layer’s `filters`, `backgroundFilters`, and shadow related properties is undefined.

Default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.

# preservesDepth (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Defines whether the layer flattens the particles into its plane.

## Declaration

```objectivec
@property BOOL preservesDepth;
```

<a id="Discussion"></a>

## Discussion

If [true](https://developer.apple.com/documentation/swift/true), the layer renders its particles as if they directly inhabit the three-dimensional coordinate space of the layer’s superlayer. When enabled, the effect of the layer’s `filters`, `backgroundFilters`, and shadow related properties is undefined.

Default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Emitter Cell Attribute Multipliers

- [scale](scale.md): Defines a multiplier applied to the cell-defined particle scale.
- [seed](seed.md): Specifies the seed used to initialize the random number generator.
- [spin](spin.md): Defines a multiplier applied to the cell-defined particle spin. Animatable.
- [velocity](velocity.md): Defines a multiplier applied to the cell-defined particle velocity. Animatable.
- [birthRate](birthrate.md): Defines a multiplier that is applied to the cell-defined birth rate. Animatable
- [emitterMode](emittermode.md): Specifies the emitter mode.
- [lifetime](lifetime.md): Defines a multiplier applied to the cell-defined lifetime range when particles are created. Animatable.
