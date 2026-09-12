> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skphysicsbody/init(texture:size:)](https://developer.apple.com/documentation/spritekit/skphysicsbody/init(texture:size:))

# init(texture:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a physics body from the contents of a texture.

## Declaration

```swift
init(texture: SKTexture, size: CGSize)
```

## Parameters

- `texture`: The texture to convert into a physics body.
- `size`: The size of the physics body to return.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

<a id="Discussion"></a>

## Discussion

Use this method when your sprite has a shape that you want replicated in its physics body. The texture is scaled to the new size and then analyzed. A new physics body is created that includes all of the texels in the texture that have a nonzero alpha value. The shape of this body attempts to strike a good balance between performance and accuracy. For example, fine details may be ignored if keeping them would cause a significant performance penalty.

## See Also

### Creating a Body from a Texture

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md): Shape a physics body to your graphics for the right blend of collision accuracy and performance.
- [init(texture:alphaThreshold:size:)](init%28texture_alphathreshold_size_%29.md): Creates a physics body from the contents of a texture, capturing only the texels that exceed a specified transparency value.

# bodyWithTexture:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Creates a physics body from the contents of a texture.

## Declaration

```objectivec
+ (SKPhysicsBody *) bodyWithTexture:(SKTexture *) texture size:(CGSize) size;
```

## Parameters

- `texture`: The texture to convert into a physics body.
- `size`: The size of the physics body to return.

<a id="return-value"></a>

## Return Value

A new volume-based physics body.

<a id="Discussion"></a>

## Discussion

Use this method when your sprite has a shape that you want replicated in its physics body. The texture is scaled to the new size and then analyzed. A new physics body is created that includes all of the texels in the texture that have a nonzero alpha value. The shape of this body attempts to strike a good balance between performance and accuracy. For example, fine details may be ignored if keeping them would cause a significant performance penalty.

## See Also

### Creating a Body from a Texture

- [Shaping a Physics Body to Match a Node’s Graphics](../shaping-a-physics-body-to-match-a-node-s-graphics.md): Shape a physics body to your graphics for the right blend of collision accuracy and performance.
- [bodyWithTexture:alphaThreshold:size:](init%28texture_alphathreshold_size_%29.md): Creates a physics body from the contents of a texture, capturing only the texels that exceed a specified transparency value.
