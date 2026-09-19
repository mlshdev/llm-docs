> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/identifier-swift.struct/init(notificationidentifier:sourceidentifier:)

# init(notificationIdentifier:sourceIdentifier:)

**Framework:** Accessory Notifications  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a notification identifier from its components.

## Declaration

```swift
init(notificationIdentifier: String, sourceIdentifier: String)
```

## Parameters

- `notificationIdentifier`: An identifier that the source app sets for the notification.
- `sourceIdentifier`: The bundle identifier of the app that sent the notification.
