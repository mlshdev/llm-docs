> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsapplicationdelegate/application(_:handlerfor:)](https://developer.apple.com/documentation/appkit/nsapplicationdelegate/application(_:handlerfor:))

# application(\_:handlerFor:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an intent handler that’s capable of handling the specified intent.

## Declaration

```swift
@MainActor optional func application(_ application: NSApplication, handlerFor intent: INIntent) -> Any?
```

## Parameters

- `application`: The shared app object.
- `intent`: The intent object that represents the request coming from the system.

<a id="return-value"></a>

## Return Value

An instance of a type capable of handling the specified intent, or `nil` if your app doesn’t handle the intent. Return an instance of a type that conforms to the protocol for handling intents of the same type as the provided `intent`.

<a id="Discussion"></a>

## Discussion

Siri invokes this method on the main queue when it wants to process one of your app’s supported intents. To indicate the intents that your app supports, populate the [INIntentsSupported](https://developer.apple.com/documentation/bundleresources/information-property-list/inintentssupported) array in your app target’s `Info.plist` file.

In your delegate’s implementation of this method, check the `intent` parameter’s type and return a custom object that adopts the corresponding handling protocol. For example, if `intent` is an instance of [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent), return an object that adopts [INPlayMediaIntentHandling](https://developer.apple.com/documentation/intents/inplaymediaintenthandling). Only use the provided intent to determine which handler to return; don’t use it to initialize the handler and don’t store a reference to it. SiriKit updates the intent throughout the request to incorporate information the user provides. For more information, see [Dispatching intents to handlers](https://developer.apple.com/documentation/sirikit/dispatching-intents-to-handlers).

For information about handling intents, see [Resolving and Handling Intents](https://developer.apple.com/documentation/sirikit/resolving-and-handling-intents).

# application:handlerForIntent: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Returns an intent handler that’s capable of handling the specified intent.

## Declaration

```objectivec
- (id) application:(NSApplication *) application handlerForIntent:(INIntent *) intent;
```

## Parameters

- `application`: The shared app object.
- `intent`: The intent object that represents the request coming from the system.

<a id="return-value"></a>

## Return Value

An instance of a type capable of handling the specified intent, or `nil` if your app doesn’t handle the intent. Return an instance of a type that conforms to the protocol for handling intents of the same type as the provided `intent`.

<a id="Discussion"></a>

## Discussion

Siri invokes this method on the main queue when it wants to process one of your app’s supported intents. To indicate the intents that your app supports, populate the [INIntentsSupported](https://developer.apple.com/documentation/bundleresources/information-property-list/inintentssupported) array in your app target’s `Info.plist` file.

In your delegate’s implementation of this method, check the `intent` parameter’s type and return a custom object that adopts the corresponding handling protocol. For example, if `intent` is an instance of [INPlayMediaIntent](https://developer.apple.com/documentation/intents/inplaymediaintent), return an object that adopts [INPlayMediaIntentHandling](https://developer.apple.com/documentation/intents/inplaymediaintenthandling). Only use the provided intent to determine which handler to return; don’t use it to initialize the handler and don’t store a reference to it. SiriKit updates the intent throughout the request to incorporate information the user provides. For more information, see [Dispatching intents to handlers](https://developer.apple.com/documentation/sirikit/dispatching-intents-to-handlers).

For information about handling intents, see [Resolving and Handling Intents](https://developer.apple.com/documentation/sirikit/resolving-and-handling-intents).
