> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dmake-5qdj3](https://developer.apple.com/documentation/spatial/spprojectivetransform3dmake-5qdj3)

# SPProjectiveTransform3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3D SPProjectiveTransform3DMake(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The transform.

<a id="return-value"></a>

## Return Value

A new transform.

<a id="discussion"></a>

## Discussion

Returns a double-precision projective transformation from a single-precision projective transformation.
