> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/relevantentities/removeallentities()](https://developer.apple.com/documentation/appintents/relevantentities/removeallentities())

# removeAllEntities()

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Removes all suggested entities across all contexts.

## Declaration

```swift
func removeAllEntities() async throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the removal fails.

## See Also

### Removing the current donations

- [removeAllEntities(for:)](removeallentities%28for_%29.md): Removes all donated entities for the given context.
- [removeEntities(\_:)](removeentities%28__%29.md): Removes the specified entities across all contexts.
- [removeEntities(\_:from:)](removeentities%28__from_%29.md): Removes specific entities from the given context.
