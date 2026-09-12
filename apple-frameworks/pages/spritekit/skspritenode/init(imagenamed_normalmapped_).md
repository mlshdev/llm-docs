> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skspritenode/init(imagenamed:normalmapped:)](https://developer.apple.com/documentation/spritekit/skspritenode/init(imagenamed:normalmapped:))

# init(imageNamed:normalMapped:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.

## Declaration

```swift
convenience init(imageNamed name: String, normalMapped generateNormalMap: Bool)
```

## Parameters

- `name`: The name of an image file stored in the app bundle.
- `generateNormalMap`: If [true](https://developer.apple.com/documentation/swift/true), a normal map is generated from the image texture without applying any filter to it (SKTextureNormalMapFilteringTypeNone). If [false](https://developer.apple.com/documentation/swift/false), no normal map is generated (matching the behavior of the [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md) class method).

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The normal map is used only when lighting is enabled in the scene. For more information, see [SKSpriteNode](../skspritenode.md) and [SKLightNode](../sklightnode.md).

## See Also

### Creating a Sprite from an Image Filename

- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [init(imageNamed:)](init%28imagenamed_%29.md): Initializes a textured sprite using an image file.

# spriteNodeWithImageNamed:normalMapped: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Initializes a textured sprite using an image file, optionally adding a normal map to simulate 3D lighting.

## Declaration

```objectivec
+ (instancetype) spriteNodeWithImageNamed:(NSString *) name normalMapped:(BOOL) generateNormalMap;
```

## Parameters

- `name`: The name of an image file stored in the app bundle.
- `generateNormalMap`: If [true](https://developer.apple.com/documentation/swift/true), a normal map is generated from the image texture without applying any filter to it (SKTextureNormalMapFilteringTypeNone). If [false](https://developer.apple.com/documentation/swift/false), no normal map is generated (matching the behavior of the [spriteNodeWithImageNamed:](spritenodewithimagenamed_.md) class method).

<a id="return-value"></a>

## Return Value

A newly initialized sprite object.

<a id="Discussion"></a>

## Discussion

The normal map is used only when lighting is enabled in the scene. For more information, see [SKSpriteNode](../skspritenode.md) and [SKLightNode](../sklightnode.md).

## See Also

### Creating a Sprite from an Image Filename

- [Getting Started with Sprite Nodes](../getting-started-with-sprite-nodes.md): Learn the basics about using images, also known as sprites, with SpriteKit.
- [initWithImageNamed:](init%28imagenamed_%29.md): Initializes a textured sprite using an image file.
