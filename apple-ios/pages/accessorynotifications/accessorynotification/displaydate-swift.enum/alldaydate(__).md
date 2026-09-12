> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/displaydate-swift.enum/alldaydate(_:)](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/displaydate-swift.enum/alldaydate(_:))

# AccessoryNotification.DisplayDate.allDayDate(\_:)

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An option to display a date for all-day events.

## Declaration

```swift
case allDayDate(Date)
```

## Parameters

- `date`: The date of the all-day event.

<a id="discussion"></a>

## Discussion

Display this date with information about the day (for example, “Sunday” or “July 1st”).

## See Also

### Identifying date display options

- [AccessoryNotification.DisplayDate.contentDate(\_:)](contentdate%28__%29.md): An option to display a date that includes a specific moment to which the notification refers.
- [AccessoryNotification.DisplayDate.deliveryDate](deliverydate.md): An option to display a date that uses the notification’s delivery timestamp.
- [AccessoryNotification.DisplayDate.hideDate](hidedate.md): An option that indicates the accessory doesn’t display a date.
