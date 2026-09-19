> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/bindtarget/anchorentity(_:)

# anchorEntity(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Generates a complex bind path from a particular anchor entity in the scene.

## Declaration

```swift
static func anchorEntity(_ name: String) -> BindTarget.EntityPath
```

## See Also

### Targeting entities and scenes

- [scene(\_:)](scene%28__%29.md): Generates a bind path from a particular scene.
- [BindTarget.ScenePath](scenepath.md): A bind path for a particular scene.
- [entity(\_:)](entity%28__%29.md): Generates a complex bind path from a particular child entity of the current entity.
- [BindTarget.EntityPath](entitypath.md): A bind path context for a particular entity.
