> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/entityquery/displayrepresentations(for:)-258xs](https://developer.apple.com/documentation/appintents/entityquery/displayrepresentations(for:)-258xs)

# displayRepresentations(for:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns display representations by identifier.

## Declaration

```swift
func displayRepresentations(for identifiers: [Self.Entity.ID]) async throws -> [Self.Entity.ID : DisplayRepresentation]
```

<a id="discussion"></a>

## Discussion

Return full representations; the system materializes only the components it needs (for example, dropping a deferred image when only text is required).
