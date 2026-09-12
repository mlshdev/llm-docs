> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/applicationusagebycategory](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusagebycategory)

# applicationUsageByCategory (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The usage time of apps per category.

## Declaration

```swift
var applicationUsageByCategory: [SRDeviceUsageReport.CategoryKey : [SRDeviceUsageReport.ApplicationUsage]] { get }
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category using the primary genre an app supplies in its `iTunesMetadata.plist`.

## See Also

### Analyzing App Use

- [SRDeviceUsageReport.ApplicationUsage](applicationusage.md): An object that describes the user’s app activity over a period of time.
- [SRDeviceUsageReport.CategoryKey](categorykey.md): Categories of apps or websites that the user uses.

# applicationUsageByCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The usage time of apps per category.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSArray<SRApplicationUsage *> *> * applicationUsageByCategory;
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category using the primary genre an app supplies in its `iTunesMetadata.plist`.

## See Also

### Analyzing App Use

- [SRApplicationUsage](applicationusage.md): An object that describes the user’s app activity over a period of time.
- [SRDeviceUsageCategoryKey](categorykey.md): Categories of apps or websites that the user uses.
