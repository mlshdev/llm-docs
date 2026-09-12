> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sktiledefinition/textures](https://developer.apple.com/documentation/spritekit/sktiledefinition/textures)

# textures (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of [SKTexture](../sktexture.md) objects that defines the tile definition object’s content.

## Declaration

```swift
var textures: [SKTexture] { get set }
```

<a id="Discussion"></a>

## Discussion

If the tile is non-animated, this will be an array containing one textures.

## See Also

### Configure Animated Tile Properties

- [normalTextures](normaltextures.md): An array of [SKTexture](../sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.
- [timePerFrame](timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.

# textures (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

An array of [SKTexture](../sktexture.md) objects that defines the tile definition object’s content.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<SKTexture *> * textures;
```

<a id="Discussion"></a>

## Discussion

If the tile is non-animated, this will be an array containing one textures.

## See Also

### Configure Animated Tile Properties

- [normalTextures](normaltextures.md): An array of [SKTexture](../sktexture.md) objects used to generate the normals for the tile to simulate 3D lighting.
- [timePerFrame](timeperframe.md): The duration, in seconds, that each texture in the textures array is displayed before switching to the next texture in the sequence.
