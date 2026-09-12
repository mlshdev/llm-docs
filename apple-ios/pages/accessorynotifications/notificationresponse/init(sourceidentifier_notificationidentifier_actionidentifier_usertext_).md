> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationresponse/init(sourceidentifier:notificationidentifier:actionidentifier:usertext:)](https://developer.apple.com/documentation/accessorynotifications/notificationresponse/init(sourceidentifier:notificationidentifier:actionidentifier:usertext:))

# init(sourceIdentifier:notificationIdentifier:actionIdentifier:userText:)

**Framework:** Accessory Notifications  
**Kind:** Initializer  
**Availability:** iOS 26.5+

Initializes a notification response with the given identifiers and optional user text.

## Declaration

```swift
init(sourceIdentifier: String, notificationIdentifier: String, actionIdentifier: String, userText: String?)
```

## Parameters

- `sourceIdentifier`: The bundle identifier of the app that sent the notification.
- `notificationIdentifier`: The identifier for the notification.
- `actionIdentifier`: The identifier for the action taken.
- `userText`: Optional text provided by the person.
