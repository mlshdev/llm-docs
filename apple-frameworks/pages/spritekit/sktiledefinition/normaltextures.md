> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/normaltextures](https://developer.apple.com/documentation/spritekit/sktiledefinition/normaltextures)

# normalTextures (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of [SKTexture](../sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.

## Declaration

```swift
var normalTextures: [SKTexture] { get set }
```

<a id="Discussion"></a>

## Discussion

If the tile is non-animated, this will be an array containing one texture.

## See Also

### Configure Animated Tile Properties

- [textures](textures.md): An array of [SKTexture](../sktexture.md) objects that defines the tile definition object’s content.
- [timePerFrame](timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.

# normalTextures (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of [SKTexture](../sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<SKTexture *> * normalTextures;
```

<a id="Discussion"></a>

## Discussion

If the tile is non-animated, this will be an array containing one texture.

## See Also

### Configure Animated Tile Properties

- [textures](textures.md): An array of [SKTexture](../sktexture.md) objects that defines the tile definition object’s content.
- [timePerFrame](timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.
