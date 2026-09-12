> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/actionevent/targetentity](https://developer.apple.com/documentation/realitykit/actionevent/targetentity)

# targetEntity

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The entity the bind target references.

## Declaration

```swift
let targetEntity: Entity?
```

<a id="discussion"></a>

## Discussion

For example, if a bind target references an entity’s transform (i.e. `.transform`), this value is set to that entity.

This may differ from the entity property in the playback controller if the bind target references an entity other than the entity that the animation was played on.
