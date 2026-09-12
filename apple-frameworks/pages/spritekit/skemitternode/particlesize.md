> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skemitternode/particlesize](https://developer.apple.com/documentation/spritekit/skemitternode/particlesize)

# particleSize (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The starting size of each particle.

## Declaration

```swift
var particleSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md). If set to the default, the size of the texture stored in the [particleTexture](particletexture.md) property is used to determine the size of a particle. If a texture has not been assigned, you must set this property to a non-empty size.

## See Also

### Changing a Particle’s Source Image and Size

- [particleTexture](particletexture.md): The texture to use to render a particle.

# particleSize (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The starting size of each particle.

## Declaration

```objectivec
@property (nonatomic) CGSize particleSize;
```

<a id="Discussion"></a>

## Discussion

The default value is [CGSizeZero](../../coregraphics/cgsizezero.md). If set to the default, the size of the texture stored in the [particleTexture](particletexture.md) property is used to determine the size of a particle. If a texture has not been assigned, you must set this property to a non-empty size.

## See Also

### Changing a Particle’s Source Image and Size

- [particleTexture](particletexture.md): The texture to use to render a particle.
