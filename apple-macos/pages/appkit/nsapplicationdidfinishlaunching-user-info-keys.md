> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdidfinishlaunching-user-info-keys](https://developer.apple.com/documentation/appkit/nsapplicationdidfinishlaunching-user-info-keys)

# NSApplicationDidFinishLaunching User Info Keys (Swift)

**Framework:** AppKit  
**Kind:** API Collection

The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

## Topics

### Keys

- [launchIsDefaultUserInfoKey](nsapplication/launchisdefaultuserinfokey.md): A Boolean value that indicates if the app launch is a default launch.
- [launchUserNotificationUserInfoKey](nsapplication/launchusernotificationuserinfokey.md): A key that indicates your app was launched because a user activated a notification in the Notification Center.

## See Also

### Launching Applications

- [applicationWillFinishLaunching(\_:)](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching(\_:)](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.

# NSApplicationDidFinishLaunching User Info Keys (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

## Topics

### Keys

- [NSApplicationLaunchRemoteNotificationKey](nsapplicationlaunchremotenotificationkey.md): Deprecated. Use this key to access the JSON push-notification payload from the user info dictionary of the `didFinishLaunchingNotification` notification.
- [NSApplicationLaunchIsDefaultLaunchKey](nsapplication/launchisdefaultuserinfokey.md): A Boolean value that indicates if the app launch is a default launch.
- [NSApplicationLaunchUserNotificationKey](nsapplication/launchusernotificationuserinfokey.md): A key that indicates your app was launched because a user activated a notification in the Notification Center.

## See Also

### Launching Applications

- [applicationWillFinishLaunching:](nsapplicationdelegate/applicationwillfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is about to complete.
- [applicationDidFinishLaunching:](nsapplicationdelegate/applicationdidfinishlaunching%28__%29.md): Tells the delegate that the app’s initialization is complete but it hasn’t received its first event.
