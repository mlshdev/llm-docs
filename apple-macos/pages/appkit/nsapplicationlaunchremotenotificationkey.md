> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationlaunchremotenotificationkey](https://developer.apple.com/documentation/appkit/nsapplicationlaunchremotenotificationkey)

# NSApplicationLaunchRemoteNotificationKey

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+ (deprecated in 10.8)

Use this key to access the JSON push-notification payload from the user info dictionary of the `didFinishLaunchingNotification` notification.

## Declaration

```objectivec
extern NSString * const NSApplicationLaunchRemoteNotificationKey;
```

<a id="discussion"></a>

## Discussion

> **Deprecated**

> Use [NSApplicationLaunchUserNotificationKey](nsapplication/launchusernotificationuserinfokey.md) instead.

The [NSApplicationDidFinishLaunchingNotification](nsapplication/didfinishlaunchingnotification.md) notification is passed into the delegate method [applicationDidFinishLaunching:](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md) declared by the [NSApplicationDelegate](nsapplicationdelegate.md) protocol to handle this notification.

## See Also

### Keys

- [NSApplicationLaunchIsDefaultLaunchKey](nsapplication/launchisdefaultuserinfokey.md): A Boolean value that indicates if the app launch is a default launch.
- [NSApplicationLaunchUserNotificationKey](nsapplication/launchusernotificationuserinfokey.md): A key that indicates your app was launched because a user activated a notification in the Notification Center.
