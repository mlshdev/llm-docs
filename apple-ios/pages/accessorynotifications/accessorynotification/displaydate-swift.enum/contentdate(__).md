> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessorynotifications/accessorynotification/displaydate-swift.enum/contentdate(_:)

# AccessoryNotification.DisplayDate.contentDate(\_:)

**Framework:** Accessory Notifications  
**Kind:** Case  
**Availability:** iOS 26.5+

An option to display a date that includes a specific moment to which the notification refers.

## Declaration

```swift
case contentDate(Date)
```

## Parameters

- `date`: The specific date and time to display.

<a id="discussion"></a>

## Discussion

Display this date with information that specifies the minute.

## See Also

### Identifying date display options

- [AccessoryNotification.DisplayDate.allDayDate(\_:)](alldaydate%28__%29.md): An option to display a date for all-day events.
- [AccessoryNotification.DisplayDate.deliveryDate](deliverydate.md): An option to display a date that uses the notification’s delivery timestamp.
- [AccessoryNotification.DisplayDate.hideDate](hidedate.md): An option that indicates the accessory doesn’t display a date.
