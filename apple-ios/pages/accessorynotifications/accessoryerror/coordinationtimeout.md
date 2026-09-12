> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessoryerror/coordinationtimeout](https://developer.apple.com/documentation/accessorynotifications/accessoryerror/coordinationtimeout)

# AccessoryError.coordinationTimeout

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An error that indicates alert coordination timed out.

## Declaration

```swift
case coordinationTimeout
```

<a id="discussion"></a>

## Discussion

The system sets a timeout to determine whether an accessory successfully alerts for a notification. The system generates this error if your accessory doesn’t return from [addNotification(\_:alertingContext:)](../notificationsforwarding/accessorynotificationshandler/addnotification%28__alertingcontext_%29.md) within the timeout.

## See Also

### Response errors

- [AccessoryError.invalidNotificationResponse](invalidnotificationresponse.md): An error that indicates the system failed to handle a notification response.
