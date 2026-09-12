> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rect3dfloat/unapplying(_:)-32dls](https://developer.apple.com/documentation/spatial/rect3dfloat/unapplying(_:)-32dls)

# unapplying(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unapplies an affine transform.

## Declaration

```swift
func unapplying(_ transform: AffineTransform3DFloat) -> Rect3DFloat
```

## Parameters

- `transform`: The affine transform.

<a id="discussion"></a>

## Discussion

> **Note**

> The transform must be rectilinear otherwise this function returns `self`.
