> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesource/offsetby(translation:)](https://developer.apple.com/documentation/realitykit/shaperesource/offsetby(translation:))

# offsetBy(translation:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Creates a new shape resource by applying a translation.

## Declaration

```swift
@MainActor @preconcurrency func offsetBy(translation: SIMD3<Float>) -> ShapeResource
```

## Parameters

- `translation`: The translation to apply to the existing shape resource.

<a id="return-value"></a>

## Return Value

The transformed resource.

## See Also

### Transforming a shape

- [offsetBy(rotation:)](offsetby%28rotation_%29.md): Creates a new shape resource by applying a rotation.
- [offsetBy(rotation:translation:)](offsetby%28rotation_translation_%29.md): Creates a new shape resource by applying a rotation and a translation.
