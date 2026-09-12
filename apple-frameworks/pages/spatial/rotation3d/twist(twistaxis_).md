> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/twist(twistaxis:)](https://developer.apple.com/documentation/spatial/rotation3d/twist(twistaxis:))

# twist(twistAxis:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```swift
func twist(twistAxis: RotationAxis3D) -> Rotation3D
```

## Parameters

- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The twist component of the rotation’s swing-twist decomposition for a given twist axis.

## See Also

### Decomposing a 3D rotation structure

- [swing(twistAxis:)](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [swingTwist(twistAxis:)](swingtwist%28twistaxis_%29.md): Returns the rotation’s swing-twist decomposition for a given twist axis.
- [swing(twistAxis:)](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.

# SPRotation3DTwist (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```objectivec
static SPRotation3D SPRotation3DTwist(SPRotation3D rotation, SPRotationAxis3D twistAxis);
```

## Parameters

- `rotation`: The rotation object to twist.
- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The twist component of the rotation’s swing-twist decomposition for a given twist axis.

## See Also

### Decomposing a 3D rotation structure

- [SPRotation3DSwing](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [SPRotation3DSwing](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
