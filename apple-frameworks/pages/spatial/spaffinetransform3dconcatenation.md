> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spaffinetransform3dconcatenation](https://developer.apple.com/documentation/spatial/spaffinetransform3dconcatenation)

# SPAffineTransform3DConcatenation

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

## Declaration

```objectivec
static SPAffineTransform3D SPAffineTransform3DConcatenation(SPAffineTransform3D t1, SPAffineTransform3D t2);
```

## Parameters

- `t1`: The first transform.
- `t2`: The second transform.

<a id="return-value"></a>

## Return Value

An affine transformation matrix that’s constructed by concatenating two existing affine transforms.

<a id="discussion"></a>

## Discussion

Returns an affine transformation matrix that’s constructed by concatenating two existing affine transforms.
