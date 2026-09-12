> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquery/entity](https://developer.apple.com/documentation/appintents/entityquery/entity)

# Entity

**Framework:** App Intents  
**Kind:** Associated Type  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The entity type that this query knows how to resolve.

## Declaration

```swift
associatedtype Entity : AppEntity = Self.Result.Result.ValueType where Self.Entity == Self.Result.Result
```

## See Also

### Searching for entities

- [entities(for:)](entities%28for_%29.md): Retrieves instances by identifier.
