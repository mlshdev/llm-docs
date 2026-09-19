> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/spatial/coordinatespacevalue3d/resolve(in:)

# resolve(in:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Resolves the associated value in the given coordinate space.

## Declaration

```swift
func resolve<Space>(in otherSpace: Space) throws -> Self.Value where Space : CoordinateSpace3D
```

<a id="return-value"></a>

## Return Value

A concrete value converted to the provided space.
