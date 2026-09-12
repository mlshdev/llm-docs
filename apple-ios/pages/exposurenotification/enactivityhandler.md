> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enactivityhandler](https://developer.apple.com/documentation/exposurenotification/enactivityhandler)

# ENActivityHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler the system invokes to report activities that occurred while the app wasn’t running.

> No longer supported.

## Declaration

```swift
typealias ENActivityHandler = (ENActivityFlags) -> Void
```

## Parameters

- `activityFlags`: The flags indicating what activity occured while the app wasn’t running.

## See Also

### Activating the Manager

- [activate(completionHandler:)](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled(\_:completionHandler:)](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

# ENActivityHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Type Alias  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler the system invokes to report activities that occurred while the app wasn’t running.

> No longer supported.

## Declaration

```objectivec
typedef void (^)(enum ENActivityFlags) ENActivityHandler;
```

## Parameters

- `activityFlags`: The flags indicating what activity occured while the app wasn’t running.

## See Also

### Activating the Manager

- [activateWithCompletionHandler:](enmanager/activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [activityHandler](enmanager/activityhandler.md): Deprecated. The handler that the framework invokes when the app activates a notification manager.
- [ENActivityFlags](enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled:completionHandler:](enmanager/setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.
