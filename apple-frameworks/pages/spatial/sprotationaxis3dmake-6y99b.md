> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/sprotationaxis3dmake-6y99b](https://developer.apple.com/documentation/spatial/sprotationaxis3dmake-6y99b)

# SPRotationAxis3DMake

**Interface language:** Objective-C

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
static SPRotationAxis3D SPRotationAxis3DMake(SPRotationAxis3DFloat axis);
```

## Parameters

- `axis`: The rotation axis.

<a id="return-value"></a>

## Return Value

A new rotation axis.

<a id="discussion"></a>

## Discussion

Returns a double-precision rotation axis from a single-precision rotation axis.
