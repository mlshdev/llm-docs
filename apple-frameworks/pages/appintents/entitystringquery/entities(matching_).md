> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/entitystringquery/entities(matching:)

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
