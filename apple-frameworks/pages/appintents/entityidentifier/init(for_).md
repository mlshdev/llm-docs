> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityidentifier/init(for:)](https://developer.apple.com/documentation/appintents/entityidentifier/init(for:))

# init(for:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Creates an identifier for the specified entity.

## Declaration

```swift
init<Entity>(for entity: Entity) where Entity : AppEntity
```

## Parameters

- `entity`: The entity for which to create an identifier

<a id="discussion"></a>

## Discussion

For entities adopting `_SyncableEntity`, this initializer extracts the stable ID:

- **Passthrough case**: If the entity’s ID is already stable (like `UUID`), it’s used as both local and stable ID
- **Mapped case**: If the entity’s ID uses `_SyncableEntityIdentifier`, the stable ID is extracted from the wrapper
- **Custom identifier case**: If the entity’s ID conforms to `_SyncableEntityIdentifierProviding`, the stable ID is extracted via `stableIdentifierString`

The stable ID is used for cross-device entity resolution via Campo session syncing.

## See Also

### Creating an entity identifier

- [init(for:identifier:)](init%28for_identifier_%29.md): Creates an `EntityIdentifier` representing an instance of the specified entity type backed by the specified identifier value.
- [init(activityIdentifier:)](init%28activityidentifier_%29.md)
