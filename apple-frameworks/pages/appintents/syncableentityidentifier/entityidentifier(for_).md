> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/syncableentityidentifier/entityidentifier(for:)](https://developer.apple.com/documentation/appintents/syncableentityidentifier/entityidentifier(for:))

# entityIdentifier(for:)

**Framework:** App Intents  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an identifier from a string representation.

## Declaration

```swift
static func entityIdentifier(for string: String) -> SyncableEntityIdentifier<LocalID, StableID>?
```

## Parameters

- `string`: The string representation

<a id="return-value"></a>

## Return Value

An identifier with local ID set, or `nil` if parsing fails

<a id="discussion"></a>

## Discussion

Attempts to parse the string as a local ID. The stable ID is not populated during deserialization - it should be populated by queries when fetching entities.
