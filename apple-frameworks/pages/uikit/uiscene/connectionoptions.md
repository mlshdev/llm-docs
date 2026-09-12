> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscene/connectionoptions](https://developer.apple.com/documentation/uikit/uiscene/connectionoptions)

# UIScene.ConnectionOptions (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing information about the reasons why UIKit created the scene.

## Declaration

```swift
@MainActor class ConnectionOptions
```

<a id="overview"></a>

## Overview

UIKit creates scenes for many reasons. It might do so in response to a Handoff request or a request to open a URL. When there’s a specific reason for creating a scene, UIKit fills a [UIScene.ConnectionOptions](connectionoptions.md) object with the associated data and passes it to your delegate at connection time. Use the information in this object to respond accordingly. For example, open the URLs that UIKit provides, and display their contents in the scene.

Don’t create [UIScene.ConnectionOptions](connectionoptions.md) objects directly. UIKit creates [UIScene.ConnectionOptions](connectionoptions.md) objects for you and passes them to the [scene(\_:willConnectTo:options:)](../uiscenedelegate/scene%28__willconnectto_options_%29.md) method of your scene delegate.

## Topics

### Configuring the scene’s interface

- [userActivities](connectionoptions/useractivities.md): Information about user activities that you can use to configure your scene’s interface.

### Handling quick actions

- [shortcutItem](connectionoptions/shortcutitem.md): The user-selected action to perform.

### Opening URLs

- [urlContexts](connectionoptions/urlcontexts.md): The URLs to open, along with metadata specifying how to open them.

### Responding to a Handoff request

- [handoffUserActivityType](connectionoptions/handoffuseractivitytype.md): The type of the pending Handoff activity.

### Accepting a CloudKit share

- [cloudKitShareMetadata](connectionoptions/cloudkitsharemetadata.md): Information about the CloudKit data that’s now available to the app.

### Responding to notifications

- [notificationResponse](connectionoptions/notificationresponse.md): A person’s response to one of your app’s notifications.

### Preparing for Near-Field Communication (NFC)

- [nfcEvent](connectionoptions/nfcevent.md): An event, such as a gesture or exposure to a card reader’s RF field, that creates a Near-Field Communication (NFC) scene.

### Getting the source app

- [sourceApplication](connectionoptions/sourceapplication.md): The bundle ID of the app that originated the request.

### Getting scene accessory context

- [sceneAccessoryUserInfo](connectionoptions/sceneaccessoryuserinfo.md): An optional user info object, provided when creating the `UISceneAccessory` for this scene accessory.

### Instance Properties

- [appIntent](connectionoptions/appintent.md): The `AppIntent` that triggered scene creation `AppIntentSceneDelegate.scene(_:willPerform:)` will always be called after scene connection
- [credentialSessionEvent](connectionoptions/credentialsessionevent.md): A CredentialSession event has triggered a UIKit scene creation.
- [gameControllerActivationContext](connectionoptions/gamecontrolleractivationcontext.md)
- [marketplaceDisplayOption](connectionoptions/marketplacedisplayoption.md)
- [shouldHandleActiveWorkoutRecovery](connectionoptions/shouldhandleactiveworkoutrecovery.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Connecting and disconnecting the scene

- [scene(\_:willConnectTo:options:)](../uiscenedelegate/scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [sceneDidDisconnect(\_:)](../uiscenedelegate/scenediddisconnect%28__%29.md): Tells the delegate that UIKit removed a scene from your app.

# UISceneConnectionOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+

A data object containing information about the reasons why UIKit created the scene.

## Declaration

```objectivec
@interface UISceneConnectionOptions : NSObject
```

<a id="overview"></a>

## Overview

UIKit creates scenes for many reasons. It might do so in response to a Handoff request or a request to open a URL. When there’s a specific reason for creating a scene, UIKit fills a [UISceneConnectionOptions](connectionoptions.md) object with the associated data and passes it to your delegate at connection time. Use the information in this object to respond accordingly. For example, open the URLs that UIKit provides, and display their contents in the scene.

Don’t create [UISceneConnectionOptions](connectionoptions.md) objects directly. UIKit creates [UISceneConnectionOptions](connectionoptions.md) objects for you and passes them to the [scene:willConnectToSession:options:](../uiscenedelegate/scene%28__willconnectto_options_%29.md) method of your scene delegate.

## Topics

### Configuring the scene’s interface

- [userActivities](connectionoptions/useractivities.md): Information about user activities that you can use to configure your scene’s interface.

### Handling quick actions

- [shortcutItem](connectionoptions/shortcutitem.md): The user-selected action to perform.

### Opening URLs

- [URLContexts](connectionoptions/urlcontexts.md): The URLs to open, along with metadata specifying how to open them.

### Responding to a Handoff request

- [handoffUserActivityType](connectionoptions/handoffuseractivitytype.md): The type of the pending Handoff activity.

### Accepting a CloudKit share

- [cloudKitShareMetadata](connectionoptions/cloudkitsharemetadata.md): Information about the CloudKit data that’s now available to the app.

### Responding to notifications

- [notificationResponse](connectionoptions/notificationresponse.md): A person’s response to one of your app’s notifications.

### Getting the source app

- [sourceApplication](connectionoptions/sourceapplication.md): The bundle ID of the app that originated the request.

### Getting scene accessory context

- [sceneAccessoryUserInfo](connectionoptions/sceneaccessoryuserinfo.md): An optional user info object, provided when creating the `UISceneAccessory` for this scene accessory.

### Instance Properties

- [gameControllerActivationContext](connectionoptions/gamecontrolleractivationcontext.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Connecting and disconnecting the scene

- [scene:willConnectToSession:options:](../uiscenedelegate/scene%28__willconnectto_options_%29.md): Tells the delegate about the addition of a scene to the app.
- [sceneDidDisconnect:](../uiscenedelegate/scenediddisconnect%28__%29.md): Tells the delegate that UIKit removed a scene from your app.
