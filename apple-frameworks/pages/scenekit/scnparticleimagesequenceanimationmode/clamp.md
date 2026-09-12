> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnparticleimagesequenceanimationmode/clamp](https://developer.apple.com/documentation/scenekit/scnparticleimagesequenceanimationmode/clamp)

# SCNParticleImageSequenceAnimationMode.clamp (Swift)

**Framework:** SceneKit  
**Kind:** Case  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The animation stops after displaying all of its images.

## Declaration

```swift
case clamp
```

<a id="Discussion"></a>

## Discussion

After animation ends, the particle continues to display the last image of the sequence. (Or the first, if the animation is playing in reverse.)

## See Also

### Constants

- [SCNParticleImageSequenceAnimationMode.repeat](repeat.md): The animation loops after displaying all of its images.
- [SCNParticleImageSequenceAnimationMode.autoReverse](autoreverse.md): After the animation displays all of its images, it plays again in reverse order.

# SCNParticleImageSequenceAnimationModeClamp (Objective-C)

**Framework:** SceneKit  
**Kind:** Enumeration Case  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS · watchOS

The animation stops after displaying all of its images.

## Declaration

```objectivec
SCNParticleImageSequenceAnimationModeClamp
```

<a id="Discussion"></a>

## Discussion

After animation ends, the particle continues to display the last image of the sequence. (Or the first, if the animation is playing in reverse.)

## See Also

### Constants

- [SCNParticleImageSequenceAnimationModeRepeat](repeat.md): The animation loops after displaying all of its images.
- [SCNParticleImageSequenceAnimationModeAutoReverse](autoreverse.md): After the animation displays all of its images, it plays again in reverse order.
