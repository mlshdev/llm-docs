> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorynotifications/accessorynotification/displaydate-swift.enum/deliverydate](https://developer.apple.com/documentation/accessorynotifications/accessorynotification/displaydate-swift.enum/deliverydate)

# AccessoryNotification.DisplayDate.deliveryDate

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An option to display a date that uses the notification’s delivery timestamp.

## Declaration

```swift
case deliveryDate
```

<a id="discussion"></a>

## Discussion

See [deliveryDate](../deliverydate.md) for the actual date value. Display this date with information that specifies the minute.

## See Also

### Identifying date display options

- [AccessoryNotification.DisplayDate.allDayDate(\_:)](alldaydate%28__%29.md): An option to display a date for all-day events.
- [AccessoryNotification.DisplayDate.contentDate(\_:)](contentdate%28__%29.md): An option to display a date that includes a specific moment to which the notification refers.
- [AccessoryNotification.DisplayDate.hideDate](hidedate.md): An option that indicates the accessory doesn’t display a date.
