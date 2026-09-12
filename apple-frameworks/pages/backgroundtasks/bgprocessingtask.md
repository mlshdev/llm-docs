> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/backgroundtasks/bgprocessingtask](https://developer.apple.com/documentation/backgroundtasks/bgprocessingtask)

# BGProcessingTask (Swift)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A time-consuming processing task that runs while the app is in the background.

## Declaration

```swift
class BGProcessingTask
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

<a id="overview"></a>

## Overview

Use processing tasks for long data updates, processing data, and app maintenance. Although processing tasks can run for minutes, the system can interrupt the process. Add an expiration handler by setting [expirationHandler](bgtask/expirationhandler.md) for any required cleanup.

Executing processing tasks requires setting the `processing` [UIBackgroundModes](../bundleresources/information-property-list/uibackgroundmodes.md) capability. For information on setting this capability, see [BGTaskScheduler](bgtaskscheduler.md).

Processing tasks run only when the device is idle. The system terminates any background processing tasks running when the user starts using the device. Background refresh tasks aren’t affected.

## Relationships

### Inherits From

- [BGTask](bgtask.md)

### Inherited By

- [BGHealthResearchTask](bghealthresearchtask.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Background tasks

- [Using background tasks to update your app](../uikit/using-background-tasks-to-update-your-app.md): Configure your app to perform tasks in the background to make efficient use of processing time and power.
- [Refreshing and Maintaining Your App Using Background Tasks](refreshing-and-maintaining-your-app-using-background-tasks.md): Use scheduled background tasks for refreshing your app content and for performing maintenance.
- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md): Select the best method of scheduling background runtime for your app.
- [BGAppRefreshTask](bgapprefreshtask.md): An object representing a short task typically used to refresh content that’s run while the app is in the background.
- [BGHealthResearchTask](bghealthresearchtask.md): A time-consuming, necessary processing task that runs while the app is in the background to prepare data essential to a health research study.

# BGProcessingTask (Objective-C)

**Framework:** Background Tasks  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A time-consuming processing task that runs while the app is in the background.

## Declaration

```objectivec
@interface BGProcessingTask : BGTask
```

## Mentioned In

- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md)

<a id="overview"></a>

## Overview

Use processing tasks for long data updates, processing data, and app maintenance. Although processing tasks can run for minutes, the system can interrupt the process. Add an expiration handler by setting [expirationHandler](bgtask/expirationhandler.md) for any required cleanup.

Executing processing tasks requires setting the `processing` [UIBackgroundModes](../bundleresources/information-property-list/uibackgroundmodes.md) capability. For information on setting this capability, see [BGTaskScheduler](bgtaskscheduler.md).

Processing tasks run only when the device is idle. The system terminates any background processing tasks running when the user starts using the device. Background refresh tasks aren’t affected.

## Relationships

### Inherits From

- [BGTask](bgtask.md)

### Inherited By

- [BGHealthResearchTask](bghealthresearchtask.md)

## See Also

### Background tasks

- [Using background tasks to update your app](../uikit/using-background-tasks-to-update-your-app.md): Configure your app to perform tasks in the background to make efficient use of processing time and power.
- [Refreshing and Maintaining Your App Using Background Tasks](refreshing-and-maintaining-your-app-using-background-tasks.md): Use scheduled background tasks for refreshing your app content and for performing maintenance.
- [Choosing Background Strategies for Your App](choosing-background-strategies-for-your-app.md): Select the best method of scheduling background runtime for your app.
- [BGAppRefreshTask](bgapprefreshtask.md): An object representing a short task typically used to refresh content that’s run while the app is in the background.
- [BGHealthResearchTask](bghealthresearchtask.md): A time-consuming, necessary processing task that runs while the app is in the background to prepare data essential to a health research study.
