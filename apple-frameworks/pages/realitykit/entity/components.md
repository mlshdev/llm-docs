> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/entity/components

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
