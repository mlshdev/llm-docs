> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol/unapply(_:)-2wwwi](https://developer.apple.com/documentation/spatial/primitive3dprotocol/unapply(_:)-2wwwi)

# unapply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unapplies an affine transform.

## Declaration

```swift
mutating func unapply(_ transform: Self.AffineTransform)
```

## Parameters

- `transform`: The affine transform.

<a id="discussion"></a>

## Discussion

> **Note**

> The transform must be rectilinear otherwise this function returns `self`.
