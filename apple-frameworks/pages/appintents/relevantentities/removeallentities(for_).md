> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantentities/removeallentities(for:)](https://developer.apple.com/documentation/appintents/relevantentities/removeallentities(for:))

# removeAllEntities(for:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes all donated entities for the given context.

## Declaration

```swift
func removeAllEntities(for context: AppEntityContext) async throws
```

## Parameters

- `context`: The context whose donated entities should be removed.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the removal fails.

## See Also

### Removing the current donations

- [removeAllEntities()](removeallentities%28%29.md): Removes all suggested entities across all contexts.
- [removeEntities(\_:)](removeentities%28__%29.md): Removes the specified entities across all contexts.
- [removeEntities(\_:from:)](removeentities%28__from_%29.md): Removes specific entities from the given context.
