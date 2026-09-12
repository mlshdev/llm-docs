> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/boundingbox/union(_:)-1y8hw](https://developer.apple.com/documentation/realitykit/boundingbox/union(_:)-1y8hw)

# union(\_:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a bounding box containing the current bounds and the specified bounds.

## Declaration

```swift
func union(_ other: BoundingBox) -> BoundingBox
```

## Parameters

- `other`: Another bounding box.

<a id="return-value"></a>

## Return Value

The new bounding box.

## See Also

### Expanding boxes

- [formUnion(\_:)](formunion%28__%29-5iy03.md): Expands the bounding box to contain the specified bounds.
- [union(\_:)](union%28__%29-g4th.md): Creates a bounding box containing the current bounds and the specified point.
- [formUnion(\_:)](formunion%28__%29-6itj9.md): Expands the bounding box to contain the specified point.
