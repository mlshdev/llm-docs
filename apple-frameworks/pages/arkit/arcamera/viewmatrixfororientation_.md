> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcamera/viewmatrixfororientation:](https://developer.apple.com/documentation/arkit/arcamera/viewmatrixfororientation:)

# viewMatrixForOrientation:

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0)

Returns the view matrix for the camera with a given interface orientation.

## Declaration

```objectivec
- (simd_float4x4) viewMatrixForOrientation:(UIInterfaceOrientation) orientation;
```

## Parameters

- `orientation`: The interface orientation that will be used to render the camera’s view.

<a id="return-value"></a>

## Return Value

The view matrix for the given orientation.

<a id="discussion"></a>

## Discussion

The view matrix can be used to transform geometry from world space into camera space for a given orientation.
