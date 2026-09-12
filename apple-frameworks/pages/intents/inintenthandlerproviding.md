> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inintenthandlerproviding](https://developer.apple.com/documentation/intents/inintenthandlerproviding)

# INIntentHandlerProviding (Swift)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The interface for dispatching intents to the custom objects that handle those intents.

## Declaration

```swift
protocol INIntentHandlerProviding : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The `INIntentHandlerProviding` protocol defines the method for routing SiriKit requests to the appropriate objects of your Intents extension. The method in this protocol acts as a dispatcher, returning an object capable of resolving, confirming, and handling a specific intent object. This protocol is adopted by the [INExtension](inextension.md) class and you must provide a custom implementation.

When you add an Intents extension to your project, Xcode automatically creates a default [INExtension](inextension.md) subclass that adopts this protocol. Modify the [handler(for:)](inintenthandlerproviding/handler%28for_%29.md) method in that subclass and use it to create your handler objects. You can use the same class to handle multiple intents or you can use different classes for each intent.

## Topics

### Providing Handlers for Intents

- [handler(for:)](inintenthandlerproviding/handler%28for_%29.md): Returns the object capable of handling the specified intent in an extension.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [INExtension](inextension.md)

## See Also

### Intents App Extension

- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](../sirikit/structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INExtension](inextension.md): The entry point for an Intents extension.

# INIntentHandlerProviding (Objective-C)

**Framework:** Intents  
**Kind:** Protocol  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 3.2+

The interface for dispatching intents to the custom objects that handle those intents.

## Declaration

```objectivec
@protocol INIntentHandlerProviding <NSObject>
```

<a id="overview"></a>

## Overview

The `INIntentHandlerProviding` protocol defines the method for routing SiriKit requests to the appropriate objects of your Intents extension. The method in this protocol acts as a dispatcher, returning an object capable of resolving, confirming, and handling a specific intent object. This protocol is adopted by the [INExtension](inextension.md) class and you must provide a custom implementation.

When you add an Intents extension to your project, Xcode automatically creates a default [INExtension](inextension.md) subclass that adopts this protocol. Modify the [handlerForIntent:](inintenthandlerproviding/handler%28for_%29.md) method in that subclass and use it to create your handler objects. You can use the same class to handle multiple intents or you can use different classes for each intent.

## Topics

### Providing Handlers for Intents

- [handlerForIntent:](inintenthandlerproviding/handler%28for_%29.md): Returns the object capable of handling the specified intent in an extension.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [INExtension](inextension.md)

## See Also

### Intents App Extension

- [Creating an Intents App Extension](../sirikit/creating-an-intents-app-extension.md): Add and configure an Intents app extension in your Xcode project.
- [Structuring Your Code to Support App Extensions](../sirikit/structuring-your-code-to-support-app-extensions.md): Move your back-end services to a private framework so your app and app extensions can use them.
- [INExtension](inextension.md): The entry point for an Intents extension.
