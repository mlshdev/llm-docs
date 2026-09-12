> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey/localnotification](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey/localnotification)

# localNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key indicating that the app was launched to handle a local notification.

> Use [userNotificationCenter(\_:didReceive:withCompletionHandler:)](../../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) instead.

## Declaration

```swift
static let localNotification: UIApplication.LaunchOptionsKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is the [UILocalNotification](../../uilocalnotification.md) object that was triggered. For additional information about handling local notifications, see the [application(\_:didReceive:)](../../uiapplicationdelegate/application%28__didreceive_%29.md) method.

This key is also used to access the same value in the `userInfo` dictionary of the notification named [didFinishLaunchingNotification](../didfinishlaunchingnotification.md).

## See Also

### Accessing launch options

- [bluetoothCentrals](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [bluetoothPeripherals](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [cloudKitShareMetadata](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [eventAttribution](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [location](location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [newsstandDownloads](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [remoteNotification](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [shortcutItem](shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [sourceApplication](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [url](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [userActivityDictionary](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [userActivityType](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [annotation](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.

# UIApplicationLaunchOptionsLocalNotificationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 10.0) · iPadOS 4.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A key indicating that the app was launched to handle a local notification.

> Use [userNotificationCenter:didReceiveNotificationResponse:withCompletionHandler:](../../../usernotifications/unusernotificationcenterdelegate/usernotificationcenter%28__didreceive_withcompletionhandler_%29.md) instead.

## Declaration

```objectivec
extern UIApplicationLaunchOptionsKey const UIApplicationLaunchOptionsLocalNotificationKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is the [UILocalNotification](../../uilocalnotification.md) object that was triggered. For additional information about handling local notifications, see the [application:didReceiveLocalNotification:](../../uiapplicationdelegate/application%28__didreceive_%29.md) method.

This key is also used to access the same value in the `userInfo` dictionary of the notification named [UIApplicationDidFinishLaunchingNotification](../didfinishlaunchingnotification.md).

## See Also

### Accessing launch options

- [UIApplicationLaunchOptionsBluetoothCentralsKey](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [UIApplicationLaunchOptionsBluetoothPeripheralsKey](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [UIApplicationLaunchOptionsCloudKitShareMetadataKey](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [UIApplicationLaunchOptionsEventAttributionKey](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [UIApplicationLaunchOptionsLocationKey](location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [UIApplicationLaunchOptionsNewsstandDownloadsKey](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [UIApplicationLaunchOptionsRemoteNotificationKey](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [UIApplicationLaunchOptionsShortcutItemKey](shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [UIApplicationLaunchOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [UIApplicationLaunchOptionsURLKey](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [UIApplicationLaunchOptionsUserActivityDictionaryKey](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [UIApplicationLaunchOptionsUserActivityTypeKey](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [UIApplicationLaunchOptionsAnnotationKey](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
