> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname](https://developer.apple.com/documentation/foundation/nsnotification/name-swift.struct/gkplayerauthenticationdidchangenotificationname)

# GKPlayerAuthenticationDidChangeNotificationName

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 3.0+

A notification that posts after GameKit authenticates the local player.

## Declaration

```swift
static let GKPlayerAuthenticationDidChangeNotificationName: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The object property for this notification is a `GKLocalPlayer` object. Passing `nil` provides standard Notification Center behavior, which is to receive the notification for any object.

## See Also

### GameKit

- [GKPlayerDidChangeNotificationName](gkplayerdidchangenotificationname.md): A notification that posts when a player object’s data changes.
