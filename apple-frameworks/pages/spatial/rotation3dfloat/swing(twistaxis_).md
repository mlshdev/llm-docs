> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/swing(twistaxis:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/swing(twistaxis:))

# swing(twistAxis:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func swing(twistAxis: RotationAxis3DFloat) -> Rotation3DFloat
```

## Parameters

- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The swing component of the rotation’s swing-twist decomposition for a given twist axis.

<a id="discussion"></a>

## Discussion

Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.

# SPRotation3DFloatSwing (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotation3DFloat SPRotation3DFloatSwing(SPRotation3DFloat rotation, SPRotationAxis3DFloat twistAxis);
```

## Parameters

- `rotation`: The source rotation.
- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The swing component of the rotation’s swing-twist decomposition for a given twist axis.

<a id="discussion"></a>

## Discussion

Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
