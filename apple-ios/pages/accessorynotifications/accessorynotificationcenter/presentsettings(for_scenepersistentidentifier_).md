> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotificationcenter/presentsettings(for:scenepersistentidentifier:)

# presentSettings(for:scenePersistentIdentifier:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Presents notification forwarding settings for an accessory.

## Declaration

```swift
func presentSettings(for accessory: ASAccessory, scenePersistentIdentifier: String? = nil) async throws -> ForwardingDecision
```

## Parameters

- `accessory`: The accessory for which to present settings.
- `scenePersistentIdentifier`: The persistent identifier of the specific `UISceneSession` from the target app associated with the presentation, if available.
