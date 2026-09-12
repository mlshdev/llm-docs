> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantentities/removeentities(_:)](https://developer.apple.com/documentation/appintents/relevantentities/removeentities(_:))

# removeEntities(\_:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes the specified entities across all contexts.

## Declaration

```swift
func removeEntities(_ entities: [any AppEntity]) async throws
```

## Parameters

- `entities`: The entities to remove from all contexts.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the removal fails.

## See Also

### Removing the current donations

- [removeAllEntities()](removeallentities%28%29.md): Removes all suggested entities across all contexts.
- [removeAllEntities(for:)](removeallentities%28for_%29.md): Removes all donated entities for the given context.
- [removeEntities(\_:from:)](removeentities%28__from_%29.md): Removes specific entities from the given context.
