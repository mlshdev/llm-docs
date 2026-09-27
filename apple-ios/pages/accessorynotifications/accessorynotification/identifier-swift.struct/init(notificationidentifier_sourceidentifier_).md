> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
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
