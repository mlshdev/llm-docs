> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/init(texture:normaltexture:size:)](https://developer.apple.com/documentation/spritekit/sktiledefinition/init(texture:normaltexture:size:))

# init(texture:normalTexture:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with a single texture and separate normal texture for simulating 3D lighting.

## Declaration

```swift
init(texture: SKTexture, normalTexture: SKTexture, size: CGSize)
```

## Parameters

- `texture`: The texture to reference for the definition’s content.
- `normalTexture`: The texture to reference for generating normals to simulate 3D lighting.
- `size`: The size of the tile in points.

<a id="return-value"></a>

## Return Value

A new tile definition.

# initWithTexture:normalTexture:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with a single texture and separate normal texture for simulating 3D lighting.

## Declaration

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture normalTexture:(SKTexture *) normalTexture size:(CGSize) size;
```

## Parameters

- `texture`: The texture to reference for the definition’s content.
- `normalTexture`: The texture to reference for generating normals to simulate 3D lighting.
- `size`: The size of the tile in points.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating a Tile with a Normal Texture

- [tileDefinitionWithTexture:normalTexture:size:](tiledefinitionwithtexture_normaltexture_size_.md)
