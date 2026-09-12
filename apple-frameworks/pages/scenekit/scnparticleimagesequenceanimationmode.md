> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleimagesequenceanimationmode](https://developer.apple.com/documentation/scenekit/scnparticleimagesequenceanimationmode)

# SCNParticleImageSequenceAnimationMode (Swift)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md) property.

## Declaration

```swift
enum SCNParticleImageSequenceAnimationMode
```

## Topics

### Constants

- [SCNParticleImageSequenceAnimationMode.repeat](scnparticleimagesequenceanimationmode/repeat.md): The animation loops after displaying all of its images.
- [SCNParticleImageSequenceAnimationMode.clamp](scnparticleimagesequenceanimationmode/clamp.md): The animation stops after displaying all of its images.
- [SCNParticleImageSequenceAnimationMode.autoReverse](scnparticleimagesequenceanimationmode/autoreverse.md): After the animation displays all of its images, it plays again in reverse order.

### Initializers

- [init(rawValue:)](scnparticleimagesequenceanimationmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Animating Particle Images

- [imageSequenceRowCount](scnparticlesystem/imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](scnparticlesystem/imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](scnparticlesystem/imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](scnparticlesystem/imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](scnparticlesystem/imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](scnparticlesystem/imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md): The animation mode for particle image animation.

# SCNParticleImageSequenceAnimationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md) property.

## Declaration

```objectivec
enum SCNParticleImageSequenceAnimationMode : NSInteger;
```

## Topics

### Constants

- [SCNParticleImageSequenceAnimationModeRepeat](scnparticleimagesequenceanimationmode/repeat.md): The animation loops after displaying all of its images.
- [SCNParticleImageSequenceAnimationModeClamp](scnparticleimagesequenceanimationmode/clamp.md): The animation stops after displaying all of its images.
- [SCNParticleImageSequenceAnimationModeAutoReverse](scnparticleimagesequenceanimationmode/autoreverse.md): After the animation displays all of its images, it plays again in reverse order.

## See Also

### Animating Particle Images

- [imageSequenceRowCount](scnparticlesystem/imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](scnparticlesystem/imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](scnparticlesystem/imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](scnparticlesystem/imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](scnparticlesystem/imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](scnparticlesystem/imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](scnparticlesystem/imagesequenceanimationmode.md): The animation mode for particle image animation.
