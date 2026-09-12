> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplicationdelegate/application(_:handlerfor:)](https://developer.apple.com/documentation/uikit/uiapplicationdelegate/application(_:handlerfor:))

# application(\_:handlerFor:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate for an intent handler capable of handling the specified intent.

## Declaration

```swift
optional func application(_ application: UIApplication, handlerFor intent: INIntent) -> Any?
```

## Parameters

- `application`: The shared app object.
- `intent`: The intent object that represents the request coming from the system.

<a id="return-value"></a>

## Return Value

An instance of a type capable of handling the specified intent; otherwise, `nil` if your app doesn’t handle the intent. Return an instance of a type that conforms to the handling intents protocol for the same type as the provided intent.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The system only invokes this method in apps that support multiple scenes. For more information, see [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md).

Siri invokes this method on the main queue when it wants to process one of your app’s supported intents. To indicate the intents that your app supports, populate the [INIntentsSupported](../../bundleresources/information-property-list/inintentssupported.md) array in your app target’s `Info.plist` file.

In your delegate’s implementation of this method, check the `intent` parameter’s type and return a custom object that adopts the corresponding handling protocol. For example, if `intent` is an instance of [INPlayMediaIntent](../../intents/inplaymediaintent.md), return an object that adopts [INPlayMediaIntentHandling](../../intents/inplaymediaintenthandling.md). Only use the provided intent to determine the handler to return; don’t use it to initialize the handler and don’t store a reference to it. SiriKit updates the intent throughout the request to incorporate information the requester provides. For more information, see [Dispatching intents to handlers](../../sirikit/dispatching-intents-to-handlers.md).

For information about handling intents, see [Resolving and Handling Intents](../../sirikit/resolving-and-handling-intents.md).

# application:handlerForIntent: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

Asks the delegate for an intent handler capable of handling the specified intent.

## Declaration

```objectivec
- (id) application:(UIApplication *) application handlerForIntent:(INIntent *) intent;
```

## Parameters

- `application`: The shared app object.
- `intent`: The intent object that represents the request coming from the system.

<a id="return-value"></a>

## Return Value

An instance of a type capable of handling the specified intent; otherwise, `nil` if your app doesn’t handle the intent. Return an instance of a type that conforms to the handling intents protocol for the same type as the provided intent.

<a id="Discussion"></a>

## Discussion

> **Important**

>  The system only invokes this method in apps that support multiple scenes. For more information, see [Specifying the scenes your app supports](../specifying-the-scenes-your-app-supports.md).

Siri invokes this method on the main queue when it wants to process one of your app’s supported intents. To indicate the intents that your app supports, populate the [INIntentsSupported](../../bundleresources/information-property-list/inintentssupported.md) array in your app target’s `Info.plist` file.

In your delegate’s implementation of this method, check the `intent` parameter’s type and return a custom object that adopts the corresponding handling protocol. For example, if `intent` is an instance of [INPlayMediaIntent](../../intents/inplaymediaintent.md), return an object that adopts [INPlayMediaIntentHandling](../../intents/inplaymediaintenthandling.md). Only use the provided intent to determine the handler to return; don’t use it to initialize the handler and don’t store a reference to it. SiriKit updates the intent throughout the request to incorporate information the requester provides. For more information, see [Dispatching intents to handlers](../../sirikit/dispatching-intents-to-handlers.md).

For information about handling intents, see [Resolving and Handling Intents](../../sirikit/resolving-and-handling-intents.md).
