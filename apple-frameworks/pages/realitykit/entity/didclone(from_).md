> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/didclone(from:)](https://developer.apple.com/documentation/realitykit/entity/didclone(from:))

# didClone(from:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Tells a newly cloned entity that cloning is complete.

## Declaration

```swift
@MainActor @preconcurrency func didClone(from source: Entity)
```

## Parameters

- `source`: The entity from which the cloned entity was copied.

<a id="discussion"></a>

## Discussion

This method clones all component data automatically. When you clone an entity that stores custom data that’s not part of a component, override the [didClone(from:)](didclone%28from_%29.md) method to copy that data manually after the clone finishes.

## See Also

### Creating an entity

- [init()](init%28%29.md): Creates a new entity.
- [init(components:)](init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [init(components:)](init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [clone(recursive:)](clone%28recursive_%29.md): Duplicates an entity to create a new entity.
