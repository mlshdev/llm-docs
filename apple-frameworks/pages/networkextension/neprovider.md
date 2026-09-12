> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neprovider](https://developer.apple.com/documentation/networkextension/neprovider)

# NEProvider (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An abstract base class for all NetworkExtension providers.

## Declaration

```swift
class NEProvider
```

<a id="overview"></a>

## Overview

See the documentation for the `NEProvider` subclasses for details about how to create Network Extension Provider extensions.

The `NEProvider` class and its subclasses expose methods and properties that allow Network Extension Provider extensions to participate in and affect the network data path on iOS and macOS. For example, the `handleNewFlow:` method in [NEFilterDataProvider](nefilterdataprovider.md) allows Filter Data Provider extensions to make pass/block decisions on TCP connections as the connections are established on the system.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The `NEProvider` class should not be subclassed directly. Instead, you should create subclasses of `NEProvider` subclasses (and in some cases subsubclasses).

<a id="Methods-to-Override"></a>

#### Methods to Override

- [sleep(completionHandler:)](neprovider/sleep%28completionhandler_%29.md)
- [wake()](neprovider/wake%28%29.md)

## Topics

### Handling sleep and wake

- [sleep(completionHandler:)](neprovider/sleep%28completionhandler_%29.md): Handle a sleep event.
- [wake()](neprovider/wake%28%29.md): Handle a wake event.

### Creating network connections

- [createTCPConnection(to:enableTLS:tlsParameters:delegate:)](neprovider/createtcpconnection%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection.
- [createUDPSession(to:from:)](neprovider/createudpsession%28to_from_%29.md): Deprecated. Creates a UDP session.

### Monitoring the network state

- [defaultPath](neprovider/defaultpath.md): Deprecated. The current default network path used for connections created by the provider.

### Supporting system extensions

- [startSystemExtensionMode()](neprovider/startsystemextensionmode%28%29.md): Starts the Network Extension machinery from inside a System Extension.

### Constants

- [NEProviderStopReason](neproviderstopreason.md): Reasons why the provider extension was stopped.

### Displaying messages

- [displayMessage(\_:completionHandler:)](neprovider/displaymessage%28__completionhandler_%29.md): Deprecated. Call this method from your [NEProvider](neprovider.md) subclass if you want to display a message to the person using the app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEAppPushProvider](neapppushprovider.md)
- [NEDNSProxyProvider](nednsproxyprovider.md)
- [NEFilterProvider](nefilterprovider.md)
- [NETunnelProvider](netunnelprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.

# NEProvider (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An abstract base class for all NetworkExtension providers.

## Declaration

```objectivec
@interface NEProvider : NSObject
```

<a id="overview"></a>

## Overview

See the documentation for the `NEProvider` subclasses for details about how to create Network Extension Provider extensions.

The `NEProvider` class and its subclasses expose methods and properties that allow Network Extension Provider extensions to participate in and affect the network data path on iOS and macOS. For example, the `handleNewFlow:` method in [NEFilterDataProvider](nefilterdataprovider.md) allows Filter Data Provider extensions to make pass/block decisions on TCP connections as the connections are established on the system.

<a id="Subclassing-Notes"></a>

### Subclassing Notes

The `NEProvider` class should not be subclassed directly. Instead, you should create subclasses of `NEProvider` subclasses (and in some cases subsubclasses).

<a id="Methods-to-Override"></a>

#### Methods to Override

- [sleepWithCompletionHandler:](neprovider/sleep%28completionhandler_%29.md)
- [wake](neprovider/wake%28%29.md)

## Topics

### Handling sleep and wake

- [sleepWithCompletionHandler:](neprovider/sleep%28completionhandler_%29.md): Handle a sleep event.
- [wake](neprovider/wake%28%29.md): Handle a wake event.

### Creating network connections

- [createTCPConnectionToEndpoint:enableTLS:TLSParameters:delegate:](neprovider/createtcpconnection%28to_enabletls_tlsparameters_delegate_%29.md): Deprecated. Create a TCP connection.
- [createUDPSessionToEndpoint:fromEndpoint:](neprovider/createudpsession%28to_from_%29.md): Deprecated. Creates a UDP session.

### Monitoring the network state

- [defaultPath](neprovider/defaultpath.md): Deprecated. The current default network path used for connections created by the provider.

### Supporting system extensions

- [startSystemExtensionMode](neprovider/startsystemextensionmode%28%29.md): Starts the Network Extension machinery from inside a System Extension.

### Constants

- [NEProviderStopReason](neproviderstopreason.md): Reasons why the provider extension was stopped.

### Displaying messages

- [displayMessage:completionHandler:](neprovider/displaymessage%28__completionhandler_%29.md): Deprecated. Call this method from your [NEProvider](neprovider.md) subclass if you want to display a message to the person using the app.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NEAppPushProvider](neapppushprovider.md)
- [NEDNSProxyProvider](nednsproxyprovider.md)
- [NEFilterProvider](nefilterprovider.md)
- [NETunnelProvider](netunnelprovider.md)

## See Also

### App proxy provider

- [NEAppProxyProvider](neappproxyprovider.md): The principal class for an app proxy provider app extension.
- [NETunnelProvider](netunnelprovider.md): An abstract base class shared by NEPacketTunnelProvider and NEAppProxyProvider.
- [NETunnelNetworkSettings](netunnelnetworksettings.md): The configuration for a tunnel provider’s virtual interface.
