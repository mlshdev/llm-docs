> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/init(textures:normaltextures:size:timeperframe:)](https://developer.apple.com/documentation/spritekit/sktiledefinition/init(textures:normaltextures:size:timeperframe:))

# init(textures:normalTextures:size:timePerFrame:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with arrays of textures and normal textures for animation.

## Declaration

```swift
init(textures: [SKTexture], normalTextures: [SKTexture], size: CGSize, timePerFrame: CGFloat)
```

## Parameters

- `textures`: An array of textures to reference for the definition’s content.
- `normalTextures`: An array of textures to reference for generating normals to simulate 3D lighting.
- `size`: The size of the tile in points.
- `timePerFrame`: The duration, in seconds, that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating an Animated Tile

- [init(textures:size:timePerFrame:)](init%28textures_size_timeperframe_%29.md): Initializes a new tile definition with an array of textures for animation.

# initWithTextures:normalTextures:size:timePerFrame: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with arrays of textures and normal textures for animation.

## Declaration

```objectivec
- (instancetype) initWithTextures:(NSArray<SKTexture *> *) textures normalTextures:(NSArray<SKTexture *> *) normalTextures size:(CGSize) size timePerFrame:(CGFloat) timePerFrame;
```

## Parameters

- `textures`: An array of textures to reference for the definition’s content.
- `normalTextures`: An array of textures to reference for generating normals to simulate 3D lighting.
- `size`: The size of the tile in points.
- `timePerFrame`: The duration, in seconds, that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating an Animated Tile

- [tileDefinitionWithTextures:normalTextures:size:timePerFrame:](tiledefinitionwithtextures_normaltextures_size_timeperframe_.md)
- [initWithTextures:size:timePerFrame:](init%28textures_size_timeperframe_%29.md): Initializes a new tile definition with an array of textures for animation.
- [tileDefinitionWithTextures:size:timePerFrame:](tiledefinitionwithtextures_size_timeperframe_.md)
