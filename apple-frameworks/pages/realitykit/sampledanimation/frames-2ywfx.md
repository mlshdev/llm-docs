> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/sampledanimation/frames-2ywfx](https://developer.apple.com/documentation/realitykit/sampledanimation/frames-2ywfx)

# frames

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An array of floating-point quadruples in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.

## Declaration

```swift
var frames: [SIMD4<Float>] { get set }
```

<a id="discussion"></a>

## Discussion

This array contains sequential values for the animated property when [bindTarget](../animationdefinition/bindtarget.md) is an array of [simd](../../accelerate/simd-library.md) floating-point quadruplets.

## See Also

### Defining frames data

- [frames](frames-4eeex.md): Conforms when `Value` is `JointTransforms`. An array of joint transforms in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.
- [frames](frames-4qotl.md): Conforms when `Value` is `Transform`. An array of transforms in which each element represents a discrete state of the target entity at a given point in the animation’s timeline.
- [frames](frames-2hobp.md): Conforms when `Value` is `Double`. An array of double-precision values in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](frames-2j4nj.md): Conforms when `Value` is `Float`. An array of floating-point values in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](frames-2h6tu.md): Conforms when `Value` is `simd_quatf`. An array of quaternions in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](frames-9luwf.md): Conforms when `Value` is `SIMD2<Float>`. An array of floating-point pairs in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
- [frames](frames-1zxo.md): Conforms when `Value` is `SIMD3<Float>`. An array of floating-point triplets in which each element represents a discrete state of the animated property at a given point in the animation’s timeline.
