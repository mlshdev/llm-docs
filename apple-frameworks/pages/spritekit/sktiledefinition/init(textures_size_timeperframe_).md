> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/init(textures:size:timeperframe:)](https://developer.apple.com/documentation/spritekit/sktiledefinition/init(textures:size:timeperframe:))

# init(textures:size:timePerFrame:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with an array of textures for animation.

## Declaration

```swift
init(textures: [SKTexture], size: CGSize, timePerFrame: CGFloat)
```

## Parameters

- `textures`: An array of textures to reference for the definition’s size and content.
- `size`: The size of the tile in points.
- `timePerFrame`: The duration, in seconds, that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating an Animated Tile

- [init(textures:normalTextures:size:timePerFrame:)](init%28textures_normaltextures_size_timeperframe_%29.md): Initializes a new tile definition with arrays of textures and normal textures for animation.

# initWithTextures:size:timePerFrame: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with an array of textures for animation.

## Declaration

```objectivec
- (instancetype) initWithTextures:(NSArray<SKTexture *> *) textures size:(CGSize) size timePerFrame:(CGFloat) timePerFrame;
```

## Parameters

- `textures`: An array of textures to reference for the definition’s size and content.
- `size`: The size of the tile in points.
- `timePerFrame`: The duration, in seconds, that each texture is displayed.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating an Animated Tile

- [initWithTextures:normalTextures:size:timePerFrame:](init%28textures_normaltextures_size_timeperframe_%29.md): Initializes a new tile definition with arrays of textures and normal textures for animation.
- [tileDefinitionWithTextures:normalTextures:size:timePerFrame:](tiledefinitionwithtextures_normaltextures_size_timeperframe_.md)
- [tileDefinitionWithTextures:size:timePerFrame:](tiledefinitionwithtextures_size_timeperframe_.md)
