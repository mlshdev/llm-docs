> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/anchor](https://developer.apple.com/documentation/realitykit/entity/anchor)

# anchor

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The nearest ancestor entity that can act as an anchor.

## Declaration

```swift
@MainActor @preconcurrency var anchor: (any HasAnchoring)? { get }
```

<a id="discussion"></a>

## Discussion

This property returns `nil` if no ancestor can act as an anchor. An entity can act as an anchor if it adopts the [HasAnchoring](../hasanchoring.md) protocol. Just because an ancestor can be anchored doesn’t mean that it is. Inspect the [isAnchored](isanchored.md) property to see if an entity (or one of its ancestors) is anchored.
