> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/spprojectivetransform3dfloatinverted](https://developer.apple.com/documentation/spatial/spprojectivetransform3dfloatinverted)

# SPProjectiveTransform3DFloatInverted

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPProjectiveTransform3DFloat SPProjectiveTransform3DFloatInverted(SPProjectiveTransform3DFloat transform);
```

## Parameters

- `transform`: The source transform.

<a id="return-value"></a>

## Return Value

A new transform that’s constructed by inverting an existing projective transform.

<a id="discussion"></a>

## Discussion

Returns a new transform that’s constructed by inverting an existing projective transform.
