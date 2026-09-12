> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/skeletalanimationoperation/rootmotionoptions](https://developer.apple.com/documentation/realitykit/sampledanimation/skeletalanimationoperation/rootmotionoptions)

# SampledAnimation.SkeletalAnimationOperation.RootMotionOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Options for controlling root motion extraction.

## Declaration

```swift
struct RootMotionOptions
```

## Topics

### Extracting translation

- [extractAll](rootmotionoptions/extractall.md): All motion is extracted and returned.
- [translationX](rootmotionoptions/translationx.md): Translation X is extracted.
- [translationY](rootmotionoptions/translationy.md): Translation Y is extracted.
- [translationZ](rootmotionoptions/translationz.md): Translation Z is extracted.
- [translationXZ](rootmotionoptions/translationxz.md): Translation XZ is extracted (common for ground-based locomotion).

### Extracting rotation

- [rotationX](rootmotionoptions/rotationx.md): Rotation X is extracted.
- [rotationY](rootmotionoptions/rotationy.md): Rotation Y is extracted.
- [rotationZ](rootmotionoptions/rotationz.md): Rotation Z is extracted.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Extracting root motion

- [extractRootMotion(jointName:options:lockPosition:)](extractrootmotion%28jointname_options_lockposition_%29.md): Extracts root motion from the specified joint.
