> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/upperatmospherescattering](https://developer.apple.com/documentation/modelio/mdlskycubetexture/upperatmospherescattering)

# upperAtmosphereScattering (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A factor that influences the color of the simulated sky.

## Declaration

```swift
var upperAtmosphereScattering: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value affects the intensity of sunlight and the color of the sky. A value of `0.0` produces muted, dusky colors, and a value of 1.0 produces saturated, noon-like sky colors.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.

# upperAtmosphereScattering (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A factor that influences the color of the simulated sky.

## Declaration

```objectivec
@property (nonatomic, assign) float upperAtmosphereScattering;
```

<a id="Discussion"></a>

## Discussion

This value affects the intensity of sunlight and the color of the sky. A value of `0.0` produces muted, dusky colors, and a value of 1.0 produces saturated, noon-like sky colors.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.
