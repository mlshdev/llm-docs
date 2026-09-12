> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/bindtarget](https://developer.apple.com/documentation/realitykit/sampledanimation/bindtarget)

# bindTarget

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A textual name that identifies the particular property that animates.

## Declaration

```swift
var bindTarget: BindTarget { get set }
```

<a id="discussion"></a>

## Discussion

The property name is a key path. For more information on key paths, see [Key-Path Expressions](https://developer.apple.com/documentation/swift/key-path-expressions).

## See Also

### Configuring the animation

- [name](name.md): A textual name for the animation.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [jointNames](jointnames.md): Conforms when `Value` is `JointTransforms`. The names of the joints to animate.
- [isRotationAnimated](isrotationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes rotational changes in the entity’s transform.
- [isScaleAnimated](isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes changes in the entity’s size.
- [isTranslationAnimated](istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes translational changes in the entity’s transform.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
- [tweenMode](tweenmode.md): An option that determines how animation frames transition.
