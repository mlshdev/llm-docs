> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entity/clone(recursive:)](https://developer.apple.com/documentation/realitykit/entity/clone(recursive:))

# clone(recursive:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Duplicates an entity to create a new entity.

## Declaration

```swift
@MainActor @preconcurrency func clone(recursive: Bool) -> Self
```

## Parameters

- `recursive`: A Boolean that you set to `true` to recursively copy all the children of the entity. Otherwise, no descendants are copied.

<a id="return-value"></a>

## Return Value

The duplicate.

<a id="discussion"></a>

## Discussion

All component data is cloned automatically. If you clone an entity that stores custom data that’s not part of a component, override the [didClone(from:)](didclone%28from_%29.md) method to copy that data manually.

## See Also

### Creating an entity

- [init()](init%28%29.md): Creates a new entity.
- [init(components:)](init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [init(components:)](init%28components_%29-1lmhe.md): Creates an entity with multiple components.
- [didClone(from:)](didclone%28from_%29.md): Tells a newly cloned entity that cloning is complete.
