> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/targetcontentprovidingintent](https://developer.apple.com/documentation/appintents/targetcontentprovidingintent)

# TargetContentProvidingIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

An interface that provides a custom identifier for an app intent.

## Declaration

```swift
protocol TargetContentProvidingIntent : AppIntent
```

## Mentioned In

- [Directing app intents to your app’s scenes](directing-app-intents-to-your-apps-scenes.md)
- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="overview"></a>

## Overview

In a SwiftUI app, adopt this protocol in an app intent that affects the contents of your app’s interface. The protocol provides an identifier string that you use to describe the app intent to your app. When the system launches your app, you use this identifier to match the app intent to one of your app’s scenes. If you’re implementing a UIKit app, use the [UISceneAppIntent](uisceneappintent.md) protocol to achieve the same behavior.

For more information about how to use app intents to configure your app’s interface, see [Directing app intents to your app’s scenes](directing-app-intents-to-your-apps-scenes.md).

## Topics

### Getting the target content identifier

- [contentIdentifier](targetcontentprovidingintent/contentidentifier.md): A custom string your app uses to identify the app intent.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [UISceneAppIntent](uisceneappintent.md)

## See Also

### Scene support

- [Directing app intents to your app’s scenes](directing-app-intents-to-your-apps-scenes.md): Direct app intents to a specific SwiftUI or UIKit scene and use the app intent to configure the content of the scene.
- [UISceneAppIntent](uisceneappintent.md): An interface you use to direct an app intent to a specific scene in your UIKit app.
- [AppIntentSceneDelegate](appintentscenedelegate.md): The interface a UIKit scene delegate uses to receive an app intent and configure the scene’s views.
