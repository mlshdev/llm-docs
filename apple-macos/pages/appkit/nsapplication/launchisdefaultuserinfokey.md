> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplication/launchisdefaultuserinfokey](https://developer.apple.com/documentation/appkit/nsapplication/launchisdefaultuserinfokey)

# launchIsDefaultUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A Boolean value that indicates if the app launch is a default launch.

## Declaration

```swift
class let launchIsDefaultUserInfoKey: String
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing a Boolean value. The value is [false](https://developer.apple.com/documentation/swift/false) if the app was launched to open or print a file, to perform a Service action, if the app had saved state that will be restored, or if the app launch was in some other sense not a default launch. Otherwise its value will be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Keys

- [launchUserNotificationUserInfoKey](launchusernotificationuserinfokey.md): A key that indicates your app was launched because a user activated a notification in the Notification Center.

# NSApplicationLaunchIsDefaultLaunchKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

A Boolean value that indicates if the app launch is a default launch.

## Declaration

```objectivec
extern NSString * const NSApplicationLaunchIsDefaultLaunchKey;
```

<a id="discussion"></a>

## Discussion

The value for this key is an [NSNumber](https://developer.apple.com/documentation/foundation/nsnumber) containing a Boolean value. The value is [false](https://developer.apple.com/documentation/swift/false) if the app was launched to open or print a file, to perform a Service action, if the app had saved state that will be restored, or if the app launch was in some other sense not a default launch. Otherwise its value will be [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Keys

- [NSApplicationLaunchRemoteNotificationKey](../nsapplicationlaunchremotenotificationkey.md): Deprecated. Use this key to access the JSON push-notification payload from the user info dictionary of the `didFinishLaunchingNotification` notification.
- [NSApplicationLaunchUserNotificationKey](launchusernotificationuserinfokey.md): A key that indicates your app was launched because a user activated a notification in the Notification Center.
