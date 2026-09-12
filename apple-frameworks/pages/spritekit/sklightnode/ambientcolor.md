> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklightnode/ambientcolor](https://developer.apple.com/documentation/spritekit/sklightnode/ambientcolor)

# ambientColor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The ambient color of the light.

## Declaration

```swift
var ambientColor: UIColor { get set }
```

```swift
var ambientColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The alpha value of the color is ignored. The default color is black, meaning that the light does not have an ambient component. The ambient component of the light is not affected by the light’s [falloff](falloff.md) property, nor is it affected by any normal map ([normalTexture](../skspritenode/normaltexture.md)) on the sprite node.

## See Also

### Configuring the Lighting Properties

- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.

# ambientColor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The ambient color of the light.

## Declaration

```objectivec
@property (nonatomic) UIColor * ambientColor;
```

```objectivec
@property (nonatomic) NSColor * ambientColor;
```

<a id="Discussion"></a>

## Discussion

The alpha value of the color is ignored. The default color is black, meaning that the light does not have an ambient component. The ambient component of the light is not affected by the light’s [falloff](falloff.md) property, nor is it affected by any normal map ([normalTexture](../skspritenode/normaltexture.md)) on the sprite node.

## See Also

### Configuring the Lighting Properties

- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.
