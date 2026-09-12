> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/swing(twistaxis:)](https://developer.apple.com/documentation/spatial/rotation3d/swing(twistaxis:))

# swing(twistAxis:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```swift
func swing(twistAxis: RotationAxis3D) -> Rotation3D
```

## Parameters

- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The swing component of the rotation’s swing-twist decomposition for a given twist axis.

## See Also

### Decomposing a 3D rotation structure

- [twist(twistAxis:)](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
- [swingTwist(twistAxis:)](swingtwist%28twistaxis_%29.md): Returns the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.

# SPRotation3DSwing (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```objectivec
static SPRotation3D SPRotation3DSwing(SPRotation3D rotation, SPRotationAxis3D twistAxis);
```

## Parameters

- `rotation`: The rotation object to swing.
- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

The swing component of the rotation’s swing-twist decomposition for a given twist axis.

## See Also

### Decomposing a 3D rotation structure

- [SPRotation3DTwist](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
- [SPRotation3DTwist](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
