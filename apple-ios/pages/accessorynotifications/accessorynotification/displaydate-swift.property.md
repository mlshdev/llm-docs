> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/displaydate-swift.property](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/displaydate-swift.property)

# displayDate

**Framework:** Accessory Notifications  
**Kind:** Instance Property  
**Availability:** iOS 26.5+

A preferred date and format to display with the notification.

## Declaration

```swift
let displayDate: AccessoryNotification.DisplayDate
```

<a id="discussion"></a>

## Discussion

The value might differ from the timestamp when the notification arrives.

## See Also

### Working with notification dates

- [deliveryDate](deliverydate.md): A timestamp that indicates when the system received the notification.
- [AccessoryNotification.DisplayDate](displaydate-swift.enum.md): Options for displaying a date in a notification.
