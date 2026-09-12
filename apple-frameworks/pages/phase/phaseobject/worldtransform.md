> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/worldtransform](https://developer.apple.com/documentation/phase/phaseobject/worldtransform)

# worldTransform (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A matrix, in scene coordinates, that determines the object’s pose in the scene.

## Declaration

```swift
var worldTransform: simd_float4x4 { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this property requires orthogonal basis vectors and uniform scale.

The framework interprets the transform’s position values in a right-handed coordinate system, where the *Y* axis extends upward and and the negative *Z* axis extends forward.

## See Also

### Defining a Pose

- [transform](transform.md): A matrix, in local coordinates, that determines the object’s pose in the scene.

# worldTransform (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A matrix, in scene coordinates, that determines the object’s pose in the scene.

## Declaration

```objectivec
@property (nonatomic, assign) simd_float4x4 worldTransform;
```

<a id="Discussion"></a>

## Discussion

The value of this property requires orthogonal basis vectors and uniform scale.

The framework interprets the transform’s position values in a right-handed coordinate system, where the *Y* axis extends upward and and the negative *Z* axis extends forward.

## See Also

### Defining a Pose

- [transform](transform.md): A matrix, in local coordinates, that determines the object’s pose in the scene.
