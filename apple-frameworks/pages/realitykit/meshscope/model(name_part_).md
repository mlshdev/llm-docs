> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/meshscope/model(name:part:)

# model(name:part:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Apply to model by `name`, all parts if `part` is nil, otherwise only to the specific `part`.

## Declaration

```swift
static func model(name: String, part: String? = nil) -> MeshScope
```

## See Also

### Creating a mesh scope

- [instance(name:part:)](instance%28name_part_%29.md): Apply to instance by `name`, all parts if `part` is nil, otherwise only to the specific `part`.
