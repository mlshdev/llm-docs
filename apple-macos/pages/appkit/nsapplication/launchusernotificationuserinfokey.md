> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/launchusernotificationuserinfokey](https://developer.apple.com/documentation/appkit/nsapplication/launchusernotificationuserinfokey)

# launchUserNotificationUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.8+

A key that indicates your app was launched because a user activated a notification in the Notification Center.

## Declaration

```swift
class let launchUserNotificationUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The [launchUserNotificationUserInfoKey](launchusernotificationuserinfokey.md) key is an [NSUserNotification](https://developer.apple.com/documentation/foundation/nsusernotification) object that is present in the [userInfo](https://developer.apple.com/documentation/foundation/nsnotification/userinfo) dictionary of the [didFinishLaunchingNotification](didfinishlaunchingnotification.md) notification if your app was launched because a user activated a notification in the Notification Center. To access the notification payload in the [userInfo](https://developer.apple.com/documentation/foundation/nsnotification/userinfo) dictionary, you can use code like this:

```objc
NSUserNotification *userNotification = [[myNotification userInfo]
    objectForKey:NSApplicationLaunchUserNotificationKey];
    if (userNotification) {
        // The app was launched by a user selection from Notification Center.
    }
```

## See Also

### Keys

- [launchIsDefaultUserInfoKey](launchisdefaultuserinfokey.md): A Boolean value that indicates if the app launch is a default launch.

# NSApplicationLaunchUserNotificationKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.8+

A key that indicates your app was launched because a user activated a notification in the Notification Center.

## Declaration

```objectivec
extern NSString * const NSApplicationLaunchUserNotificationKey;
```

<a id="Discussion"></a>

## Discussion

The [NSApplicationLaunchUserNotificationKey](launchusernotificationuserinfokey.md) key is an [NSUserNotification](https://developer.apple.com/documentation/foundation/nsusernotification) object that is present in the [userInfo](https://developer.apple.com/documentation/foundation/nsnotification/userinfo) dictionary of the [NSApplicationDidFinishLaunchingNotification](didfinishlaunchingnotification.md) notification if your app was launched because a user activated a notification in the Notification Center. To access the notification payload in the [userInfo](https://developer.apple.com/documentation/foundation/nsnotification/userinfo) dictionary, you can use code like this:

```objc
NSUserNotification *userNotification = [[myNotification userInfo]
    objectForKey:NSApplicationLaunchUserNotificationKey];
    if (userNotification) {
        // The app was launched by a user selection from Notification Center.
    }
```

## See Also

### Keys

- [NSApplicationLaunchRemoteNotificationKey](../nsapplicationlaunchremotenotificationkey.md): Deprecated. Use this key to access the JSON push-notification payload from the user info dictionary of the `didFinishLaunchingNotification` notification.
- [NSApplicationLaunchIsDefaultLaunchKey](launchisdefaultuserinfokey.md): A Boolean value that indicates if the app launch is a default launch.
