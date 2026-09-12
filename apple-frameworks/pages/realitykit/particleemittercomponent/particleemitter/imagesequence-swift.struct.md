> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/particleemittercomponent/particleemitter/imagesequence-swift.struct](https://developer.apple.com/documentation/realitykit/particleemittercomponent/particleemitter/imagesequence-swift.struct)

# ParticleEmitterComponent.ParticleEmitter.ImageSequence

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

Structure used to define properties of the sprite sheet, used by imageSequence.

## Declaration

```swift
struct ImageSequence
```

## Topics

### Initializers

- [init()](imagesequence-swift.struct/init%28%29.md)

### Instance Properties

- [animationMode](imagesequence-swift.struct/animationmode.md): How the effect timeline is played.
- [columnCount](imagesequence-swift.struct/columncount.md): Number of columns in the sprite sheet.
- [frameRate](imagesequence-swift.struct/framerate.md): Number of sprite sheet frames to play per second.
- [frameRateVariation](imagesequence-swift.struct/frameratevariation.md): Defines a plus/minus range (in frames per second) from which a value is randomly selected to offset `frameRate`.
- [initialFrame](imagesequence-swift.struct/initialframe.md): First frame of the sprite sheet animation.
- [initialFrameVariation](imagesequence-swift.struct/initialframevariation.md): Defines a plus/minus range (in frames) from which a value is randomly selected to offset `initialFrame`.
- [rowCount](imagesequence-swift.struct/rowcount.md): Number of rows in the sprite sheet.

### Enumerations

- [ParticleEmitterComponent.ParticleEmitter.ImageSequence.AnimationRepeatMode](imagesequence-swift.struct/animationrepeatmode.md): Options for how the effect timeline is played, used by the animationMode property.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
