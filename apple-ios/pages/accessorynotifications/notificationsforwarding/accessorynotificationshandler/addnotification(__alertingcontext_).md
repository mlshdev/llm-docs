> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/addnotification(_:alertingcontext:)](https://developer.apple.com/documentation/accessorynotifications/notificationsforwarding/accessorynotificationshandler/addnotification(_:alertingcontext:))

# addNotification(\_:alertingContext:)

**Framework:** Accessory Notifications  
**Kind:** Instance Method  
**Availability:** iOS 26.5+

Provides a new notification for display on your accessory.

## Declaration

```swift
func addNotification(_ notification: AccessoryNotification, alertingContext: AlertingContext) async throws -> Bool
```

## Parameters

- `notification`: The notification to add.
- `alertingContext`: Context for evaluating whether the notification can alert or be delivered quietly.

<a id="return-value"></a>

## Return Value

`true` if the accessory alerted for the notification, `false` otherwise. If this method throws an error, the system assumes the accessory did not alert.

<a id="discussion"></a>

## Discussion

Parse the notification details, select the information to display on your accessory, and convert it to data for transmission. Return `true` if your accessory successfully alerts for the notification.
