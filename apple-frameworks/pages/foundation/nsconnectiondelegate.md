> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnectiondelegate](https://developer.apple.com/documentation/foundation/nsconnectiondelegate)

# NSConnectionDelegate

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Protocol  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

An interface for interacting with low-level, interprocess connections.

> Use [NSXPCConnection](nsxpcconnection.md) instead.

## Declaration

```objectivec
@protocol NSConnectionDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The [NSConnectionDelegate](nsconnectiondelegate.md) protocol defines the optional methods implemented by delegates of [NSConnection](nsconnection.md) objects.

## Topics

### Authenticating

- [authenticateComponents:withData:](nsconnectiondelegate/authenticatecomponents_withdata_.md): Deprecated. Returns a Boolean value that indicates whether given authentication data is valid for a given set of components.
- [authenticationDataForComponents:](nsconnectiondelegate/authenticationdataforcomponents_.md): Deprecated. Returns an `NSData` object to be used as an authentication stamp for an outgoing message.

### Responding to a Connection

- [connection:shouldMakeNewConnection:](nsconnectiondelegate/connection_shouldmakenewconnection_.md): Deprecated. Returns a Boolean value that indicates whether the parent connection should allow a given new connection to be created.
- [connection:handleRequest:](nsconnectiondelegate/connection_handlerequest_.md): Deprecated. This method should be implemented by `NSConnection` object delegates that want to intercept distant object requests.
- [createConversationForConnection:](nsconnectiondelegate/createconversationforconnection_.md): Deprecated. Returns an arbitrary object identifying a new conversation being created for the connection in the current thread.
- [makeNewConnection:sender:](nsconnectiondelegate/makenewconnection_sender_.md): Deprecated. Returns a Boolean value that indicates whether the parent should allow a given new connection to be created and configured.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Legacy

- [NSMachPortDelegate](nsmachportdelegate.md): An interface for handling incoming Mach messages.
- [NSConnection](nsconnection.md): Deprecated. An object that manages the communication between objects in different threads or between a thread and a process running on a local or remote system.
- [NSDistantObject](nsdistantobject.md): Deprecated. A proxy for objects in other applications or threads.
- [NSDistantObjectRequest](nsdistantobjectrequest.md): Deprecated. An object used by the distributed objects system to help handle invocations between different processes.
- [NSMachBootstrapServer](nsmachbootstrapserver.md): Deprecated. A port name server that takes and returns Mach port objects.
- [NSMachPort](nsmachport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePort](messageport.md): A port that can be used as an endpoint for distributed object connections (or raw messaging).
- [NSMessagePortNameServer](nsmessageportnameserver.md): Deprecated. A server takes and returns message ports.
- [NSPortCoder](nsportcoder.md): Deprecated. A coder used to transmit object proxies (and sometimes objects themselves) between connections.
- [NSPortDelegate](portdelegate.md): An interface for handling incoming messages.
- [NSPortMessage](portmessage.md): A low-level, operating system-independent type for inter-application (and inter-thread) messages.
- [NSPortNameServer](nsportnameserver.md): Deprecated. An object-oriented interface to the port registration service used by the distributed objects system.
- [NSProtocolChecker](nsprotocolchecker.md): An object that restricts the messages that can be sent to another object (referred to as the checker’s delegate).
- [NSSocketPortNameServer](nssocketportnameserver.md): Deprecated. A port name server that takes and returns socket ports.
