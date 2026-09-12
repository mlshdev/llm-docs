> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyprovider](https://developer.apple.com/documentation/networkextension/nednsproxyprovider)

# NEDNSProxyProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The principal class for a DNS proxy provider app extension.

## Declaration

```swift
class NEDNSProxyProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

A DNS proxy allows your app to intercept all DNS traffic generated on a device. You can use this capability to provide services like DNS traffic encryption, typically by redirecting DNS traffic to your own server. You usually do this in the context of managed devices, such as those owned by a school or an enterprise.

You create a DNS proxy as an app extension based on a custom subclass of the [NEDNSProxyProvider](nednsproxyprovider.md) class. Once active, the proxy receives access to flows of DNS traffic in the form of [NEAppProxyFlow](neappproxyflow.md) instances. Each flow corresponds to a socket opened by an app to UDP port 53 or TCP port 53. Your DNS proxy provider acts as a transparent DNS proxy for the flows of network data that it receives.

> **Important**

>  To use the [NEDNSProxyProvider](nednsproxyprovider.md) class, you must enable the Network Extensions capability in Xcode and select the DNS Proxy capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

When you subclass [NEDNSProxyProvider](nednsproxyprovider.md), you must provide implementations for the following methods:

- [startProxy(options:completionHandler:)](nednsproxyprovider/startproxy%28options_completionhandler_%29.md)
- [stopProxy(with:completionHandler:)](nednsproxyprovider/stopproxy%28with_completionhandler_%29.md)
- [handleNewFlow(\_:)](nednsproxyprovider/handlenewflow%28__%29.md)

## Topics

### Managing the DNS proxy life cycle

- [startProxy(options:completionHandler:)](nednsproxyprovider/startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [stopProxy(with:completionHandler:)](nednsproxyprovider/stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.
- [cancelProxyWithError(\_:)](nednsproxyprovider/cancelproxywitherror%28__%29.md): Cancels the DNS proxy.

### Handling proxied DNS flow

- [handleNewFlow(\_:)](nednsproxyprovider/handlenewflow%28__%29.md): Handles a new flow of DNS traffic.
- [handleNewUDPFlow(\_:initialRemoteEndpoint:)](nednsproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handles a new flow of UDP traffic.

### Getting system DNS settings

- [systemDNSSettings](nednsproxyprovider/systemdnssettings.md): The current system DNS settings.

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

### Provider

- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.

# NEDNSProxyProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The principal class for a DNS proxy provider app extension.

## Declaration

```objectivec
@interface NEDNSProxyProvider : NEProvider
```

## Mentioned In

- [Handling Flow Copying](handling-flow-copying.md)

<a id="overview"></a>

## Overview

A DNS proxy allows your app to intercept all DNS traffic generated on a device. You can use this capability to provide services like DNS traffic encryption, typically by redirecting DNS traffic to your own server. You usually do this in the context of managed devices, such as those owned by a school or an enterprise.

You create a DNS proxy as an app extension based on a custom subclass of the [NEDNSProxyProvider](nednsproxyprovider.md) class. Once active, the proxy receives access to flows of DNS traffic in the form of [NEAppProxyFlow](neappproxyflow.md) instances. Each flow corresponds to a socket opened by an app to UDP port 53 or TCP port 53. Your DNS proxy provider acts as a transparent DNS proxy for the flows of network data that it receives.

> **Important**

>  To use the [NEDNSProxyProvider](nednsproxyprovider.md) class, you must enable the Network Extensions capability in Xcode and select the DNS Proxy capability. See [Configure network extensions](http://help.apple.com/xcode/mac/current/#/dev0b2ef6f08).

When you subclass [NEDNSProxyProvider](nednsproxyprovider.md), you must provide implementations for the following methods:

- [startProxyWithOptions:completionHandler:](nednsproxyprovider/startproxy%28options_completionhandler_%29.md)
- [stopProxyWithReason:completionHandler:](nednsproxyprovider/stopproxy%28with_completionhandler_%29.md)
- [handleNewFlow:](nednsproxyprovider/handlenewflow%28__%29.md)

## Topics

### Managing the DNS proxy life cycle

- [startProxyWithOptions:completionHandler:](nednsproxyprovider/startproxy%28options_completionhandler_%29.md): Starts the DNS proxy.
- [stopProxyWithReason:completionHandler:](nednsproxyprovider/stopproxy%28with_completionhandler_%29.md): Stops the DNS proxy.
- [cancelProxyWithError:](nednsproxyprovider/cancelproxywitherror%28__%29.md): Cancels the DNS proxy.

### Handling proxied DNS flow

- [handleNewFlow:](nednsproxyprovider/handlenewflow%28__%29.md): Handles a new flow of DNS traffic.
- [handleNewUDPFlow:initialRemoteEndpoint:](nednsproxyprovider/handlenewudpflow%28__initialremoteendpoint_%29.md): Deprecated. Handles a new flow of UDP traffic.

### Getting system DNS settings

- [systemDNSSettings](nednsproxyprovider/systemdnssettings.md): The current system DNS settings.

### Instance Methods

- [handleNewUDPFlow:initialRemoteFlowEndpoint:](nednsproxyprovider/handlenewudpflow_initialremoteflowendpoint_.md)

## Relationships

### Inherits From

- [NEProvider](neprovider.md)

## See Also

### Provider

- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
