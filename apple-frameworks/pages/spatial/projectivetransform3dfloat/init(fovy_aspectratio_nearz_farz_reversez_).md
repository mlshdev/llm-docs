> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/projectivetransform3dfloat/init(fovy:aspectratio:nearz:farz:reversez:)](https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/init(fovy:aspectratio:nearz:farz:reversez:))

# init(fovY:aspectRatio:nearZ:farZ:reverseZ:) (Swift)

**Framework:** Spatial  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(fovY: Angle2DFloat, aspectRatio: Float, nearZ: Float, farZ: Float, reverseZ: Bool)
```

## Parameters

- `fovY`: The field of view angle on the @p y axis.
- `aspectRatio`: The aspect ratio.
- `nearZ`: The near @p z .
- `farZ`: The far @p z .
- `reverseZ`: A Boolean value that specifies whether the matrix should use reverse z.

<a id="return-value"></a>

## Return Value

A projective transform with right-hand side perspective.

<a id="discussion"></a>

## Discussion

Returns a projective transform with right-hand side perspective.

# SPProjectiveTransform3DFloatMakeWithRightHandPerspective (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatMakeWithRightHandPerspective(SPAngleFloat fovY, float aspectRatio, float nearZ, float farZ, bool reverseZ);
```

## Parameters

- `fovY`: The field of view angle on the @p y axis.
- `aspectRatio`: The aspect ratio.
- `nearZ`: The near @p z .
- `farZ`: The far @p z .
- `reverseZ`: A Boolean value that specifies whether the matrix should use reverse z.

<a id="return-value"></a>

## Return Value

A projective transform with right-hand side perspective.

<a id="discussion"></a>

## Discussion

Returns a projective transform with right-hand side perspective.
