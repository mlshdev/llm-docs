> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/boundingbox/transformed(by:)

# transformed(by:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Transforms the bounding box and finds the bounds of the result.

## Declaration

```swift
func transformed(by transform: float4x4) -> BoundingBox
```

## Parameters

- `transform`: The transform to apply to the box.

<a id="return-value"></a>

## Return Value

The bounds of the transformed box.

## See Also

### Transforming a bounding box

- [transform(by:)](transform%28by_%29.md): Transforms the bounding box.
