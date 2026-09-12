> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spvector3dfloatapplyscaledpose](https://developer.apple.com/documentation/spatial/spvector3dfloatapplyscaledpose)

# SPVector3DFloatApplyScaledPose

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPVector3DFloat SPVector3DFloatApplyScaledPose(SPVector3DFloat vector, SPScaledPose3DFloat pose);
```

## Parameters

- `vector`: The source vector.
- `pose`: The scaled pose that the function applies to the vector.

<a id="return-value"></a>

## Return Value

The transformed vector.

<a id="discussion"></a>

## Discussion

Returns a vector that’s transformed by the specified scaled pose.
