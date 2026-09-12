> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pushkit/pkpushregistrydelegate](https://developer.apple.com/documentation/pushkit/pkpushregistrydelegate)

# PKPushRegistryDelegate (Swift)

**Framework:** PushKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The methods that you use to handle incoming PushKit notifications and registration events.

## Declaration

```swift
protocol PKPushRegistryDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol in an object of your app and assign that object to the [delegate](pkpushregistry/delegate.md) property of your `PKPushRegistry` object. Use the methods of this protocol to process incoming notifications and to react to token registration and invalidation.

## Topics

### Responding to Registration Events

- [pushRegistry(\_:didUpdate:for:)](pkpushregistrydelegate/pushregistry%28__didupdate_for_%29.md): Tells the delegate that the system updated the credentials for the specified type of push notification.
- [pushRegistry(\_:didInvalidatePushTokenFor:)](pkpushregistrydelegate/pushregistry%28__didinvalidatepushtokenfor_%29.md): Tells the delegate that the system invalidated the push token for the specified type.

### Handling an Incoming Notification

- [pushRegistry(\_:didReceiveIncomingPushWith:for:completion:)](pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md): Tells the delegate that a remote push notification arrived.

### Deprecated Methods

- [pushRegistry(\_:didReceiveIncomingPushWith:for:)](pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_%29.md): Deprecated. Notifies the delegate that a remote push has been received.

### Instance Methods

- [pushRegistry(\_:didReceiveIncomingVoIPPushWith:metadata:withCompletionHandler:)](pkpushregistrydelegate/pushregistry%28__didreceiveincomingvoippushwith_metadata_withcompletionhandler_%29.md): The system calls this method when it receives a VoIP push notification. Use this method to extract data from the notification’s payload and to report a VoIP call using CallKit or LiveCommunicationKit.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Registration

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md): Declare the types of PushKit notifications your app supports and configure objects to respond to them.
- [PKPushRegistry](pkpushregistry.md): An object that requests the delivery and handles the receipt of PushKit notifications.
- [PKPushCredentials](pkpushcredentials.md): An object that encapsulates the device token you use to deliver push notifications to your app.

# PKPushRegistryDelegate (Objective-C)

**Framework:** PushKit  
**Kind:** Protocol  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 6.0+

The methods that you use to handle incoming PushKit notifications and registration events.

## Declaration

```objectivec
@protocol PKPushRegistryDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Implement the methods of this protocol in an object of your app and assign that object to the [delegate](pkpushregistry/delegate.md) property of your `PKPushRegistry` object. Use the methods of this protocol to process incoming notifications and to react to token registration and invalidation.

## Topics

### Responding to Registration Events

- [pushRegistry:didUpdatePushCredentials:forType:](pkpushregistrydelegate/pushregistry%28__didupdate_for_%29.md): Tells the delegate that the system updated the credentials for the specified type of push notification.
- [pushRegistry:didInvalidatePushTokenForType:](pkpushregistrydelegate/pushregistry%28__didinvalidatepushtokenfor_%29.md): Tells the delegate that the system invalidated the push token for the specified type.

### Handling an Incoming Notification

- [pushRegistry:didReceiveIncomingPushWithPayload:forType:withCompletionHandler:](pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_completion_%29.md): Tells the delegate that a remote push notification arrived.

### Deprecated Methods

- [pushRegistry:didReceiveIncomingPushWithPayload:forType:](pkpushregistrydelegate/pushregistry%28__didreceiveincomingpushwith_for_%29.md): Deprecated. Notifies the delegate that a remote push has been received.

### Instance Methods

- [pushRegistry:didReceiveIncomingVoIPPushWithPayload:metadata:withCompletionHandler:](pkpushregistrydelegate/pushregistry%28__didreceiveincomingvoippushwith_metadata_withcompletionhandler_%29.md): The system calls this method when it receives a VoIP push notification. Use this method to extract data from the notification’s payload and to report a VoIP call using CallKit or LiveCommunicationKit.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Registration

- [Supporting PushKit Notifications in Your App](supporting-pushkit-notifications-in-your-app.md): Declare the types of PushKit notifications your app supports and configure objects to respond to them.
- [PKPushRegistry](pkpushregistry.md): An object that requests the delivery and handles the receipt of PushKit notifications.
- [PKPushCredentials](pkpushcredentials.md): An object that encapsulates the device token you use to deliver push notifications to your app.
