> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/stream-properties](https://developer.apple.com/documentation/corefoundation/stream-properties)

# Stream Properties (Swift)

**Framework:** Core Foundation  
**Kind:** API Collection

Stream property names that can be set or copied.

<a id="overview"></a>

## Overview

Use [CFReadStreamCopyProperty(\_:\_:)](cfreadstreamcopyproperty%28____%29.md) or [CFWriteStreamCopyProperty(\_:\_:)](cfwritestreamcopyproperty%28____%29.md) to read the property values. Use [CFReadStreamSetProperty(\_:\_:\_:)](cfreadstreamsetproperty%28______%29.md) or [CFWriteStreamSetProperty(\_:\_:\_:)](cfwritestreamsetproperty%28______%29.md) to set the property values.

## Topics

### Constants

- [appendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [dataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [fileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [socketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [socketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [socketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySocketSecurityLevel](kcfstreampropertysocketsecuritylevel.md): Socket Security Level property key.
- [kCFStreamPropertySSLPeerCertificates](../cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](../cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertySSLContext](../cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySOCKSProxy](kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertyProxyLocalBypass](../cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySocketRemoteHost](../cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](../cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.
- [kCFStreamNetworkServiceType](../cfnetwork/kcfstreamnetworkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See doc://com.apple.documentation/documentation/corefoundation/stream-service-types for a list of possible values.
- [kCFStreamPropertyConnectionIsCellular](../cfnetwork/kcfstreampropertyconnectioniscellular.md): A boolean value indicating whether the stream is connected over a cellular (WWAN) interface. This is a read-only property, and is `false` until the connection has been established.
- [kCFStreamPropertyNoCellular](../cfnetwork/kcfstreampropertynocellular.md): A Boolean value indicating that the connection should not be established over a cellular (WWAN) connection. This value can only be set *before* you open the stream.

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [Secure Sockets (SOCKS) Errors](../cfnetwork/1518266-secure-sockets-socks-errors.md): Error codes returned by the `kCFStreamErrorDomainSOCKS` error domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.

# Stream Properties (Objective-C)

**Framework:** Core Foundation  
**Kind:** API Collection

Stream property names that can be set or copied.

<a id="overview"></a>

## Overview

Use [CFReadStreamCopyProperty](cfreadstreamcopyproperty%28____%29.md) or [CFWriteStreamCopyProperty](cfwritestreamcopyproperty%28____%29.md) to read the property values. Use [CFReadStreamSetProperty](cfreadstreamsetproperty%28______%29.md) or [CFWriteStreamSetProperty](cfwritestreamsetproperty%28______%29.md) to set the property values.

## Topics

### Constants

- [kCFStreamPropertyAppendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [kCFStreamPropertyDataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [kCFStreamPropertyFileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [kCFStreamPropertySocketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [kCFStreamPropertySocketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertySocketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySocketSecurityLevel](kcfstreampropertysocketsecuritylevel.md): Socket Security Level property key.
- [kCFStreamPropertySSLPeerCertificates](../cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](../cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertySSLContext](../cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySOCKSProxy](kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertyProxyLocalBypass](../cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySocketRemoteHost](../cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](../cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.
- [kCFStreamNetworkServiceType](../cfnetwork/kcfstreamnetworkservicetype.md): The type of service for the stream. Providing the service type allows the system to properly handle certain attributes of the stream, including routing and suspension behavior. Most streams do not need to set this property. See doc://com.apple.documentation/documentation/corefoundation/stream-service-types for a list of possible values.
- [kCFStreamPropertyConnectionIsCellular](../cfnetwork/kcfstreampropertyconnectioniscellular.md): A boolean value indicating whether the stream is connected over a cellular (WWAN) interface. This is a read-only property, and is `false` until the connection has been established.
- [kCFStreamPropertyNoCellular](../cfnetwork/kcfstreampropertynocellular.md): A Boolean value indicating that the connection should not be established over a cellular (WWAN) connection. This value can only be set *before* you open the stream.

## See Also

### Constants

- [CFStreamStatus](cfstreamstatus.md): Constants that describe the status of a stream.
- [CFStreamErrorDomain](cfstreamerrordomain.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [CFStream Error Domain Constants (CFHost)](cfstream-error-domain-constants-cfhost.md): Defines constants for values returned in the domain field of the `CFStreamError` structure.
- [Error Subdomains](error-subdomains.md): Subdomains used to determine how to interpret an error in the `kCFStreamErrorDomainSOCKS` domain.
- [CFStreamEventType](cfstreameventtype.md): Defines constants for stream-related events.
- [CFStream Property SSL Settings Constants](cfstream-property-ssl-settings-constants.md): Constants for use in a `CFDictionary` object that is the value of the `kCFStreamPropertySSLSettings` stream property key.
- [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md): Constants for setting the security level of a socket stream.
- [CFStream SOCKS Proxy Key Constants](cfstream-socks-proxy-key-constants.md): Constants for SOCKS Proxy `CFDictionary` keys.
- [Stream Service Types](stream-service-types.md): String constants that specify the service type of a stream.
