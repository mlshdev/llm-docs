> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatapplypose](https://developer.apple.com/documentation/spatial/spvector3dfloatapplypose)

# SPVector3DFloatApplyPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatApplyPose(SPVector3DFloat vector, SPPose3DFloat pose);
```

## Parameters

- `vector`: The source vector.
- `pose`: The pose that the function applies to the vector.

<a id="return-value"></a>

## Return Value

The transformed vector.

<a id="discussion"></a>

## Discussion

Returns a vector that’s transformed by the specified pose.
