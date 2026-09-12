> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/contains(_:)-92ap6](https://developer.apple.com/documentation/realitykit/boundingbox/contains(_:)-92ap6)

# contains(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Checks whether the bounding box contains the specified point.

## Declaration

```swift
func contains(_ point: SIMD3<Float>) -> Bool
```

<a id="return-value"></a>

## Return Value

A Boolean that’s `true` if the box contains the specified point.

## See Also

### Checking for overlap

- [contains(\_:)](contains%28__%29-5ux4h.md): Checks whether the bounding box contains the specified bounds.
- [intersects(\_:)](intersects%28__%29.md): Checks whether the bounding box intersects the specified bounds.
