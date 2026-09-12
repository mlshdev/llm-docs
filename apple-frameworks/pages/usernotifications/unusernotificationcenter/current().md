> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usernotifications/unusernotificationcenter/current()](https://developer.apple.com/documentation/usernotifications/unusernotificationcenter/current())

# current() (Swift)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns your app’s notification center.

## Declaration

```swift
class func current() -> UNUserNotificationCenter
```

<a id="return-value"></a>

## Return Value

The notification center object to use.

<a id="Discussion"></a>

## Discussion

Always use this method to retrieve the shared notification center object for your app. Do not try to create instances of the [UNUserNotificationCenter](../unusernotificationcenter.md) class directly.

## See Also

### Managing the notification center

- [getNotificationSettings(completionHandler:)](getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.
- [setBadgeCount(\_:withCompletionHandler:)](setbadgecount%28__withcompletionhandler_%29.md): Updates the badge count for your app’s icon.

# currentNotificationCenter (Objective-C)

**Framework:** User Notifications  
**Kind:** Type Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 3.0+

Returns your app’s notification center.

## Declaration

```objectivec
+ (UNUserNotificationCenter *) currentNotificationCenter;
```

<a id="return-value"></a>

## Return Value

The notification center object to use.

<a id="Discussion"></a>

## Discussion

Always use this method to retrieve the shared notification center object for your app. Do not try to create instances of the [UNUserNotificationCenter](../unusernotificationcenter.md) class directly.

## See Also

### Managing the notification center

- [getNotificationSettingsWithCompletionHandler:](getnotificationsettings%28completionhandler_%29.md): Retrieves the authorization and feature-related settings for your app.
- [setBadgeCount:withCompletionHandler:](setbadgecount%28__withcompletionhandler_%29.md): Updates the badge count for your app’s icon.
