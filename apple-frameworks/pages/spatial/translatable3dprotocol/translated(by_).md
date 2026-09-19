> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/translatable3dprotocol/translated(by:)

# translated(by:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Returns the entity translated by the specified vector.

## Declaration

```swift
func translated(by vector: Self.Vector) -> Self
```

## Parameters

- `vector`: The vector that defines that translation.

## Default Implementations

### Translatable3DProtocol Implementations

- [translated(by:)](translated%28by_%29-27p04.md): Conforms when `Scalar` is `Float`. Returns the entity translated by the specified vector.
