> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enactivityflags](https://developer.apple.com/documentation/exposurenotification/enactivityflags)

# ENActivityFlags (Swift)

**Framework:** Exposure Notification  
**Kind:** Structure  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Activities that occur while the app isn’t running.

> No longer supported.

## Declaration

```swift
struct ENActivityFlags
```

<a id="overview"></a>

## Overview

> **Important**

>  This symbol is available in iOS 12.5, and in iOS 13.6 and later.

## Topics

### Initializers

- [init(rawValue:)](enactivityflags/init%28rawvalue_%29.md): Deprecated. Initialize the structure.

### Type Properties

- [periodicRun](enactivityflags/periodicrun.md): Deprecated. The property that specifies launching the app in the background for periodic operation in iOS 12.5.
- [preAuthorizedKeyReleaseNotificationTapped](enactivityflags/preauthorizedkeyreleasenotificationtapped.md): Deprecated. The property that specifies launching the app in the foreground to display preauthorized key-release information.
- [reserved1](enactivityflags/reserved1.md): Deprecated. This property is reserved.
- [reserved2](enactivityflags/reserved2.md): Deprecated. This property is reserved.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Activating the Manager

- [activate(completionHandler:)](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [setExposureNotificationEnabled(\_:completionHandler:)](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

# ENActivityFlags (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Enumeration  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

Activities that occur while the app isn’t running.

> No longer supported.

## Declaration

```objectivec
enum ENActivityFlags : uint32_t;
```

<a id="overview"></a>

## Overview

> **Important**

>  This symbol is available in iOS 12.5, and in iOS 13.6 and later.

## Topics

### Type Properties

- [ENActivityFlagsPeriodicRun](enactivityflags/periodicrun.md): Deprecated. The property that specifies launching the app in the background for periodic operation in iOS 12.5.
- [ENActivityFlagsPreAuthorizedKeyReleaseNotificationTapped](enactivityflags/preauthorizedkeyreleasenotificationtapped.md): Deprecated. The property that specifies launching the app in the foreground to display preauthorized key-release information.
- [ENActivityFlagsReserved1](enactivityflags/reserved1.md): Deprecated. This property is reserved.
- [ENActivityFlagsReserved2](enactivityflags/reserved2.md): Deprecated. This property is reserved.

## See Also

### Activating the Manager

- [activateWithCompletionHandler:](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityHandler](enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [setExposureNotificationEnabled:completionHandler:](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.
