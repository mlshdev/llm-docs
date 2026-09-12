> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticlesystem/imagesequenceinitialframe](https://developer.apple.com/documentation/scenekit/scnparticlesystem/imagesequenceinitialframe)

# imageSequenceInitialFrame (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The index of the first frame in a particle image animation. Animatable.

## Declaration

```swift
var imageSequenceInitialFrame: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925). The total number of frames in an image sequence is the product of multiplying the [imageSequenceRowCount](imagesequencerowcount.md) and [imageSequenceColumnCount](imagesequencecolumncount.md) properties. Frames are numbered starting at zero, indicating the top left image in the grid.

When you use image sequences for particles, SceneKit interpolates between frames of animation, so a fractional value specifies a partial fade between two animation frames.

The default value is `0.0`, specifying that animation begins with the top left image in the grid.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.

# imageSequenceInitialFrame (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The index of the first frame in a particle image animation. Animatable.

## Declaration

```objectivec
@property (nonatomic) CGFloat imageSequenceInitialFrame;
```

<a id="Discussion"></a>

## Discussion

To specify a sequence of frames for animating each particle, arrange the frames as a grid in a single image, as shown in [Figure 1](https://developer.apple.com/documentation/scenekit/scnparticlesystem/1524153-particleimage#1965925). The total number of frames in an image sequence is the product of multiplying the [imageSequenceRowCount](imagesequencerowcount.md) and [imageSequenceColumnCount](imagesequencecolumncount.md) properties. Frames are numbered starting at zero, indicating the top left image in the grid.

When you use image sequences for particles, SceneKit interpolates between frames of animation, so a fractional value specifies a partial fade between two animation frames.

The default value is `0.0`, specifying that animation begins with the top left image in the grid.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Animating Particle Images

- [imageSequenceRowCount](imagesequencerowcount.md): The number of rows for treating the particle image as a grid of animation frames.
- [imageSequenceColumnCount](imagesequencecolumncount.md): The number of columns for treating the particle image as a grid of animation frames.
- [imageSequenceInitialFrameVariation](imagesequenceinitialframevariation.md): The range of randomized initial frames for particle image animation. Animatable.
- [imageSequenceFrameRate](imagesequenceframerate.md): The rate, in frames per second, of particle image animation. Animatable.
- [imageSequenceFrameRateVariation](imagesequenceframeratevariation.md): The range, in frames per second, of randomized frame rates for particle image animation. Animatable.
- [imageSequenceAnimationMode](imagesequenceanimationmode.md): The animation mode for particle image animation.
- [SCNParticleImageSequenceAnimationMode](../scnparticleimagesequenceanimationmode.md): Options for animating each particle with a sequence of images, used by the [imageSequenceAnimationMode](imagesequenceanimationmode.md) property.
