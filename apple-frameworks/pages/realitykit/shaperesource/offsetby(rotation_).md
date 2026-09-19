> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/shaperesource/offsetby(rotation:)

# offsetBy(rotation:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new shape resource by applying a rotation.

## Declaration

```swift
@MainActor @preconcurrency func offsetBy(rotation: simd_quatf) -> ShapeResource
```

## Parameters

- `rotation`: The rotation to apply to the existing shape resource.

<a id="return-value"></a>

## Return Value

The transformed resource.

## See Also

### Transforming a shape

- [offsetBy(translation:)](offsetby%28translation_%29.md): Creates a new shape resource by applying a translation.
- [offsetBy(rotation:translation:)](offsetby%28rotation_translation_%29.md): Creates a new shape resource by applying a rotation and a translation.
