> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintents/appentityannotatable/appentityidentifier

# appEntityIdentifier

**Framework:** App Intents  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · macOS 15.2+ · tvOS 18.2+ · visionOS 2.2+ · watchOS 11.2+

The identifier of an app entity you want to associate with a system type.

## Declaration

```swift
var appEntityIdentifier: EntityIdentifier? { get set }
```

## Mentioned In

- [Providing contextual cues to Apple Intelligence and Siri](../providing-contextual-cues-to-apple-intelligence-and-siri.md)
- [Donating your app’s data and actions to the system](../donating-your-apps-data-and-actions-to-the-system.md)

<a id="discussion"></a>

## Discussion

This property stores the unique identifier of one of your app’s entities. Use it to create an association between a system type and one of your custom [AppEntity](../appentity.md) types. For example, the [NSUserActivity](../../foundation/nsuseractivity.md) makes this property available so you can specify the entity associated with your app’s activity. To remove the association with one of your app’s entities, set this property to `nil`.
