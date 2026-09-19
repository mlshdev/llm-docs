> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/notificationresponse/actionidentifier

# actionIdentifier

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

An identifier for the action the person took with the notification.

## Declaration

```swift
var actionIdentifier: String
```

<a id="discussion"></a>

## Discussion

This value matches one of the action identifiers in the notification’s [actions](../accessorynotification/actions.md) array.
