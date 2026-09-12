> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/imagesequenceanimationmode](https://developer.apple.com/documentation/scenekit/scnparticlesystem/imagesequenceanimationmode)

# imageSequenceAnimationMode (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The animation mode for particle image animation.

## Declaration

```swift
var imageSequenceAnimationMode: SCNParticleImageSequenceAnimationMode { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is [SCNParticleImageSequenceAnimationMode.repeat](../scnparticleimagesequenceanimationmode/repeat.md), indicating that the image sequence loops continuously. For details on other values, see [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.

# imageSequenceAnimationMode (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The animation mode for particle image animation.

## Declaration

```objectivec
@property (nonatomic) SCNParticleImageSequenceAnimationMode imageSequenceAnimationMode;
```

<a id="Discussion"></a>

## Discussion

The default value is [SCNParticleImageSequenceAnimationModeRepeat](../scnparticleimagesequenceanimationmode/repeat.md), indicating that the image sequence loops continuously. For details on other values, see [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.
