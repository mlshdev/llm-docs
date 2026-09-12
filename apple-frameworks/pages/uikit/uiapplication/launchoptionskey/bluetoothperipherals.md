> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey/bluetoothperipherals](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey/bluetoothperipherals)

# bluetoothPeripherals (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.

> Store restoration identifiers and reinstantiate peripheral managers with those identifiers on app launch to resume previous functionality.

## Declaration

```swift
static let bluetoothPeripherals: UIApplication.LaunchOptionsKey
```

<a id="Discussion"></a>

## Discussion

The presence of this key indicates that the app previously had one or more [CBPeripheralManager](../../../corebluetooth/cbperipheralmanager.md) objects and was relaunched by the Bluetooth system to continue actions associated with those objects. The value of this key is an [NSArray](../../../foundation/nsarray.md) object containing one or more [NSString](../../../foundation/nsstring.md) objects.

Each string in the array represents the restoration identifier for a peripheral manager object. This is the same string you assigned to the [CBPeripheralManagerOptionRestoreIdentifierKey](../../../corebluetooth/cbperipheralmanageroptionrestoreidentifierkey.md) key when you initialized the peripheral manager object previously. The system provides the restoration identifiers only for peripheral managers that had published or advertised services.

## See Also

### Accessing launch options

- [bluetoothCentrals](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
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
- [localNotification](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

# UIApplicationLaunchOptionsBluetoothPeripheralsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 7.0+ (deprecated in 26.0) · iPadOS 7.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0)

A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.

> Store restoration identifiers and reinstantiate peripheral managers with those identifiers on app launch to resume previous functionality.

## Declaration

```objectivec
extern UIApplicationLaunchOptionsKey const UIApplicationLaunchOptionsBluetoothPeripheralsKey;
```

<a id="Discussion"></a>

## Discussion

The presence of this key indicates that the app previously had one or more [CBPeripheralManager](../../../corebluetooth/cbperipheralmanager.md) objects and was relaunched by the Bluetooth system to continue actions associated with those objects. The value of this key is an [NSArray](../../../foundation/nsarray.md) object containing one or more [NSString](../../../foundation/nsstring.md) objects.

Each string in the array represents the restoration identifier for a peripheral manager object. This is the same string you assigned to the [CBPeripheralManagerOptionRestoreIdentifierKey](../../../corebluetooth/cbperipheralmanageroptionrestoreidentifierkey.md) key when you initialized the peripheral manager object previously. The system provides the restoration identifiers only for peripheral managers that had published or advertised services.

## See Also

### Accessing launch options

- [UIApplicationLaunchOptionsBluetoothCentralsKey](bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
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
- [UIApplicationLaunchOptionsLocalNotificationKey](localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.
