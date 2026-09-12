> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport)

# SRDeviceUsageReport (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The frequency and relative duration that the user uses their device, particular Apple apps, or websites.

## Declaration

```swift
class SRDeviceUsageReport
```

<a id="overview"></a>

## Overview

The [deviceUsageReport](srsensor/deviceusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Summarizing Device Use

- [duration](srdeviceusagereport/duration.md): The duration that the report spans.
- [totalScreenWakes](srdeviceusagereport/totalscreenwakes.md): The total number of screen wakes for the device.
- [totalUnlocks](srdeviceusagereport/totalunlocks.md): The total number of unlocks for the device.
- [totalUnlockDuration](srdeviceusagereport/totalunlockduration.md): The duration of time the device is in an unlocked state.

### Analyzing App Use

- [applicationUsageByCategory](srdeviceusagereport/applicationusagebycategory.md): The usage time of apps per category.
- [SRDeviceUsageReport.ApplicationUsage](srdeviceusagereport/applicationusage.md): An object that describes the user’s app activity over a period of time.
- [SRDeviceUsageReport.CategoryKey](srdeviceusagereport/categorykey.md): Categories of apps or websites that the user uses.

### Analyzing Notification Use

- [notificationUsageByCategory](srdeviceusagereport/notificationusagebycategory.md): The frequency of notifications per category.
- [SRDeviceUsageReport.NotificationUsage](srdeviceusagereport/notificationusage.md): An object that describes notification frequency and the manner in which the user interacts with notifications.

### Analyzing Web Use

- [webUsageByCategory](srdeviceusagereport/webusagebycategory.md): The amount of time the user accesses domains per category.
- [SRDeviceUsageReport.WebUsage](srdeviceusagereport/webusage.md): An object that describes a user’s website usage.

### Getting algorithm information

- [version](srdeviceusagereport/version.md): The version of the algorithm that the system uses to generate the report.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.

# SRDeviceUsageReport (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

The frequency and relative duration that the user uses their device, particular Apple apps, or websites.

## Declaration

```objectivec
@interface SRDeviceUsageReport : NSObject
```

<a id="overview"></a>

## Overview

The [SRSensorDeviceUsageReport](srsensor/deviceusagereport.md) sensor provides this class as its [sample](srfetchresult/sample.md) type.

## Topics

### Summarizing Device Use

- [duration](srdeviceusagereport/duration.md): The duration that the report spans.
- [totalScreenWakes](srdeviceusagereport/totalscreenwakes.md): The total number of screen wakes for the device.
- [totalUnlocks](srdeviceusagereport/totalunlocks.md): The total number of unlocks for the device.
- [totalUnlockDuration](srdeviceusagereport/totalunlockduration.md): The duration of time the device is in an unlocked state.

### Analyzing App Use

- [applicationUsageByCategory](srdeviceusagereport/applicationusagebycategory.md): The usage time of apps per category.
- [SRApplicationUsage](srdeviceusagereport/applicationusage.md): An object that describes the user’s app activity over a period of time.
- [SRDeviceUsageCategoryKey](srdeviceusagereport/categorykey.md): Categories of apps or websites that the user uses.

### Analyzing Notification Use

- [notificationUsageByCategory](srdeviceusagereport/notificationusagebycategory.md): The frequency of notifications per category.
- [SRNotificationUsage](srdeviceusagereport/notificationusage.md): An object that describes notification frequency and the manner in which the user interacts with notifications.

### Analyzing Web Use

- [webUsageByCategory](srdeviceusagereport/webusagebycategory.md): The amount of time the user accesses domains per category.
- [SRWebUsage](srdeviceusagereport/webusage.md): An object that describes a user’s website usage.

### Getting algorithm information

- [version](srdeviceusagereport/version.md): The version of the algorithm that the system uses to generate the report.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Interpreting data

- [SRAmbientLightSample](srambientlightsample.md): The amount of ambient light in the user’s environment.
- [SRKeyboardMetrics](srkeyboardmetrics.md): The configuration of a device’s keyboard and its usage patterns.
- [SRMediaEvent](srmediaevent.md): A user interaction with a media object, such as an image or a video.
- [SRMessagesUsageReport](srmessagesusagereport.md): An object that describes the user’s Messages app activity over a period of time.
- [SRPhoneUsageReport](srphoneusagereport.md): An object that describes the user’s phone activity over a period of time.
- [SRVisit](srvisit.md): The user’s progress in their daily travel routine.
- [SRWristDetection](srwristdetection.md): The configuration of a watch on the wearer’s wrist.
