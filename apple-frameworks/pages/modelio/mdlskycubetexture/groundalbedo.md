> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/groundalbedo](https://developer.apple.com/documentation/modelio/mdlskycubetexture/groundalbedo)

# groundAlbedo (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A factor that influences the clarity of the simulated sky.

## Declaration

```swift
var groundAlbedo: Float { get set }
```

<a id="Discussion"></a>

## Discussion

This value simulates the amount of light that bounces back up into the sky from the ground. A value of `0.0` produces a clear sky, and values closer to `10` reduce the contrast of the sky, producing a foggy effect.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.

# groundAlbedo (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A factor that influences the clarity of the simulated sky.

## Declaration

```objectivec
@property (nonatomic, assign) float groundAlbedo;
```

<a id="Discussion"></a>

## Discussion

This value simulates the amount of light that bounces back up into the sky from the ground. A value of `0.0` produces a clear sky, and values closer to `10` reduce the contrast of the sky, producing a foggy effect.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundColor](groundcolor.md): The color of the simulated ground.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.
