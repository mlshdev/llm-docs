> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/relevantentities/updateentities(_:for:)

# updateEntities(\_:for:)

**Framework:** App Intents  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Donates suggested entities for a single context.

## Declaration

```swift
func updateEntities(_ entities: [any AppEntity], for context: AppEntityContext) async throws
```

## Parameters

- `entities`: The entities to donate.
- `context`: The context with which to associate the donated entities.

## Mentioned In

- [Donating your app’s data and actions to the system](../donating-your-apps-data-and-actions-to-the-system.md)

<a id="discussion"></a>

## Discussion

Replaces any previously donated entities associated with the given context.

> **Throws**

> An error if the donation fails.
