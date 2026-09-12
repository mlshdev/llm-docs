> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/swingtwist(twistaxis:)](https://developer.apple.com/documentation/spatial/rotation3d/swingtwist(twistaxis:))

# swingTwist(twistAxis:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Returns the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```swift
func swingTwist(twistAxis: RotationAxis3D) -> (swing: Rotation3D, twist: Rotation3D)
```

## Parameters

- `twistAxis`: The twist axis.

<a id="return-value"></a>

## Return Value

A tuple that contains the swing rotation and the twist rotation.

## See Also

### Decomposing a 3D rotation structure

- [swing(twistAxis:)](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
- [swing(twistAxis:)](swing%28twistaxis_%29.md): Returns the swing component of the rotation’s swing-twist decomposition for a given twist axis.
- [twist(twistAxis:)](twist%28twistaxis_%29.md): Returns the twist component of the rotation’s swing-twist decomposition for a given twist axis.
