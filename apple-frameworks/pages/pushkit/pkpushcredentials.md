> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushcredentials](https://developer.apple.com/documentation/pushkit/pkpushcredentials)

# PKPushCredentials (Swift)

**Framework:** PushKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that encapsulates the device token you use to deliver push notifications to your app.

## Declaration

```swift
class PKPushCredentials
```

## Mentioned In

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md)

<a id="overview"></a>

## Overview

When registering your app’s push types, PushKit creates a `PKPushCredentials` object for each type your app supports and delivers it to your delegate’s [pushRegistry(\_:didUpdate:for:)](pkpushregistrydelegate/pushregistry%28__didupdate_for_%29.md) method. Don’t create `PKPushCredentials` objects yourself.

## Topics

### Getting the Token

- [token](pkpushcredentials/token.md): A unique device token to use when sending push notifications to the current device.
- [type](pkpushcredentials/type.md): The push type constant associated with the token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Registration

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md): Declare the types of PushKit notifications your app supports and configure objects to respond to them.
- [PKPushRegistry](pkpushregistry.md): An object that requests the delivery and handles the receipt of PushKit notifications.
- [PKPushRegistryDelegate](pkpushregistrydelegate.md): The methods that you use to handle incoming PushKit notifications and registration events.

# PKPushCredentials (Objective-C)

**Framework:** PushKit  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

An object that encapsulates the device token you use to deliver push notifications to your app.

## Declaration

```objectivec
@interface PKPushCredentials : NSObject
```

## Mentioned In

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md)

<a id="overview"></a>

## Overview

When registering your app’s push types, PushKit creates a `PKPushCredentials` object for each type your app supports and delivers it to your delegate’s [pushRegistry:didUpdatePushCredentials:forType:](pkpushregistrydelegate/pushregistry%28__didupdate_for_%29.md) method. Don’t create `PKPushCredentials` objects yourself.

## Topics

### Getting the Token

- [token](pkpushcredentials/token.md): A unique device token to use when sending push notifications to the current device.
- [type](pkpushcredentials/type.md): The push type constant associated with the token.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Registration

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md): Declare the types of PushKit notifications your app supports and configure objects to respond to them.
- [PKPushRegistry](pkpushregistry.md): An object that requests the delivery and handles the receipt of PushKit notifications.
- [PKPushRegistryDelegate](pkpushregistrydelegate.md): The methods that you use to handle incoming PushKit notifications and registration events.
