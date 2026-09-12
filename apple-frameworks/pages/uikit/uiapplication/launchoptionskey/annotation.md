> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey/annotation](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey/annotation)

# annotation (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A key indicating that the URL passed to your app contained custom annotation data from the source app.

> The system doesn’t use this key.

## Declaration

```swift
static let annotation: UIApplication.LaunchOptionsKey
```

<a id="Discussion"></a>

## Discussion

The presence of this key indicates that custom data was provided by the app that requested the opening of the URL. The value of this key is a property-list object containing the custom data. The same object is also passed to the annotation parameter of the  [application(\_:open:sourceApplication:annotation:)](../../uiapplicationdelegate/application%28__open_sourceapplication_annotation_%29.md) method. The contents of this property-list object are specific to the app that made the request.

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
- [localNotification](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

# UIApplicationLaunchOptionsAnnotationKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 3.2+ (deprecated in 16.0) · iPadOS 3.2+ (deprecated in 16.0) · Mac Catalyst 13.1+ (deprecated in 16.0) · tvOS  (deprecated in 16.0)

A key indicating that the URL passed to your app contained custom annotation data from the source app.

> The system doesn’t use this key.

## Declaration

```objectivec
extern UIApplicationLaunchOptionsKey const UIApplicationLaunchOptionsAnnotationKey;
```

<a id="Discussion"></a>

## Discussion

The presence of this key indicates that custom data was provided by the app that requested the opening of the URL. The value of this key is a property-list object containing the custom data. The same object is also passed to the annotation parameter of the  [application:openURL:sourceApplication:annotation:](../../uiapplicationdelegate/application%28__open_sourceapplication_annotation_%29.md) method. The contents of this property-list object are specific to the app that made the request.

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
- [UIApplicationLaunchOptionsLocalNotificationKey](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.
