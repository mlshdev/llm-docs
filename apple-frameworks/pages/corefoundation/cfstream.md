> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfstream](https://developer.apple.com/documentation/corefoundation/cfstream)

# CFStream (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

This document describes the generic `CFStream` functions, data types, and constants. See also [CFReadStream](cfreadstream.md) and [CFWriteStream](cfwritestream.md) for functions and constants specific to read and write streams respectively.

> **Note**

>  When you use the `CFStream` API for networking, read and write operations on sockets can block. To prevent blocking:
>
> 1. Call [CFReadStreamSetClient(\_:\_:\_:\_:)](cfreadstreamsetclient%28________%29.md) and [CFWriteStreamSetClient(\_:\_:\_:\_:)](cfwritestreamsetclient%28________%29.md) to register to receive stream-related event notifications.
> 2. Call [CFReadStreamScheduleWithRunLoop(\_:\_:\_:)](cfreadstreamschedulewithrunloop%28______%29.md) and [CFWriteStreamScheduleWithRunLoop(\_:\_:\_:)](cfwritestreamschedulewithrunloop%28______%29.md) to schedule the stream on a run loop for receiving stream-related event notifications.
> 3. Call [CFReadStreamOpen(\_:)](cfreadstreamopen%28__%29.md) and [CFWriteStreamOpen(\_:)](cfwritestreamopen%28__%29.md) to open each stream.
> 4. Read only after receiving a [hasBytesAvailable](cfstreameventtype/hasbytesavailable.md) notification. Write only after receiving a [canAcceptBytes](cfstreameventtype/canacceptbytes.md) notification.

## Topics

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature(\_:\_:\_:\_:)](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost(\_:\_:\_:\_:\_:)](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket(\_:\_:\_:\_:)](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair(\_:\_:\_:\_:)](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost(\_:\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService(\_:\_:\_:\_:)](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

### Obtaining Errors

- [CFSocketStreamSOCKSGetError(\_:)](../cfnetwork/cfsocketstreamsocksgeterror%28__%29.md): This function gets error codes in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFSocketStreamSOCKSGetErrorSubdomain(\_:)](../cfnetwork/cfsocketstreamsocksgeterrorsubdomain%28__%29.md): Gets the error subdomain associated with errors in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.

### Setting the Security Protocol

- [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.

### Data Types

- [CFStreamError](cfstreamerror.md): The structure returned by [CFReadStreamGetError(\_:)](cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError(\_:)](cfwritestreamgeterror%28__%29.md).
- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Secure Sockets (SOCKS) Errors](../cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.

## See Also

### Related Documentation

- [Getting Started with Networking, Internet, and Web](https://developer.apple.com/library/archive/referencelibrary/GettingStarted/GS_NetworkingInternetWeb/_index.html#//apple_ref/doc/uid/TP40008807)
- [CFNetwork Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/CFNetwork/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001132)

### Reference

- [Core Foundation Structures](core-foundation-structures.md)
- [Core Foundation Enumerations](core-foundation-enumerations.md)
- [Core Foundation Constants](core-foundation-constants.md)
- [Core Foundation Functions](core-foundation-functions.md)
- [Core Foundation Data Types](core-foundation-data-types.md)
- [Core Foundation Macros](corefoundation-macros.md)

# CFStream (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

<a id="Overview"></a>

## Overview

This document describes the generic `CFStream` functions, data types, and constants. See also [CFReadStreamRef](cfreadstream.md) and [CFWriteStreamRef](cfwritestream.md) for functions and constants specific to read and write streams respectively.

> **Note**

>  When you use the `CFStream` API for networking, read and write operations on sockets can block. To prevent blocking:
>
> 1. Call [CFReadStreamSetClient](cfreadstreamsetclient%28________%29.md) and [CFWriteStreamSetClient](cfwritestreamsetclient%28________%29.md) to register to receive stream-related event notifications.
> 2. Call [CFReadStreamScheduleWithRunLoop](cfreadstreamschedulewithrunloop%28______%29.md) and [CFWriteStreamScheduleWithRunLoop](cfwritestreamschedulewithrunloop%28______%29.md) to schedule the stream on a run loop for receiving stream-related event notifications.
> 3. Call [CFReadStreamOpen](cfreadstreamopen%28__%29.md) and [CFWriteStreamOpen](cfwritestreamopen%28__%29.md) to open each stream.
> 4. Read only after receiving a [kCFStreamEventHasBytesAvailable](cfstreameventtype/hasbytesavailable.md) notification. Write only after receiving a [kCFStreamEventCanAcceptBytes](cfstreameventtype/canacceptbytes.md) notification.

## Topics

### Creating Streams

- [CFStreamCreatePairWithPeerSocketSignature](cfstreamcreatepairwithpeersocketsignature%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreatePairWithSocketToHost](cfstreamcreatepairwithsockettohost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a TCP/IP port of a particular host.
- [CFStreamCreatePairWithSocket](cfstreamcreatepairwithsocket%28________%29.md): Deprecated. Creates readable and writable streams connected to a socket.
- [CFStreamCreateBoundPair](cfstreamcreateboundpair%28________%29.md): Creates a bound pair of read and write streams.
- [CFStreamCreatePairWithSocketToCFHost](../cfnetwork/cfstreamcreatepairwithsockettocfhost%28__________%29.md): Deprecated. Creates readable and writable streams connected to a given `CFHost` object.
- [CFStreamCreatePairWithSocketToNetService](../cfnetwork/cfstreamcreatepairwithsockettonetservice%28________%29.md): Deprecated. Creates a pair of streams for a CFNetService.

### Obtaining Errors

- [CFSocketStreamSOCKSGetError](../cfnetwork/cfsocketstreamsocksgeterror%28__%29.md): This function gets error codes in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.
- [CFSocketStreamSOCKSGetErrorSubdomain](../cfnetwork/cfsocketstreamsocksgeterrorsubdomain%28__%29.md): Gets the error subdomain associated with errors in the `kCFStreamErrorDomainSOCKS` domain from the `CFStreamError` returned by a stream operation.

### Setting the Security Protocol

- [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md): Sets the value of a property for a stream.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.

### Data Types

- [CFStreamError](cfstreamerror.md): The structure returned by [CFReadStreamGetError](cfreadstreamgeterror%28__%29.md) and [CFWriteStreamGetError](cfwritestreamgeterror%28__%29.md).
- [CFStreamClientContext](cfstreamclientcontext.md): A structure that contains program-defined data and callbacks with which you can configure a stream’s client behavior.

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Secure Sockets (SOCKS) Errors](../cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [Stream Properties](stream-properties.md): Stream property names that can be set or copied.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.

## See Also

### Related Documentation

- [Getting Started with Networking, Internet, and Web](https://developer.apple.com/library/archive/referencelibrary/GettingStarted/GS_NetworkingInternetWeb/_index.html#//apple_ref/doc/uid/TP40008807)
- [CFNetwork Programming Guide](https://developer.apple.com/library/archive/documentation/Networking/Conceptual/CFNetwork/Introduction/Introduction.html#//apple_ref/doc/uid/TP30001132)

### Reference

- [Core Foundation Structures](core-foundation-structures.md)
- [Core Foundation Enumerations](core-foundation-enumerations.md)
- [Core Foundation Constants](core-foundation-constants.md)
- [Core Foundation Functions](core-foundation-functions.md)
- [Core Foundation Data Types](core-foundation-data-types.md)
- [Core Foundation Macros](corefoundation-macros.md)
