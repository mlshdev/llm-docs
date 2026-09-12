> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklightnode/falloff](https://developer.apple.com/documentation/spritekit/sklightnode/falloff)

# falloff (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The exponent for the rate of decay of the light source.

## Declaration

```swift
var falloff: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means the light decays linearly with distance. The value must be a positive number less than or equal to `1.0`.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.

# falloff (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The exponent for the rate of decay of the light source.

## Declaration

```objectivec
@property (nonatomic) CGFloat falloff;
```

<a id="Discussion"></a>

## Discussion

The default value is `1.0`, which means the light decays linearly with distance. The value must be a positive number less than or equal to `1.0`.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.
