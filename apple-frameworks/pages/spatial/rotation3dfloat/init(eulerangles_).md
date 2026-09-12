> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/init(eulerangles:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/init(eulerangles:))

# init(eulerAngles:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(eulerAngles: EulerAnglesFloat)
```

## Parameters

- `eulerAngles`: The source Euler angles, in radians.

<a id="return-value"></a>

## Return Value

A rotation structure.

<a id="discussion"></a>

## Discussion

Returns a rotation structure from the specified Euler angles.

# SPRotation3DFloatMakeWithEulerAngles (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatMakeWithEulerAngles(SPEulerAnglesFloat eulerAngles);
```

## Parameters

- `eulerAngles`: The source Euler angles, in radians.

<a id="return-value"></a>

## Return Value

A rotation structure.

<a id="discussion"></a>

## Discussion

Returns a rotation structure from the specified Euler angles.
