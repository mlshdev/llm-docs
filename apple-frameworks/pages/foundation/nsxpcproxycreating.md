> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsxpcproxycreating](https://developer.apple.com/documentation/foundation/nsxpcproxycreating)

# NSXPCProxyCreating (Swift)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Methods for creating new proxy objects.

## Declaration

```swift
protocol NSXPCProxyCreating
```

<a id="overview"></a>

## Overview

[NSXPCConnection](nsxpcconnection.md) implements this protocol. All objects returned from the methods in this protocol also implement the protocol. This allows creation of new proxies from other proxies.

## Topics

### Instance Methods

- [remoteObjectProxy()](nsxpcproxycreating/remoteobjectproxy%28%29.md): Returns a proxy object with no error handling block.
- [remoteObjectProxyWithErrorHandler(\_:)](nsxpcproxycreating/remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy object that invokes the error handling block if an error occurs on the connection.
- [synchronousRemoteObjectProxyWithErrorHandler(\_:)](nsxpcproxycreating/synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

## Relationships

### Conforming Types

- [NSXPCConnection](nsxpcconnection.md)

## See Also

### XPC Client

- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.

# NSXPCProxyCreating (Objective-C)

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Methods for creating new proxy objects.

## Declaration

```objectivec
@protocol NSXPCProxyCreating
```

<a id="overview"></a>

## Overview

[NSXPCConnection](nsxpcconnection.md) implements this protocol. All objects returned from the methods in this protocol also implement the protocol. This allows creation of new proxies from other proxies.

## Topics

### Instance Methods

- [remoteObjectProxy](nsxpcproxycreating/remoteobjectproxy%28%29.md): Returns a proxy object with no error handling block.
- [remoteObjectProxyWithErrorHandler:](nsxpcproxycreating/remoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy object that invokes the error handling block if an error occurs on the connection.
- [synchronousRemoteObjectProxyWithErrorHandler:](nsxpcproxycreating/synchronousremoteobjectproxywitherrorhandler%28__%29.md): Returns a proxy that makes a synchronous IPC call instead of the default async behavior.

## Relationships

### Conforming Types

- [NSXPCConnection](nsxpcconnection.md)

## See Also

### XPC Client

- [NSXPCConnection](nsxpcconnection.md): A bidirectional communication channel between two processes.
- [NSXPCInterface](nsxpcinterface.md): An interface that may be sent to an exported object or remote object proxy.
- [NSXPCCoder](nsxpccoder.md): A coder that encodes and decodes objects that your app sends over an XPC connection.
