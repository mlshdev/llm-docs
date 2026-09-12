> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/imagesequencecolumncount](https://developer.apple.com/documentation/scenekit/scnparticlesystem/imagesequencecolumncount)

# imageSequenceColumnCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The number of columns for treating the particle image as a grid of animation frames.

## Declaration

```swift
var imageSequenceColumnCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925). Then use this property and the [imageSequenceRowCount](imagesequencerowcount.md) property to specify the arrangement of frames in the image, and the [imageSequenceInitialFrame](imagesequenceinitialframe.md) and [imageSequenceFrameRate](imagesequenceframerate.md) properties to define animation timing.

The default value is `1`. If the [imageSequenceRowCount](imagesequencerowcount.md) value is also `1` (the default), this specifies no animation for particle images.

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.

# imageSequenceColumnCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The number of columns for treating the particle image as a grid of animation frames.

## Declaration

```objectivec
@property (nonatomic) NSUInteger imageSequenceColumnCount;
```

<a id="Discussion"></a>

## Discussion

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925). Then use this property and the [imageSequenceRowCount](imagesequencerowcount.md) property to specify the arrangement of frames in the image, and the [imageSequenceInitialFrame](imagesequenceinitialframe.md) and [imageSequenceFrameRate](imagesequenceframerate.md) properties to define animation timing.

The default value is `1`. If the [imageSequenceRowCount](imagesequencerowcount.md) value is also `1` (the default), this specifies no animation for particle images.

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrame](imagesequenceinitialframe.md): The index of the first frame in a particle image animation. Animatable.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.
