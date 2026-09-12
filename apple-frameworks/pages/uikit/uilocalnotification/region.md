> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uilocalnotification/region](https://developer.apple.com/documentation/uikit/uilocalnotification/region)

# region (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The geographic region that triggers the notification.

## Declaration

```swift
@NSCopying var region: CLRegion? { get set }
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property causes the local notification to be delivered when the user crosses the region’s boundary. The region object itself defines whether the notification is triggered when the user enters or exits the region. The default value of this property is `nil`.

You may specify a value for this property or the [fireDate](firedate.md) property but not both. Attempting to schedule a local notification that contains both a region and fire date raises an exception.

Apps are limited in the total number of regions they may monitor at any given time, and local notifications configured with a region value count against that total. In addition, the user must grant permission for your app to use location-related information for the delivery of region-based local notifications to work. If the user denies your app’s request to use location services, local notifications configured with a region will not be delivered.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.

# region (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 10.0) · iPadOS 8.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · watchOS 2.0+ (deprecated in 3.0)

The geographic region that triggers the notification.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) CLRegion * region;
```

<a id="Discussion"></a>

## Discussion

Assigning a value to this property causes the local notification to be delivered when the user crosses the region’s boundary. The region object itself defines whether the notification is triggered when the user enters or exits the region. The default value of this property is `nil`.

You may specify a value for this property or the [fireDate](firedate.md) property but not both. Attempting to schedule a local notification that contains both a region and fire date raises an exception.

Apps are limited in the total number of regions they may monitor at any given time, and local notifications configured with a region value count against that total. In addition, the user must grant permission for your app to use location-related information for the delivery of region-based local notifications to work. If the user denies your app’s request to use location services, local notifications configured with a region will not be delivered.

## See Also

### Scheduling a local notification

- [fireDate](firedate.md): Deprecated. The date and time when the system should deliver the notification.
- [timeZone](timezone.md): Deprecated. The time zone of the notification’s fire date.
- [repeatInterval](repeatinterval.md): Deprecated. The calendar interval at which to reschedule the notification.
- [repeatCalendar](repeatcalendar.md): Deprecated. The calendar the system should refer to when it reschedules a repeating notification.
- [regionTriggersOnce](regiontriggersonce.md): Deprecated. A Boolean value indicating whether crossing a geographic region boundary delivers only one notification.
