> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entitystringquery/entities(matching:)](https://developer.apple.com/documentation/appintents/entitystringquery/entities(matching:))

# entities(matching:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Retrieves instances by string.

## Declaration

```swift
func entities(matching string: String) async throws -> Self.Result
```

## Parameters

- `string`: “Name” used to refer to an entity instance (or a set thereof).
