> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey/shortcutitem](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey/shortcutitem)

# shortcutItem (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app was launched in response to the user selecting a Home screen quick action.

> Use UIScene lifecycle and UIScene.ConnectionOptions.shortcutItem instead.

## Declaration

```swift
static let shortcutItem: UIApplication.LaunchOptionsKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is the [UIApplicationShortcutItem](../../uiapplicationshortcutitem.md) object representing the action that the user selected.

## See Also

### Accessing launch options

- [bluetoothCentrals](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [bluetoothPeripherals](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [cloudKitShareMetadata](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [eventAttribution](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [location](location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [newsstandDownloads](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [remoteNotification](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [sourceApplication](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [url](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [userActivityDictionary](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [userActivityType](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [annotation](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [localNotification](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

# UIApplicationLaunchOptionsShortcutItemKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.0+ (deprecated in 26.0) · iPadOS 3.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app was launched in response to the user selecting a Home screen quick action.

> Use UIScene lifecycle and UIScene.ConnectionOptions.shortcutItem instead.

## Declaration

```objectivec
extern UIApplicationLaunchOptionsKey const UIApplicationLaunchOptionsShortcutItemKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is the [UIApplicationShortcutItem](../../uiapplicationshortcutitem.md) object representing the action that the user selected.

## See Also

### Accessing launch options

- [UIApplicationLaunchOptionsBluetoothCentralsKey](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [UIApplicationLaunchOptionsBluetoothPeripheralsKey](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [UIApplicationLaunchOptionsCloudKitShareMetadataKey](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [UIApplicationLaunchOptionsEventAttributionKey](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [UIApplicationLaunchOptionsLocationKey](location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [UIApplicationLaunchOptionsNewsstandDownloadsKey](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [UIApplicationLaunchOptionsRemoteNotificationKey](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [UIApplicationLaunchOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [UIApplicationLaunchOptionsURLKey](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [UIApplicationLaunchOptionsUserActivityDictionaryKey](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [UIApplicationLaunchOptionsUserActivityTypeKey](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [UIApplicationLaunchOptionsAnnotationKey](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [UIApplicationLaunchOptionsLocalNotificationKey](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.
