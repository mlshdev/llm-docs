> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/visualeffect/offset(z:)

# offset(z:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** visionOS 1.0+

Brings a view forward in Z by the provided distance in points.

## Declaration

```swift
@export(implementation) func offset(z: CGFloat) -> some VisualEffect

```

## Parameters

- `z`: The distance to extrude the view forward in Z, in points.

<a id="return-value"></a>

## Return Value

An effect that is extruded forward in Z by `z`.

## See Also

### Translating

- [offset(\_:)](offset%28__%29.md): Offsets the view by the horizontal and vertical amount specified in the offset parameter.
- [offset(x:y:)](offset%28x_y_%29.md): Offsets the view by the specified horizontal and vertical distances.
