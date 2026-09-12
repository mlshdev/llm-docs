> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/launchoptionskey](https://developer.apple.com/documentation/uikit/uiapplication/launchoptionskey)

# UIApplication.LaunchOptionsKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

## Declaration

```swift
struct LaunchOptionsKey
```

<a id="overview"></a>

## Overview

These keys are passed to the options dictionary that’s passed to the [application(\_:willFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) and [application(\_:didFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) methods of the app delegate.

## Topics

### Accessing launch options

- [bluetoothCentrals](launchoptionskey/bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [bluetoothPeripherals](launchoptionskey/bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [cloudKitShareMetadata](launchoptionskey/cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [eventAttribution](launchoptionskey/eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../uieventattribution.md) to go along with a URL open on launch
- [location](launchoptionskey/location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [newsstandDownloads](launchoptionskey/newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [remoteNotification](launchoptionskey/remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [shortcutItem](launchoptionskey/shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [sourceApplication](launchoptionskey/sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [url](launchoptionskey/url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [userActivityDictionary](launchoptionskey/useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [userActivityType](launchoptionskey/useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [annotation](launchoptionskey/annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [localNotification](launchoptionskey/localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

### Creating a launch options key

- [init(rawValue:)](launchoptionskey/init%28rawvalue_%29.md): Creates a launch options key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Initializing the app

- [application(\_:willFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application(\_:didFinishLaunchingWithOptions:)](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [didFinishLaunchingNotification](didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.

# UIApplicationLaunchOptionsKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

The keys you use to access values in the launch options dictionary that the system passes to your app at initialization.

## Declaration

```objectivec
typedef NSString * UIApplicationLaunchOptionsKey;
```

<a id="overview"></a>

## Overview

These keys are passed to the options dictionary that’s passed to the [application:willFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md) and [application:didFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md) methods of the app delegate.

## Topics

### Accessing launch options

- [UIApplicationLaunchOptionsBluetoothCentralsKey](launchoptionskey/bluetoothcentrals.md): Deprecated. A key indicating that the app was relaunched to handle Bluetooth-related events.
- [UIApplicationLaunchOptionsBluetoothPeripheralsKey](launchoptionskey/bluetoothperipherals.md): Deprecated. A key indicating that the app should continue actions associated with its Bluetooth peripheral objects.
- [UIApplicationLaunchOptionsCloudKitShareMetadataKey](launchoptionskey/cloudkitsharemetadata.md): Deprecated. A key indicating that the app received a CloudKit share invitation.
- [UIApplicationLaunchOptionsEventAttributionKey](launchoptionskey/eventattribution.md): Deprecated. UserInfo contains a [UIEventAttribution](../uieventattribution.md) to go along with a URL open on launch
- [UIApplicationLaunchOptionsLocationKey](launchoptionskey/location.md): Deprecated. A key indicating that the app was launched to handle an incoming location event.
- [UIApplicationLaunchOptionsNewsstandDownloadsKey](launchoptionskey/newsstanddownloads.md): Deprecated. A key indicating that the app was launched to process newly downloaded Newsstand assets.
- [UIApplicationLaunchOptionsRemoteNotificationKey](launchoptionskey/remotenotification.md): Deprecated. A key indicating that a remote notification is available for the app to process.
- [UIApplicationLaunchOptionsShortcutItemKey](launchoptionskey/shortcutitem.md): Deprecated. A key indicating that the app was launched in response to the user selecting a Home screen quick action.
- [UIApplicationLaunchOptionsSourceApplicationKey](launchoptionskey/sourceapplication.md): Deprecated. A key indicating that another app requested the launch of your app.
- [UIApplicationLaunchOptionsURLKey](launchoptionskey/url.md): Deprecated. A key indicating that the app was launched so that it could open the specified URL.
- [UIApplicationLaunchOptionsUserActivityDictionaryKey](launchoptionskey/useractivitydictionary.md): Deprecated. A key indicating a dictionary associated with an activity that the user wants to continue.
- [UIApplicationLaunchOptionsUserActivityTypeKey](launchoptionskey/useractivitytype.md): Deprecated. A key indicating the type of user activity that the user wants to continue.
- [UIApplicationLaunchOptionsAnnotationKey](launchoptionskey/annotation.md): Deprecated. A key indicating that the URL passed to your app contained custom annotation data from the source app.
- [UIApplicationLaunchOptionsLocalNotificationKey](launchoptionskey/localnotification.md): Deprecated. A key indicating that the app was launched to handle a local notification.

## See Also

### Initializing the app

- [application:willFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__willfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process has begun.
- [application:didFinishLaunchingWithOptions:](../uiapplicationdelegate/application%28__didfinishlaunchingwithoptions_%29.md): Tells the delegate that the launch process is almost done and the app is almost ready to run.
- [UIApplicationDidFinishLaunchingNotification](didfinishlaunchingnotification.md): A notification that posts immediately after the app finishes launching.
