> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/boundingbox/union(_:)

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
