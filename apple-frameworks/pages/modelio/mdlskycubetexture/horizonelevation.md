> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/horizonelevation](https://developer.apple.com/documentation/modelio/mdlskycubetexture/horizonelevation)

# horizonElevation (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The angle, in radians relative to center, below which to render the ground color.

## Declaration

```swift
var horizonElevation: Float { get set }
```

<a id="Discussion"></a>

## Discussion

By default, Model I/O renders an infinite sky above and below. If you set the [groundColor](groundcolor.md) property, Model I/O renders a solid color for all areas of the cube texture below this elevation. An elevation of `0.0` renders a horizon at the center elevation of the sky cube; negative values lead to a lower horizon and positive values to a higher horizon.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.

# horizonElevation (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The angle, in radians relative to center, below which to render the ground color.

## Declaration

```objectivec
@property (nonatomic, assign) float horizonElevation;
```

<a id="Discussion"></a>

## Discussion

By default, Model I/O renders an infinite sky above and below. If you set the [groundColor](groundcolor.md) property, Model I/O renders a solid color for all areas of the cube texture below this elevation. An elevation of `0.0` renders a horizon at the center elevation of the sky cube; negative values lead to a lower horizon and positive values to a higher horizon.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
