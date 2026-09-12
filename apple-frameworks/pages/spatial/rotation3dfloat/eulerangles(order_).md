> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/eulerangles(order:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/eulerangles(order:))

# eulerAngles(order:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func eulerAngles(order: __SPEulerAngleOrder) -> EulerAnglesFloat
```

## Parameters

- `order`: The Euler angle ordering.

<a id="return-value"></a>

## Return Value

A rotation structure.

<a id="discussion"></a>

## Discussion

Returns the Euler angles, in radians, from the specified rotation structure.

# SPRotation3DFloatGetEulerAngles (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPEulerAnglesFloat SPRotation3DFloatGetEulerAngles(SPRotation3DFloat rotation, SPEulerAngleOrder order);
```

## Parameters

- `rotation`: The source rotation structure.
- `order`: The Euler angle ordering.

<a id="return-value"></a>

## Return Value

A rotation structure.

<a id="discussion"></a>

## Discussion

Returns the Euler angles, in radians, from the specified rotation structure.
