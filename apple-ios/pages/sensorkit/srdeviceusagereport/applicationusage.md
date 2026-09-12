> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/sensorkit/srdeviceusagereport/applicationusage](https://developer.apple.com/documentation/sensorkit/srdeviceusagereport/applicationusage)

# SRDeviceUsageReport.ApplicationUsage (Swift)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s app activity over a period of time.

## Declaration

```swift
class ApplicationUsage
```

<a id="overview"></a>

## Overview

Each instance of this class represents an app in a particular app category. For more information, see [applicationUsageByCategory](applicationusagebycategory.md).

## Topics

### Identifying the App

- [bundleIdentifier](applicationusage/bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](applicationusage/reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](applicationusage/supplementalcategories.md): Categories that provide more information about an app.
- [SRSupplementalCategory](../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.

### Timing App Use

- [usageTime](applicationusage/usagetime.md): The amount of time the user uses the app.
- [relativeStartTime](applicationusage/relativestarttime.md): The time the user starts the app relative to the start time of the first app in a report interval.

### Inspecting Text Input

- [textInputSessions](applicationusage/textinputsessions.md): The text input session types that occur during application usage.
- [SRTextInputSession](../srtextinputsession.md): The characters a user types for a particular keyboard.

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

### Analyzing App Use

- [applicationUsageByCategory](applicationusagebycategory.md): The usage time of apps per category.
- [SRDeviceUsageReport.CategoryKey](categorykey.md): Categories of apps or websites that the user uses.

# SRApplicationUsage (Objective-C)

**Framework:** SensorKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+

An object that describes the user’s app activity over a period of time.

## Declaration

```objectivec
@interface SRApplicationUsage : NSObject
```

<a id="overview"></a>

## Overview

Each instance of this class represents an app in a particular app category. For more information, see [applicationUsageByCategory](applicationusagebycategory.md).

## Topics

### Identifying the App

- [bundleIdentifier](applicationusage/bundleidentifier.md): The bundle identifier of the app in use.
- [reportApplicationIdentifier](applicationusage/reportapplicationidentifier.md): A pseudonymn for a real application identifier.
- [supplementalCategories](applicationusage/supplementalcategories.md): Categories that provide more information about an app.
- [SRSupplementalCategory](../srsupplementalcategory.md): A more detailed category that provides additional context to the app category.

### Timing App Use

- [usageTime](applicationusage/usagetime.md): The amount of time the user uses the app.
- [relativeStartTime](applicationusage/relativestarttime.md): The time the user starts the app relative to the start time of the first app in a report interval.

### Inspecting Text Input

- [textInputSessions](applicationusage/textinputsessions.md): The text input session types that occur during application usage.
- [SRTextInputSession](../srtextinputsession.md): The characters a user types for a particular keyboard.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Analyzing App Use

- [applicationUsageByCategory](applicationusagebycategory.md): The usage time of apps per category.
- [SRDeviceUsageCategoryKey](categorykey.md): Categories of apps or websites that the user uses.
