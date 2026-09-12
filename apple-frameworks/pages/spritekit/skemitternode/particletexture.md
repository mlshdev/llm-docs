> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particletexture](https://developer.apple.com/documentation/spritekit/skemitternode/particletexture)

# particleTexture (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The texture to use to render a particle.

## Declaration

```swift
var particleTexture: SKTexture? { get set }
```

<a id="Discussion"></a>

## Discussion

A particle is rendered as if it were a [SKSpriteNode](../skspritenode.md) object. The default value is `nil`, which means a single-color rectangle is used to draw the particle. If a non-`nil` value is specified, then the texture is colorized and used to draw particles.

## See Also

### Changing a Particle’s Source Image and Size

- [particleSize](particlesize.md): The starting size of each particle.

# particleTexture (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The texture to use to render a particle.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) SKTexture * particleTexture;
```

<a id="Discussion"></a>

## Discussion

A particle is rendered as if it were a [SKSpriteNode](../skspritenode.md) object. The default value is `nil`, which means a single-color rectangle is used to draw the particle. If a non-`nil` value is specified, then the texture is colorized and used to draw particles.

## See Also

### Changing a Particle’s Source Image and Size

- [particleSize](particlesize.md): The starting size of each particle.
