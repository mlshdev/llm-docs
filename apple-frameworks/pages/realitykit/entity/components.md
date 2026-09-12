> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/components](https://developer.apple.com/documentation/realitykit/entity/components)

# components

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

All the components that an entity stores.

## Declaration

```swift
@MainActor @preconcurrency var components: Entity.ComponentSet { get set }
```

<a id="discussion"></a>

## Discussion

You can only store one component of a given type on an entity.

## See Also

### Managing components

- [Entity.ComponentSet](componentset.md): A collection of components that an entity stores.
