> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/phase/phaseobject/transform](https://developer.apple.com/documentation/phase/phaseobject/transform)

# transform (Swift)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A matrix, in local coordinates, that determines the object’s pose in the scene.

## Declaration

```swift
var transform: simd_float4x4 { get set }
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The value of this property requires orthogonal basis vectors and uniform scale.

The framework interprets the transform’s position values in a right-handed coordinate system, where the *Y* axis extends upward and and the negative *Z* axis extends forward.

<a id="Set-an-Objects-Position"></a>

### Set an Object’s Position

An object positions in the 3D scene by the transformʼs first 3 elements of the last column. The following code sets an object’s position to `(0,0,-6)`, which is 6 meters in front of the world origin `(0,0,0)`.

```swift
var boardPieceTransform: simd_float4x4 = matrix_identity_float4x4
boardPieceTransform.columns.3.z -= 6.0
boardPieceSource.transform = boardPieceTransform
```

Set the [unitsPerMeter](../phaseengine/unitspermeter.md) parameter to instruct PHASE to interpret [transform](transform.md) values in your app’s preferred unit of measurement.

## See Also

### Defining a Pose

- [worldTransform](worldtransform.md): A matrix, in scene coordinates, that determines the object’s pose in the scene.

# transform (Objective-C)

**Framework:** PHASE  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 17.0+ · visionOS 1.0+

A matrix, in local coordinates, that determines the object’s pose in the scene.

## Declaration

```objectivec
@property (nonatomic, assign) simd_float4x4 transform;
```

## Mentioned In

- [Playing sound from a location in a 3D scene](../playing-sound-from-a-location-in-a-3d-scene.md)

<a id="Discussion"></a>

## Discussion

The value of this property requires orthogonal basis vectors and uniform scale.

The framework interprets the transform’s position values in a right-handed coordinate system, where the *Y* axis extends upward and and the negative *Z* axis extends forward.

<a id="Set-an-Objects-Position"></a>

### Set an Object’s Position

An object positions in the 3D scene by the transformʼs first 3 elements of the last column. The following code sets an object’s position to `(0,0,-6)`, which is 6 meters in front of the world origin `(0,0,0)`.

```swift
var boardPieceTransform: simd_float4x4 = matrix_identity_float4x4
boardPieceTransform.columns.3.z -= 6.0
boardPieceSource.transform = boardPieceTransform
```

Set the [unitsPerMeter](../phaseengine/unitspermeter.md) parameter to instruct PHASE to interpret [transform](transform.md) values in your app’s preferred unit of measurement.

## See Also

### Defining a Pose

- [worldTransform](worldtransform.md): A matrix, in scene coordinates, that determines the object’s pose in the scene.
