> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neapppushprovider](https://developer.apple.com/documentation/networkextension/neapppushprovider)

# NEAppPushProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that creates and maintains a persistent network connection to a local push server.

## Declaration

```swift
class NEAppPushProvider
```

## Mentioned In

- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md)

<a id="overview"></a>

## Overview

Subclass [NEAppPushProvider](neapppushprovider.md) to provide the connection to your local push server. A [NEAppPushManager](neapppushmanager.md) creates instances of your provider class based on the [providerBundleIdentifier](neapppushmanager/providerbundleidentifier.md) in the manager’s configuration. The manager then calls methods on your provider to start and stop communication with the server, and periodically check the provider’s status. When your provider receives an incoming call from your server, call the provider’s [reportIncomingCall(userInfo:)](neapppushprovider/reportincomingcall%28userinfo_%29.md) method to alert the manager’s [delegate](neapppushmanager/delegate.md).

<a id="Creating-a-Local-Push-Provider-Extension"></a>

### Creating a Local Push Provider Extension

Local Push Providers run as App Extensions for the `app-push-provider` extension point, which is a possible value the [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md).

To create a Local Push Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [Receiving Voice and Text Communications on a Local Network](receiving-voice-and-text-communications-on-a-local-network.md) sample code project.

Once you have an extension target, create a subclass of [NEAppPushProvider](neapppushprovider.md). Then set the `NSExtensionPrincipalClass` key in the extension’s `Info.plist` to the name of your subclass. Set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.app-push`, if it’s not set already.

Here’s an example of the `NSExtension` dictionary in a Local Push Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.app-push</string>
    <key>NSExtensionPrincipalClass</key>
    <string>$(PRODUCT_MODULE_NAME).MyPushProvider</string>
</dict>

```

Finally, add your Local Push Provider extension target to your app’s Embed App Extensions build phase.

## Topics

### Inspecting provider properties

- [providerConfiguration](neapppushprovider/providerconfiguration.md): A dictionary that contains current vendor-specific configuration parameters.

### Implementing provider life cycle

- [start()](neapppushprovider/start%28%29.md): Indicates that the framework has started the provider.
- [start(completionHandler:)](neapppushprovider/start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stop(with:completionHandler:)](neapppushprovider/stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent()](neapppushprovider/handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.

### Receiving local events

- [reportIncomingCall(userInfo:)](neapppushprovider/reportincomingcall%28userinfo_%29.md): Informs the manager about an incoming call.
- [reportPushToTalkMessage(userInfo:)](neapppushprovider/reportpushtotalkmessage%28userinfo_%29.md): Informs the manager about a push-to-talk message on the connection.

### Operating over Ethernet

- [unmatchEthernet()](neapppushprovider/unmatchethernet%28%29.md): Tells the framework not to use the provider with an active Ethernet connection.

## Relationships

### Inherits From

- [NEProvider](neprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [NEAppPushManager](neapppushmanager.md): An object that configures a push provider and manages its life cycle.
- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md): Implement your Local Push Connectivity app to ensure delivery of notifications.
- [Receiving Voice and Text Communications on a Local Network](receiving-voice-and-text-communications-on-a-local-network.md): Provide voice and text communication on a local network isolated from Apple Push Notification service by adopting Local Push Connectivity.

# NEAppPushProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

An object that creates and maintains a persistent network connection to a local push server.

## Declaration

```objectivec
@interface NEAppPushProvider : NEProvider
```

## Mentioned In

- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md)

<a id="overview"></a>

## Overview

Subclass [NEAppPushProvider](neapppushprovider.md) to provide the connection to your local push server. A [NEAppPushManager](neapppushmanager.md) creates instances of your provider class based on the [providerBundleIdentifier](neapppushmanager/providerbundleidentifier.md) in the manager’s configuration. The manager then calls methods on your provider to start and stop communication with the server, and periodically check the provider’s status. When your provider receives an incoming call from your server, call the provider’s [reportIncomingCallWithUserInfo:](neapppushprovider/reportincomingcall%28userinfo_%29.md) method to alert the manager’s [delegate](neapppushmanager/delegate.md).

<a id="Creating-a-Local-Push-Provider-Extension"></a>

### Creating a Local Push Provider Extension

Local Push Providers run as App Extensions for the `app-push-provider` extension point, which is a possible value the [Network Extensions Entitlement](../bundleresources/entitlements/com.apple.developer.networking.networkextension.md).

To create a Local Push Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [Receiving Voice and Text Communications on a Local Network](receiving-voice-and-text-communications-on-a-local-network.md) sample code project.

Once you have an extension target, create a subclass of [NEAppPushProvider](neapppushprovider.md). Then set the `NSExtensionPrincipalClass` key in the extension’s `Info.plist` to the name of your subclass. Set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.app-push`, if it’s not set already.

Here’s an example of the `NSExtension` dictionary in a Local Push Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.app-push</string>
    <key>NSExtensionPrincipalClass</key>
    <string>$(PRODUCT_MODULE_NAME).MyPushProvider</string>
</dict>

```

Finally, add your Local Push Provider extension target to your app’s Embed App Extensions build phase.

## Topics

### Inspecting provider properties

- [providerConfiguration](neapppushprovider/providerconfiguration.md): A dictionary that contains current vendor-specific configuration parameters.

### Implementing provider life cycle

- [start](neapppushprovider/start%28%29.md): Indicates that the framework has started the provider.
- [startWithCompletionHandler:](neapppushprovider/start%28completionhandler_%29.md): Deprecated. Indicates that the framework has started the provider, and provides a completion handler for subclasses to signal their readiness.
- [stopWithReason:completionHandler:](neapppushprovider/stop%28with_completionhandler_%29.md): Indicates that the framework needs to stop the provider.
- [handleTimerEvent](neapppushprovider/handletimerevent%28%29.md): Indicates a periodic status check from the framework to the provider.

### Receiving local events

- [reportIncomingCallWithUserInfo:](neapppushprovider/reportincomingcall%28userinfo_%29.md): Informs the manager about an incoming call.
- [reportPushToTalkMessageWithUserInfo:](neapppushprovider/reportpushtotalkmessage%28userinfo_%29.md): Informs the manager about a push-to-talk message on the connection.

### Operating over Ethernet

- [unmatchEthernet](neapppushprovider/unmatchethernet%28%29.md): Tells the framework not to use the provider with an active Ethernet connection.

## Relationships

### Inherits From

- [NEProvider](neprovider.md)

## See Also

### Essentials

- [NEAppPushManager](neapppushmanager.md): An object that configures a push provider and manages its life cycle.
- [Maintaining a Reliable Network Connection](maintaining-a-reliable-network-connection.md): Implement your Local Push Connectivity app to ensure delivery of notifications.
