> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklightnode/lightcolor](https://developer.apple.com/documentation/spritekit/sklightnode/lightcolor)

# lightColor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The diffuse and specular color of the light source.

## Declaration

```swift
var lightColor: UIColor { get set }
```

```swift
var lightColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is white.

If you are using custom shaders, you can substitute an [SKUniform](../skuniform.md) object instead.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.

# lightColor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The diffuse and specular color of the light source.

## Declaration

```objectivec
@property (nonatomic) UIColor * lightColor;
```

```objectivec
@property (nonatomic) NSColor * lightColor;
```

<a id="Discussion"></a>

## Discussion

The default value is white.

If you are using custom shaders, you can substitute an [SKUniform](../skuniform.md) object instead.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [shadowColor](shadowcolor.md): The color of any shadow cast by a sprite.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.
