> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/roomanchor/contains(_:)](https://developer.apple.com/documentation/arkit/roomanchor/contains(_:))

# contains(\_:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Returns a Boolean value that indicates whether a room contains the provided point.

## Declaration

```swift
func contains(_ point: SIMD3<Float>) -> Bool
```

## Parameters

- `point`: The point to search for.

<a id="return-value"></a>

## Return Value

Returns `true` if the room contains the point, otherwise `false`.

## See Also

### Inspecting a room anchor

- [geometries(of:)](geometries%28of_%29.md): Deprecated. Returns the disjoint mesh geometries of a given classification.
- [description](description.md): A textual representation of this anchor.
