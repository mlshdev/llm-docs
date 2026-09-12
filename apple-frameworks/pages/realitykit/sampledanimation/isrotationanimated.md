> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/isrotationanimated](https://developer.apple.com/documentation/realitykit/sampledanimation/isrotationanimated)

# isRotationAnimated

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether the animation observes rotational changes in the entity’s transform.

## Declaration

```swift
var isRotationAnimated: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If you set this property to `true`, the animation accommodates rotational differences in the entity’s transform by interpolating to the target rotation across the animation timeline.

## See Also

### Configuring the animation

- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [jointNames](jointnames.md): Conforms when `Value` is `JointTransforms`. The names of the joints to animate.
- [isScaleAnimated](isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes changes in the entity’s size.
- [isTranslationAnimated](istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation observes translational changes in the entity’s transform.
- [additive](additive.md): A Boolean value that indicates whether the animation builds on the current state of the target entity or resets the state before running.
- [tweenMode](tweenmode.md): An option that determines how animation frames transition.
