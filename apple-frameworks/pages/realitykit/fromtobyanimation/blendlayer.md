> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/fromtobyanimation/blendlayer](https://developer.apple.com/documentation/realitykit/fromtobyanimation/blendlayer)

# blendLayer

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

The order in which the framework composites the animation.

## Declaration

```swift
var blendLayer: Int32 { get set }
```

<a id="discussion"></a>

## Discussion

The framework applies multiple animations on the same target in ascending order of this property’s value. Animations in a lower layer run before animations in a higher layer. Animations that share the same value apply in the order that they execute.

## See Also

### Configuring the animation

- [name](name.md): A textual name for the animation.
- [bindTarget](bindtarget.md): A textual name that identifies the particular property that animates.
- [jointNames](jointnames.md): Conforms when `Value` is `JointTransforms`. Joint names that define the joints in the skeletal pose.
- [isScaleAnimated](isscaleanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether that animation interpolates changes to the target’s size.
- [isRotationAnimated](isrotationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates rotational changes.
- [isTranslationAnimated](istranslationanimated.md): Conforms when `Value` is `JointTransforms`. A Boolean value that indicates whether the animation interpolates changes to the target object’s position.
- [isAdditive](isadditive.md): A Boolean value that indicates whether the animation blends additively with concurrent animations.
