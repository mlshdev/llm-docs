> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/imagesequenceframeratevariation](https://developer.apple.com/documentation/scenekit/scnparticlesystem/imagesequenceframeratevariation)

# imageSequenceFrameRateVariation (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The range, in frames per second, of randomized frame rates for particle image animation. Animatable.

## Declaration

```swift
var imageSequenceFrameRateVariation: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [imageSequenceFrameRate](imagesequenceframerate.md) property. SceneKit randomly adjusts the animation speed for each particle by up to half the [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md) value. For example, if the [imageSequenceFrameRate](imagesequenceframerate.md) value is `10.0` frames per second and the [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md) value is `10.0` seconds, each particle animates at a random rate between `5.0` and `15.0` frames per second.

The default value is `0.0` frames per second, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.

# imageSequenceFrameRateVariation (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The range, in frames per second, of randomized frame rates for particle image animation. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat imageSequenceFrameRateVariation;
```

<a id="Discussion"></a>

## Discussion

Setting a nonzero value for this property randomizes the effect of the [imageSequenceFrameRate](imagesequenceframerate.md) property. SceneKit randomly adjusts the animation speed for each particle by up to half the [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md) value. For example, if the [imageSequenceFrameRate](imagesequenceframerate.md) value is `10.0` frames per second and the [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md) value is `10.0` seconds, each particle animates at a random rate between `5.0` and `15.0` frames per second.

The default value is `0.0` frames per second, specifying no randomization.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.
