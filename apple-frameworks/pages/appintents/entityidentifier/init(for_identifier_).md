> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityidentifier/init(for:identifier:)](https://developer.apple.com/documentation/appintents/entityidentifier/init(for:identifier:))

# init(for:identifier:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an `EntityIdentifier` representing an instance of the specified entity type backed by the specified identifier value.

## Declaration

```swift
init<Entity>(for entityType: Entity.Type, identifier: Entity.ID) where Entity : AppEntity
```

## Parameters

- `entityType`: The type of the entity
- `identifier`: The identifier value for the entity

<a id="discussion"></a>

## Discussion

For entity types adopting `_SyncableEntity`, this initializer extracts the stable ID:

- **Passthrough case**: If the ID is already stable (like `UUID`), it’s used as both local and stable ID
- **Mapped case**: If the ID uses `_SyncableEntityIdentifier`, the stable ID is extracted from the wrapper
- **Custom identifier case**: If the ID conforms to `_SyncableEntityIdentifierProviding`, the stable ID is extracted via `stableIdentifierString`

## See Also

### Creating an entity identifier

- [init(for:)](init%28for_%29.md): Creates an identifier for the specified entity.
- [init(activityIdentifier:)](init%28activityidentifier_%29.md)
