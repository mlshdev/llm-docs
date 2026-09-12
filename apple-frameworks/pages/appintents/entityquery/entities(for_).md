> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquery/entities(for:)](https://developer.apple.com/documentation/appintents/entityquery/entities(for:))

# entities(for:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Retrieves instances by identifier.

## Declaration

```swift
func entities(for identifiers: [Self.Entity.ID]) async throws -> [Self.Entity]
```

## Parameters

- `identifiers`: An array of entity identifiers.

## Mentioned In

- [Defining app entities for your custom data types](../defining-app-entities-for-your-custom-data-types.md)

<a id="discussion"></a>

## Discussion

The system skips identifiers that have no matching entity, so the returned array can have fewer entries than the supplied identifiers.

## Default Implementations

### EntityQuery Implementations

- [entities(for:)](entities%28for_%29-luma.md)

## See Also

### Searching for entities

- [Entity](entity.md): The entity type that this query knows how to resolve.
