> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyprovider](https://developer.apple.com/documentation/networkextension/neappproxyprovider)

# NEAppProxyProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The principal class for an app proxy provider app extension.

## Declaration

```swift
class NEAppProxyProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

The [NEAppProxyProvider](neappproxyprovider.md) class provides access to flows of network data in the form of [NEAppProxyFlow](neappproxyflow.md) objects. Each [NEAppProxyFlow](neappproxyflow.md) object corresponds to a socket opened by an app that matches the app rules specified in the current App Proxy configuration. Your App Proxy Provider acts as a transparent network proxy for the flows of network data that it receives.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required to use the [NEAppProxyProvider](neappproxyprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="DNS-Handling"></a>

### DNS Handling

In addition to flows of raw network data from applications, the App Proxy Provider also receives flows of DNS queries in the form of [NEAppProxyUDPFlow](neappproxyudpflow.md) objects. DNS query flows are received only for applications that use low-level DNS resolution APIs such as [DNSServiceGetAddrInfo(\_:\_:\_:\_:\_:\_:\_:)](../dnssd/dnsservicegetaddrinfo%28______________%29.md)(). The App Proxy Provider can specify the DNS resolver configuration that will be used by these applications using the [setTunnelNetworkSettings(\_:completionHandler:)](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) method.

Applications that use higher-level networking APIs such as [URLSession](../foundation/urlsession.md) and [NSURLConnection](../foundation/nsurlconnection.md) do not generate DNS queries. Instead the destination hostname for the connection is included in the endpoint information of the [NEAppProxyFlow](neappproxyflow.md) object.

<a id="Creating-an-App-Proxy-Provider-Extension"></a>

### Creating an App Proxy Provider Extension

App Proxy Providers run as App Extensions for the `com.apple.networkextension.app-proxy` extension point.

To create a App Proxy Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a App Proxy Provider extension target, create a sub-class of `NEAppProxyProvider`. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your sub-class.

If it is not already done, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.app-proxy`.

Here is an example of the NSExtension dictionary in a App Proxy Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.app-proxy</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomAppProxyProvider</string>
</dict>
```

Finally, add your App Proxy Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In order to create a App Proxy Provider extension, you must create a subclass of `NEAppProxyProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [startProxy(options:completionHandler:)](neappproxyprovider/startproxy%28options_completionhandler_%29.md)
- [stopProxy(with:completionHandler:)](neappproxyprovider/stopproxy%28with_completionhandler_%29.md)
- [handleNewFlow(\_:)](neappproxyprovider/handlenewflow%28__%29.md)

## Topics

### Managing the app proxy life cycle

- [startProxy(options:completionHandler:)](neappproxyprovider/startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [stopProxy(with:completionHandler:)](neappproxyprovider/stopproxy%28with_completionhandler_%29.md): Stop the network proxy.
- [cancelProxyWithError(\_:)](neappproxyprovider/cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.

### Handling proxied flows

- [handleNewFlow(\_:)](neappproxyprovider/handlenewflow%28__%29.md): Handle a new flow of network data.
- [handleNewUDPFlow(\_:initialRemoteEndpoint:)](neappproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handle a new UDP flow of network data.

## Relationships

### Inherits From

- [NETunnelProvider](netunnelprovider.md)

### Inherited By

- [NETransparentProxyProvider](netransparentproxyprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### App proxy provider

- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.

# NEAppProxyProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

The principal class for an app proxy provider app extension.

## Declaration

```objectivec
@interface NEAppProxyProvider : NETunnelProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

The [NEAppProxyProvider](neappproxyprovider.md) class provides access to flows of network data in the form of [NEAppProxyFlow](neappproxyflow.md) objects. Each [NEAppProxyFlow](neappproxyflow.md) object corresponds to a socket opened by an app that matches the app rules specified in the current App Proxy configuration. Your App Proxy Provider acts as a transparent network proxy for the flows of network data that it receives.

> **Important**

>  The `com.apple.developer.networking.networkextension` entitlement is required to use the [NEAppProxyProvider](neappproxyprovider.md) class. Enable this entitlement when creating an App ID in your developer account.

<a id="DNS-Handling"></a>

### DNS Handling

In addition to flows of raw network data from applications, the App Proxy Provider also receives flows of DNS queries in the form of [NEAppProxyUDPFlow](neappproxyudpflow.md) objects. DNS query flows are received only for applications that use low-level DNS resolution APIs such as [DNSServiceGetAddrInfo](../dnssd/dnsservicegetaddrinfo%28______________%29.md)(). The App Proxy Provider can specify the DNS resolver configuration that will be used by these applications using the [setTunnelNetworkSettings:completionHandler:](netunnelprovider/settunnelnetworksettings%28__completionhandler_%29.md) method.

Applications that use higher-level networking APIs such as [NSURLSession](../foundation/urlsession.md) and [NSURLConnection](../foundation/nsurlconnection.md) do not generate DNS queries. Instead the destination hostname for the connection is included in the endpoint information of the [NEAppProxyFlow](neappproxyflow.md) object.

<a id="Creating-an-App-Proxy-Provider-Extension"></a>

### Creating an App Proxy Provider Extension

App Proxy Providers run as App Extensions for the `com.apple.networkextension.app-proxy` extension point.

To create a App Proxy Provider extension, first create a new App Extension target in your project.

For an example of an Xcode build target for this app extension, see the [SimpleTunnel: Customized Networking Using the NetworkExtension Framework](https://developer.apple.com/library/archive/samplecode/SimpleTunnel/Introduction/Intro.html#//apple_ref/doc/uid/TP40016140) sample code project.

Once you have a App Proxy Provider extension target, create a sub-class of `NEAppProxyProvider`. Then, set the `NSExtensionPrincipalClass` key in the the extension’s `Info.plist` to the name of your sub-class.

If it is not already done, set the `NSExtensionPointIdentifier` key in the extension’s `Info.plist` to `com.apple.networkextension.app-proxy`.

Here is an example of the NSExtension dictionary in a App Proxy Provider extension’s `Info.plist`:

```xml
<key>NSExtension</key>
<dict>
    <key>NSExtensionPointIdentifier</key>
    <string>com.apple.networkextension.app-proxy</string>
    <key>NSExtensionPrincipalClass</key>
    <string>MyCustomAppProxyProvider</string>
</dict>
```

Finally, add your App Proxy Provider extension target to your app’s Embed App Extensions build phase.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

In order to create a App Proxy Provider extension, you must create a subclass of `NEAppProxyProvider` and override the methods listed below.

<a id="Methods-to-Override"></a>

#### Methods to Override

- [startProxyWithOptions:completionHandler:](neappproxyprovider/startproxy%28options_completionhandler_%29.md)
- [stopProxyWithReason:completionHandler:](neappproxyprovider/stopproxy%28with_completionhandler_%29.md)
- [handleNewFlow:](neappproxyprovider/handlenewflow%28__%29.md)

## Topics

### Managing the app proxy life cycle

- [startProxyWithOptions:completionHandler:](neappproxyprovider/startproxy%28options_completionhandler_%29.md): Start the network proxy.
- [stopProxyWithReason:completionHandler:](neappproxyprovider/stopproxy%28with_completionhandler_%29.md): Stop the network proxy.
- [cancelProxyWithError:](neappproxyprovider/cancelproxywitherror%28__%29.md): Stop the network proxy from the App Proxy Provider.

### Handling proxied flows

- [handleNewFlow:](neappproxyprovider/handlenewflow%28__%29.md): Handle a new flow of network data.
- [handleNewUDPFlow:initialRemoteEndpoint:](neappproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handle a new UDP flow of network data.

### Instance Methods

- [handleNewUDPFlow:initialRemoteFlowEndpoint:](neappproxyprovider/handlenewudpflow_initialremoteflowendpoint_.md)

## Relationships

### Inherits From

- [NETunnelProvider](netunnelprovider.md)

### Inherited By

- [NETransparentProxyProvider](netransparentproxyprovider.md)

## See Also

### App proxy provider

- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NEProvider](neprovider.md): An abstract base class for all NetworkExtension providers.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
