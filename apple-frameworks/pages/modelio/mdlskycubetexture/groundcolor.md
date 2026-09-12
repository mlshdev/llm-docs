> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlskycubetexture/groundcolor](https://developer.apple.com/documentation/modelio/mdlskycubetexture/groundcolor)

# groundColor (Swift)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color of the simulated ground.

## Declaration

```swift
var groundColor: CGColor? { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property’s value is `nil`, causing Model I/O to render an infinite sky above and below. If you set this property to a color, Model I/O renders a solid color for all areas of the cube texture below the level specified in the [horizonElevation](horizonelevation.md) property.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.

# groundColor (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The color of the simulated ground.

## Declaration

```objectivec
@property (nonatomic, nullable) CGColorRef groundColor;
```

<a id="Discussion"></a>

## Discussion

By default, this property’s value is `nil`, causing Model I/O to render an infinite sky above and below. If you set this property to a color, Model I/O renders a solid color for all areas of the cube texture below the level specified in the [horizonElevation](horizonelevation.md) property.

## See Also

### Working with Sky Simulation Parameters

- [turbidity](turbidity.md): The cloudiness or haziness of the simulated sky.
- [sunElevation](sunelevation.md): The sun’s position in the simulated sky.
- [upperAtmosphereScattering](upperatmospherescattering.md): A factor that influences the color of the simulated sky.
- [groundAlbedo](groundalbedo.md): A factor that influences the clarity of the simulated sky.
- [horizonElevation](horizonelevation.md): The angle, in radians relative to center, below which to render the ground color.
