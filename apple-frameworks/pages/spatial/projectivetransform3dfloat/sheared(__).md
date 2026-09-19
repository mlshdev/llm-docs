> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/projectivetransform3dfloat/sheared(_:)

# sheared(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the transform sheared by the specified shear.

## Declaration

```swift
func sheared(_ shear: AxisWithFactorsFloat) -> ProjectiveTransform3DFloat
```

## Parameters

- `shear`: The axis and shear factors.

<a id="discussion"></a>

## Discussion

- Returns The sheared transform.
