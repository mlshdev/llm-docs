> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/primitive3dprotocol/unapply(_:)-22esh](https://developer.apple.com/documentation/spatial/primitive3dprotocol/unapply(_:)-22esh)

# unapply(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Unapplies a projective transform.

## Declaration

```swift
mutating func unapply(_ transform: Self.ProjectiveTransform)
```

## Parameters

- `transform`: The projective transform.

## Default Implementations

### Primitive3DProtocol Implementations

- [unapply(\_:)](unapply%28__%29-2vz7p.md): Conforms when `Scalar` is `Float`. Unapplies a pose.
- [unapply(\_:)](unapply%28__%29-2wwwi.md): Conforms when `Scalar` is `Float`. Unapplies an affine transform.
- [unapply(\_:)](unapply%28__%29-4ip05.md): Conforms when `Scalar` is `Float`. Unapplies a projective transform.
