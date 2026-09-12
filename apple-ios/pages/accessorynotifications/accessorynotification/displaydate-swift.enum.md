> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/displaydate-swift.enum](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/displaydate-swift.enum)

# AccessoryNotification.DisplayDate

**Framework:** Accessory Notifications  
**Kind:** Enumeration  
**Availability:** iOS 26.5+

Options for displaying a date in a notification.

## Declaration

```swift
enum DisplayDate
```

## Topics

### Identifying date display options

- [AccessoryNotification.DisplayDate.allDayDate(\_:)](displaydate-swift.enum/alldaydate%28__%29.md): An option to display a date for all-day events.
- [AccessoryNotification.DisplayDate.contentDate(\_:)](displaydate-swift.enum/contentdate%28__%29.md): An option to display a date that includes a specific moment to which the notification refers.
- [AccessoryNotification.DisplayDate.deliveryDate](displaydate-swift.enum/deliverydate.md): An option to display a date that uses the notification’s delivery timestamp.
- [AccessoryNotification.DisplayDate.hideDate](displaydate-swift.enum/hidedate.md): An option that indicates the accessory doesn’t display a date.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Working with notification dates

- [deliveryDate](deliverydate.md): A timestamp that indicates when the system received the notification.
- [displayDate](displaydate-swift.property.md): A preferred date and format to display with the notification.
