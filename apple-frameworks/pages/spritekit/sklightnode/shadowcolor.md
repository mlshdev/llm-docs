> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sklightnode/shadowcolor](https://developer.apple.com/documentation/spritekit/sklightnode/shadowcolor)

# shadowColor (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The color of any shadow cast by a sprite.

## Declaration

```swift
var shadowColor: UIColor { get set }
```

```swift
var shadowColor: NSColor { get set }
```

<a id="Discussion"></a>

## Discussion

The default color is black with an opacity (alpha) of `0.5`.

When lighting is calculated, shadows are created as if a ray was cast out from the light node’s position. If a sprite casts a shadow, the rays are blocked when they intersect with the sprite’s physics body. Otherwise, the sprite’s texture is used to generate a mask, and any pixel in the sprite node’s texture that has an alpha value that is nonzero blocks the light.

Shadows may be cast on content that is rendered prior to the sprite, even if that content does not otherwise interact with the light.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.

# shadowColor (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

The color of any shadow cast by a sprite.

## Declaration

```objectivec
@property (nonatomic) UIColor * shadowColor;
```

```objectivec
@property (nonatomic) NSColor * shadowColor;
```

<a id="Discussion"></a>

## Discussion

The default color is black with an opacity (alpha) of `0.5`.

When lighting is calculated, shadows are created as if a ray was cast out from the light node’s position. If a sprite casts a shadow, the rays are blocked when they intersect with the sprite’s physics body. Otherwise, the sprite’s texture is used to generate a mask, and any pixel in the sprite node’s texture that has an alpha value that is nonzero blocks the light.

Shadows may be cast on content that is rendered prior to the sprite, even if that content does not otherwise interact with the light.

## See Also

### Configuring the Lighting Properties

- [ambientColor](ambientcolor.md): The ambient color of the light.
- [lightColor](lightcolor.md): The diffuse and specular color of the light source.
- [falloff](falloff.md): The exponent for the rate of decay of the light source.
