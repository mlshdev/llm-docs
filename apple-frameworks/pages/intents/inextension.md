> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inextension](https://developer.apple.com/documentation/intents/inextension)

# INExtension (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The entry point for an Intents extension.

## Declaration

```swift
class INExtension
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

The [INExtension](inextension.md) class is the principal class of your Intents extension, which provides information to SiriKit. Your extension object acts like a dispatcher, providing SiriKit with the objects it needs to resolve and handle requests. This class defines no methods of its own, but it adopts the [INIntentHandlerProviding](inintenthandlerproviding.md) protocol, which contains the main method you must implement.

You do not create instances of this class directly. When the system needs your Intents extension to handle a request, it automatically instantiates the class specified in the `NSExtensionPrincipalClass` key of the extension’s `Info.plist` file. All you have to do is provide the implementation for that class.

Your extension object must be able to return handler objects for all of the intents that your app supports. The Intents framework supports the following types of intents:

- VoIP calling intents support audio and video calls to another user of your app.
- Workout intents support the starting and stopping of workouts.
- Message intents support the sending of message data to specific users.
- Payment intents support financial transactions between users.
- Photo intents support the searching and displaying of photos.
- Ride-booking intents support the booking and management of user transportation from Siri or Maps.
- CarPlay intents support the changing of settings in automobiles that support CarPlay.
- Restaurant reservation intents support the creating and viewing of restaurant reservations in Maps.

For more information about implementing your extension’s main dispatching method, see [INIntentHandlerProviding](inintenthandlerproviding.md). For information about how to implement this class in your Intents extension, see [SiriKit Programming Guide](https://developer.apple.com/library/archive/documentation/Intents/Conceptual/SiriIntegrationGuide/index.html#//apple_ref/doc/uid/TP40016875).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [INIntentHandlerProviding](inintenthandlerproviding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Intents App Extension

- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](../sirikit/structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INIntentHandlerProviding](inintenthandlerproviding.md): The interface for dispatching intents to the custom objects that handle those intents.

# INExtension (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The entry point for an Intents extension.

## Declaration

```objectivec
@interface INExtension : NSObject
```

## Mentioned In

- [Dispatching intents to handlers](../sirikit/dispatching-intents-to-handlers.md)

<a id="overview"></a>

## Overview

The [INExtension](inextension.md) class is the principal class of your Intents extension, which provides information to SiriKit. Your extension object acts like a dispatcher, providing SiriKit with the objects it needs to resolve and handle requests. This class defines no methods of its own, but it adopts the [INIntentHandlerProviding](inintenthandlerproviding.md) protocol, which contains the main method you must implement.

You do not create instances of this class directly. When the system needs your Intents extension to handle a request, it automatically instantiates the class specified in the `NSExtensionPrincipalClass` key of the extension’s `Info.plist` file. All you have to do is provide the implementation for that class.

Your extension object must be able to return handler objects for all of the intents that your app supports. The Intents framework supports the following types of intents:

- VoIP calling intents support audio and video calls to another user of your app.
- Workout intents support the starting and stopping of workouts.
- Message intents support the sending of message data to specific users.
- Payment intents support financial transactions between users.
- Photo intents support the searching and displaying of photos.
- Ride-booking intents support the booking and management of user transportation from Siri or Maps.
- CarPlay intents support the changing of settings in automobiles that support CarPlay.
- Restaurant reservation intents support the creating and viewing of restaurant reservations in Maps.

For more information about implementing your extension’s main dispatching method, see [INIntentHandlerProviding](inintenthandlerproviding.md). For information about how to implement this class in your Intents extension, see [SiriKit Programming Guide](https://developer.apple.com/library/archive/documentation/Intents/Conceptual/SiriIntegrationGuide/index.html#//apple_ref/doc/uid/TP40016875).

## Topics

### Constants

- [IntentsVersionNumber](https://developer.apple.com/documentation/intents/intentsversionnumber)
- [IntentsVersionString](https://developer.apple.com/documentation/intents/intentsversionstring)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [INIntentHandlerProviding](inintenthandlerproviding.md)

## See Also

### Intents App Extension

- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](../sirikit/structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INIntentHandlerProviding](inintenthandlerproviding.md): The interface for dispatching intents to the custom objects that handle those intents.
