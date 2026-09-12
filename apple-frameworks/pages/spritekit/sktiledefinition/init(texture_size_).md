> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/init(texture:size:)](https://developer.apple.com/documentation/spritekit/sktiledefinition/init(texture:size:))

# init(texture:size:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition of a specified size with a single texture.

## Declaration

```swift
init(texture: SKTexture, size: CGSize)
```

## Parameters

- `texture`: The texture to reference for the definition’s content.
- `size`: The size of the tile in points.

<a id="return-value"></a>

## Return Value

A new tile definition.

# initWithTexture:size: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition of a specified size with a single texture.

## Declaration

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture size:(CGSize) size;
```

## Parameters

- `texture`: The texture to reference for the definition’s content.
- `size`: The size of the tile in points.

<a id="return-value"></a>

## Return Value

A new tile definition.

## See Also

### Creating a Tile with a Size

- [tileDefinitionWithTexture:size:](tiledefinitionwithtexture_size_.md)
