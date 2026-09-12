> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey/location](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey/location)

# location (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app was launched to handle an incoming location event.

> Adopt CLLocationUpdate or CLMonitor, or use CLLocationManagerDelegate from CoreLocation to handle expected location events after scene connection.

## Declaration

```swift
static let location: UIApplication.LaunchOptionsKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. You should use the presence of this key as a signal to create a [CLLocationManager](../../../corelocation/cllocationmanager.md) object and start location services again. Location data is delivered only to the location manager delegate and not using this key.

## See Also

### Accessing launch options

- [bluetoothCentrals](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [bluetoothPeripherals](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [cloudKitShareMetadata](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [eventAttribution](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [newsstandDownloads](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [remoteNotification](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [shortcutItem](shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [sourceApplication](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [url](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [userActivityDictionary](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [userActivityType](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [annotation](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [localNotification](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

# UIApplicationLaunchOptionsLocationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ (deprecated in 26.0) · iPadOS 4.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app was launched to handle an incoming location event.

> Adopt CLLocationUpdate or CLMonitor, or use CLLocationManagerDelegate from CoreLocation to handle expected location events after scene connection.

## Declaration

```objectivec
extern UIApplicationLaunchOptionsKey const UIApplicationLaunchOptionsLocationKey;
```

<a id="Discussion"></a>

## Discussion

The value of this key is an [NSNumber](../../../foundation/nsnumber.md) object containing a Boolean value. You should use the presence of this key as a signal to create a [CLLocationManager](../../../corelocation/cllocationmanager.md) object and start location services again. Location data is delivered only to the location manager delegate and not using this key.

## See Also

### Accessing launch options

- [UIApplicationLaunchOptionsBluetoothCentralsKey](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [UIApplicationLaunchOptionsBluetoothPeripheralsKey](bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [UIApplicationLaunchOptionsCloudKitShareMetadataKey](cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [UIApplicationLaunchOptionsEventAttributionKey](eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../../uieventattribution.md) to go along with a URL open on launch
- [UIApplicationLaunchOptionsNewsstandDownloadsKey](newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [UIApplicationLaunchOptionsRemoteNotificationKey](remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [UIApplicationLaunchOptionsShortcutItemKey](shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [UIApplicationLaunchOptionsSourceApplicationKey](sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [UIApplicationLaunchOptionsURLKey](url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [UIApplicationLaunchOptionsUserActivityDictionaryKey](useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [UIApplicationLaunchOptionsUserActivityTypeKey](useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [UIApplicationLaunchOptionsAnnotationKey](annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [UIApplicationLaunchOptionsLocalNotificationKey](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.
