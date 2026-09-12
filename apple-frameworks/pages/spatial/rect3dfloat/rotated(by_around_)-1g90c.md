> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/rotated(by:around:)-1g90c](https://developer.apple.com/documentation/spatial/rect3dfloat/rotated(by:around:)-1g90c)

# rotated(by:around:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func rotated(by rotation: Rotation3DFloat, around pivot: Point3DFloat) -> Rect3DFloat
```

## Parameters

- `rotation`: The rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s rotated by a rotation around a specified pivot.

# SPRect3DFloatRotateAroundPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRect3DFloat SPRect3DFloatRotateAroundPoint(SPRect3DFloat rect, SPRotation3DFloat rotation, SPPoint3DFloat pivot);
```

## Parameters

- `rect`: The source rectangle.
- `rotation`: The rotation.
- `pivot`: The center of rotation.

<a id="return-value"></a>

## Return Value

A point that’s rotated by the specified rotation.

<a id="discussion"></a>

## Discussion

Returns a rectangle that’s rotated by a rotation around a specified pivot.
