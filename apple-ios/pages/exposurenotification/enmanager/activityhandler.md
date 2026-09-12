> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/exposurenotification/enmanager/activityhandler](https://developer.apple.com/documentation/exposurenotification/enmanager/activityhandler)

# activityHandler (Swift)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler that the framework invokes when the app activates a notification manager.

> No longer supported.

## Declaration

```swift
var activityHandler: ENActivityHandler? { get set }
```

<a id="Discussion"></a>

## Discussion

When the app launches, it creates an [ENManager](../enmanager.md) instance, sets this handler, and then activates the manager.

## See Also

### Activating the Manager

- [activate(completionHandler:)](activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled(\_:completionHandler:)](setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.

# activityHandler (Objective-C)

**Framework:** Exposure Notification  
**Kind:** Instance Property  
**Availability:** iOS 12.5+ (deprecated in 27.0) · iPadOS 12.5+ (deprecated in 27.0) · Mac Catalyst 12.5+ (deprecated in 27.0)

The handler that the framework invokes when the app activates a notification manager.

> No longer supported.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) ENActivityHandler activityHandler;
```

<a id="Discussion"></a>

## Discussion

When the app launches, it creates an [ENManager](../enmanager.md) instance, sets this handler, and then activates the manager.

## See Also

### Activating the Manager

- [activateWithCompletionHandler:](activate%28completionhandler_%29.md): Deprecated. Prepares the manager for use.
- [ENActivityHandler](../enactivityhandler.md): Deprecated. The handler the system invokes to report activities that occurred while the app wasn’t running.
- [ENActivityFlags](../enactivityflags.md): Deprecated. Activities that occur while the app isn’t running.
- [setExposureNotificationEnabled:completionHandler:](setexposurenotificationenabled%28__completionhandler_%29.md): Deprecated. Enables or disables exposure notification.
