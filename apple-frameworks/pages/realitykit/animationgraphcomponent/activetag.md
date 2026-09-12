> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/animationgraphcomponent/activetag](https://developer.apple.com/documentation/realitykit/animationgraphcomponent/activetag)

# AnimationGraphComponent.ActiveTag

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A graph-level signal raised by the graph while certain states are active.

## Declaration

```swift
struct ActiveTag
```

<a id="overview"></a>

## Overview

Use tags to observe outputs the graph emits back to the rest of the application — for example, to play a footstep sound while the character is in a “running” state. The graph reports tags that are currently active or that fired during the most recent evaluation tick through [activeTags](activetags.md).

## Topics

### Identifying the tag

- [id](activetag/id.md): The unique identifier of the tag within the compiled graph.

### Instance Properties

- [name](activetag/name.md): The author-supplied name of the tag from the graph definition.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing active tags

- [activeTags](activetags.md): The tags that were active or fired during the most recent graph evaluation tick.
