> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/init(texture:)](https://developer.apple.com/documentation/spritekit/sktiledefinition/init(texture:))

# init(texture:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with a single texture.

## Declaration

```swift
init(texture: SKTexture)
```

## Parameters

- `texture`: The texture to reference for the definition’s size and content.

<a id="return-value"></a>

## Return Value

A new tile definition.

<a id="Discussion"></a>

## Discussion

The size of the newly created tile definition will be the same as the texture used to initialize it.

# initWithTexture: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Initializes a new tile definition with a single texture.

## Declaration

```objectivec
- (instancetype) initWithTexture:(SKTexture *) texture;
```

## Parameters

- `texture`: The texture to reference for the definition’s size and content.

<a id="return-value"></a>

## Return Value

A new tile definition.

<a id="Discussion"></a>

## Discussion

The size of the newly created tile definition will be the same as the texture used to initialize it.

## See Also

### Creating a Tile with a Texture

- [tileDefinitionWithTexture:](tiledefinitionwithtexture_.md)
