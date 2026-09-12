> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/notificationusagebycategory](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/notificationusagebycategory)

# notificationUsageByCategory (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The frequency of notifications per category.

## Declaration

```swift
var notificationUsageByCategory: [SRDeviceUsageReport.CategoryKey : [SRDeviceUsageReport.NotificationUsage]] { get }
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category using the primary genre an app supplies in its `iTunesMetadata.plist`.

## See Also

### Analyzing Notification Use

- [SRDeviceUsageReport.NotificationUsage](notificationusage.md): An object that describes notification frequency and the manner in which the user interacts with notifications.

# notificationUsageByCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The frequency of notifications per category.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSArray<SRNotificationUsage *> *> * notificationUsageByCategory;
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category using the primary genre an app supplies in its `iTunesMetadata.plist`.

## See Also

### Analyzing Notification Use

- [SRNotificationUsage](notificationusage.md): An object that describes notification frequency and the manner in which the user interacts with notifications.
