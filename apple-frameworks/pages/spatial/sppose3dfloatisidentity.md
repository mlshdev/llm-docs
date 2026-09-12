> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sppose3dfloatisidentity](https://developer.apple.com/documentation/spatial/sppose3dfloatisidentity)

# SPPose3DFloatIsIdentity

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static bool SPPose3DFloatIsIdentity(SPPose3DFloat pose);
```

## Parameters

- `pose`: The source pose.

<a id="return-value"></a>

## Return Value

A Boolean value that indicates whether the transform is the identity transform.

<a id="discussion"></a>

## Discussion

Returns a Boolean value that indicates whether the pose is the identity transform.

> **Note**

> This function checks for equality within the Spatial default tolerance.
