> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/affinetransform3dfloat/changebasis(from:to:)](https://developer.apple.com/documentation/spatial/affinetransform3dfloat/changebasis(from:to:))

# changeBasis(from:to:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns a new affine transform structure by applying a change-of-basis.

## Declaration

```swift
func changeBasis(from: AffineTransform3DFloat = .identity, to: AffineTransform3DFloat) -> AffineTransform3DFloat?
```

## Parameters

- `from`: The old basis.
- `to`: The new basis.

<a id="return-value"></a>

## Return Value

A new affine transform structure.
