> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bindtarget/entity(_:)](https://developer.apple.com/documentation/realitykit/bindtarget/entity(_:))

# entity(\_:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Generates a complex bind path from a particular child entity of the current entity.

## Declaration

```swift
static func entity(_ name: String) -> BindTarget.EntityPath
```

## See Also

### Targeting entities and scenes

- [scene(\_:)](scene%28__%29.md): Generates a bind path from a particular scene.
- [BindTarget.ScenePath](scenepath.md): A bind path for a particular scene.
- [anchorEntity(\_:)](anchorentity%28__%29.md): Generates a complex bind path from a particular anchor entity in the scene.
- [BindTarget.EntityPath](entitypath.md): A bind path context for a particular entity.
