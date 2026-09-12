> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/isadditive](https://developer.apple.com/documentation/realitykit/fromtobyanimation/isadditive)

# isAdditive

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A Boolean value that indicates whether the animation blends additively with concurrent animations.

## Declaration

```swift
var isAdditive: Bool { get set }
```

## See Also

### Configuring the animation

- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [blendLayer](blendlayer.md): The order in which the framework composites the animation.
- [jointNames](jointnames.md): Conforms when `Value` is `JointTransforms`. Joint names that define the joints in the skeletal pose.
- [isScaleAnimated](isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether that animation interpolates changes to the target’s size.
- [isRotationAnimated](isrotationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates rotational changes.
- [isTranslationAnimated](istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates changes to the target object’s position.
