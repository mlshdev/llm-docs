> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arfaceanchor/lookatpoint](https://developer.apple.com/documentation/arkit/arfaceanchor/lookatpoint)

# lookAtPoint (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A position in face coordinate space estimating the direction of the face’s gaze.

## Declaration

```swift
var lookAtPoint: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

This vector abstracts from the [leftEyeTransform](lefteyetransform.md) and [rightEyeTransform](righteyetransform.md) matrices to estimate what point,  relative to the face, the user’s eyes are focused upon. For example:

- If the user is looking to the left, the vector has a positive x-axis component.
- If the user is focused on a nearby object, the vector’s length is shorter.
- If the user is focused on a faraway object, the vector’s length is longer.

## See Also

### Tracking Eye Movement

- [leftEyeTransform](lefteyetransform.md): A transform matrix indicating the position and orientation of the face’s left eye.
- [rightEyeTransform](righteyetransform.md): A transform matrix indicating the position and orientation of the face’s right eye.

# lookAtPoint (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

A position in face coordinate space estimating the direction of the face’s gaze.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) simd_float3 lookAtPoint;
```

<a id="Discussion"></a>

## Discussion

This vector abstracts from the [leftEyeTransform](lefteyetransform.md) and [rightEyeTransform](righteyetransform.md) matrices to estimate what point,  relative to the face, the user’s eyes are focused upon. For example:

- If the user is looking to the left, the vector has a positive x-axis component.
- If the user is focused on a nearby object, the vector’s length is shorter.
- If the user is focused on a faraway object, the vector’s length is longer.

## See Also

### Tracking Eye Movement

- [leftEyeTransform](lefteyetransform.md): A transform matrix indicating the position and orientation of the face’s left eye.
- [rightEyeTransform](righteyetransform.md): A transform matrix indicating the position and orientation of the face’s right eye.
