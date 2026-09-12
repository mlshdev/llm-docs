> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/imagesequenceinitialframevariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/imagesequenceinitialframevariation)

# imageSequenceInitialFrameVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range of randomized initial frames for particle image animation. Animatable.

## Declaration

```swift
var imageSequenceInitialFrameVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [imageSequenceInitialFrame](imagesequenceinitialframe.md) property. SceneKit randomly adjusts the initial animation frame for each particle by up to half the [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md) value. For example, if the [imageSequenceInitialFrame](imagesequenceinitialframe.md) value is `10.0` and the [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md) value is `5.0`, each particle randomly begins on a frame between frame 7.5 and frame 12.5 of the image sequence animation.

When you use image sequences for particles, SceneKit interpolates between frames of animation, so a fractional value (either for this property or for either endpoint of the range it determines) results in a partial fade between two animation frames.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.

# imageSequenceInitialFrameVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range of randomized initial frames for particle image animation. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat imageSequenceInitialFrameVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [imageSequenceInitialFrame](imagesequenceinitialframe.md) property. SceneKit randomly adjusts the initial animation frame for each particle by up to half the [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md) value. For example, if the [imageSequenceInitialFrame](imagesequenceinitialframe.md) value is `10.0` and the [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md) value is `5.0`, each particle randomly begins on a frame between frame 7.5 and frame 12.5 of the image sequence animation.

When you use image sequences for particles, SceneKit interpolates between frames of animation, so a fractional value (either for this property or for either endpoint of the range it determines) results in a partial fade between two animation frames.

The default value is `0.0` seconds, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.
