> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/webusagebycategory](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/webusagebycategory)

# webUsageByCategory (Swift)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of time the user accesses domains per category.

## Declaration

```swift
var webUsageByCategory: [SRDeviceUsageReport.CategoryKey : [SRDeviceUsageReport.WebUsage]] { get }
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category in the same manner as displayed in Screen Time.

## See Also

### Analyzing Web Use

- [SRDeviceUsageReport.WebUsage](webusage.md): An object that describes a user’s website usage.

# webUsageByCategory (Objective-C)

**Framework:** SensorKit  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The amount of time the user accesses domains per category.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSArray<SRWebUsage *> *> * webUsageByCategory;
```

<a id="Discussion"></a>

## Discussion

The framework interprets the category in the same manner as displayed in Screen Time.

## See Also

### Analyzing Web Use

- [SRWebUsage](webusage.md): An object that describes a user’s website usage.
