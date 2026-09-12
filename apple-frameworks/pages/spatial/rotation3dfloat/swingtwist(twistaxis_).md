> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3dfloat/swingtwist(twistaxis:)](https://developer.apple.com/documentation/spatial/rotation3dfloat/swingtwist(twistaxis:))

# swingTwist(twistAxis:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the rotation’s swing-twist decomposition for a given twist axis.

## Declaration

```swift
func swingTwist(twistAxis: RotationAxis3DFloat) -> (swing: Rotation3DFloat, twist: Rotation3DFloat)
```

<a id="return-value"></a>

## Return Value

A tuple that contains the swing rotation and the twist rotation.

<a id="discussion"></a>

## Discussion

- Parameter twistAxis The twist axis.
