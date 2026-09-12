> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/sunelevation](https://developer.apple.com/documentation/modelio/mdlskycubetexture/sunelevation)

# sunElevation (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sun’s position in the simulated sky.

## Declaration

```swift
var sunElevation: Float { get set }
```

<a id="Discussion"></a>

## Discussion

An elevation of `1.0` places the sun at the zenith (the center of the top face of the cube texture), a value of `0.0` places the sun at the nadir (the center of the bottom face), and a value of `0.5` places the sun on the horizon. The azimuth angle of the sun is fixed; to control the horizontal position of the sun relative to scene content, rotate the scene element responsible for displaying the sky cube texture.

Combine changes to this property with different [turbidity](turbidity.md) and [upperAtmosphereScattering](upperatmospherescattering.md) to create sunset, dawn, or twilight effects.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.

# sunElevation (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The sun’s position in the simulated sky.

## Declaration

```objectivec
@property (nonatomic, assign) float sunElevation;
```

<a id="Discussion"></a>

## Discussion

An elevation of `1.0` places the sun at the zenith (the center of the top face of the cube texture), a value of `0.0` places the sun at the nadir (the center of the bottom face), and a value of `0.5` places the sun on the horizon. The azimuth angle of the sun is fixed; to control the horizontal position of the sun relative to scene content, rotate the scene element responsible for displaying the sky cube texture.

Combine changes to this property with different [turbidity](turbidity.md) and [upperAtmosphereScattering](upperatmospherescattering.md) to create sunset, dawn, or twilight effects.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.
