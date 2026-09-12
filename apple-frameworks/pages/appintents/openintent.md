> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/openintent](https://developer.apple.com/documentation/appintents/openintent)

# OpenIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An app intent that opens and displays a specific item in your app’s interface.

## Declaration

```swift
protocol OpenIntent : SystemIntent
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)
- [Creating your first app intent](creating-your-first-app-intent.md)
- [Directing app intents to your app’s scenes](directing-app-intents-to-your-apps-scenes.md)
- [Getting started with the App Intents framework](getting-started-with-the-app-intents-framework.md)
- [Making app entities available in Spotlight](making-app-entities-available-in-spotlight.md)

<a id="overview"></a>

## Overview

Use this protocol to create an app intent that opens the app and displays a specific item. The [target](openintent/target.md) property contains the item to display and is typically an [AppEntity](appentity.md) or [AppEnum](appenum.md) type you define. For example, Spotlight can populate this property with an entity someone found during a search of your app’s content.

> **Note**

> The [URLRepresentableIntent](urlrepresentableintent.md) protocol provides a default implementation of the `AppIntents/perform()` method. If your app intent supports this protocol, or if the [target](openintent/target.md) parameter contains a type with a URL representation, you don’t need to implement that method. The default `AppIntents/perform()` method opens the item using your app’s URL support.

The system automatically brings your app to the foreground to run this app intent. If your app intent adopts the [TargetContentProvidingIntent](targetcontentprovidingintent.md) or [UISceneAppIntent](uisceneappintent.md) protocol, the system also directs the app intent to one of your app’s scenes first so you can configure the scene’s views. If your app intent type doesn’t support these protocols, use your [perform()](appintent/perform%28%29.md) method implementation to update your app’s interface and display the item.

For information about how to update your app’s interface in response to this app intent, see [Directing app intents to your app’s scenes](directing-app-intents-to-your-apps-scenes.md).

## Topics

### Getting the item to open

- [target](openintent/target.md): The item to open in your app.
- [Value](openintent/value.md): The type of the item to open.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SystemIntent](systemintent.md)

## See Also

### Common actions

- [OpenURLIntent](openurlintent.md): An app intent that opens one of your universal links and displays its contents.
- [SetValueIntent](setvalueintent.md): An intent that contains a value which can be set.
- [DeleteIntent](deleteintent.md): Delete the associated entity(s).
- [DeprecatedAppIntent](deprecatedappintent.md): An app intent that marks an action as deprecated and informs people which action to use instead.
