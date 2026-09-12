> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/kcfstreampropertysocketsecuritylevel](https://developer.apple.com/documentation/corefoundation/kcfstreampropertysocketsecuritylevel)

# kCFStreamPropertySocketSecurityLevel (Swift)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Socket Security Level property key.

## Declaration

```swift
let kCFStreamPropertySocketSecurityLevel: CFString
```

<a id="Discussion"></a>

## Discussion

See [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md) for specific security level constants to use.

> **Note**

>  If you set this key, you must do so before setting any other SSL options, such as `kCFStreamPropertySSLSettings`.

## See Also

### Constants

- [appendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [dataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [fileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [socketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [socketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [socketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySSLPeerCertificates](../cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](../cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertySSLContext](../cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySOCKSProxy](kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertyProxyLocalBypass](../cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySocketRemoteHost](../cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](../cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.

# kCFStreamPropertySocketSecurityLevel (Objective-C)

**Framework:** Core Foundation  
**Kind:** Global Variable  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.2+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Socket Security Level property key.

## Declaration

```objectivec
extern CFStringRef const kCFStreamPropertySocketSecurityLevel;
```

<a id="Discussion"></a>

## Discussion

See [CFStream Socket Security Level Constants](cfstream-socket-security-level-constants.md) for specific security level constants to use.

> **Note**

>  If you set this key, you must do so before setting any other SSL options, such as `kCFStreamPropertySSLSettings`.

## See Also

### Constants

- [kCFStreamPropertyAppendToFile](cfstreampropertykey/appendtofile.md): Value is a `CFBoolean` value that indicates whether to append the written data to a file, if it already exists, rather than to replace its contents.
- [kCFStreamPropertyDataWritten](cfstreampropertykey/datawritten.md): Value is a `CFData` object that contains all the bytes written to a writable memory stream. You cannot modify this value.
- [kCFStreamPropertyFileCurrentOffset](cfstreampropertykey/filecurrentoffset.md): Value is a `CFNumber` object containing the current file offset.
- [kCFStreamPropertySocketNativeHandle](cfstreampropertykey/socketnativehandle.md): Value is a `CFData` object that contains the native handle for a socket stream—of type [CFSocketNativeHandle](cfsocketnativehandle.md)—to which the socket stream is connected.
- [kCFStreamPropertySocketRemoteHostName](cfstreampropertykey/socketremotehostname.md): Value is a `CFString` object containing the name of the host to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertySocketRemotePortNumber](cfstreampropertykey/socketremoteportnumber.md): Value is a `CFNumber` object containing the remote port number to which the socket stream is connected or `NULL` if unknown.
- [kCFStreamPropertyShouldCloseNativeSocket](kcfstreampropertyshouldclosenativesocket.md): Should Close Native Socket property key.
- [kCFStreamPropertySSLPeerCertificates](../cfnetwork/kcfstreampropertysslpeercertificates.md): Deprecated. SSL Peer Certificates property key for copy operations, which return a `CFArray` object containing `SecCertificateRef` objects.
- [kCFStreamPropertySSLPeerTrust](../cfnetwork/kcfstreampropertysslpeertrust.md): SSL Peer Trust property key for copy operations, which return a `SecTrustRef` object containing the result of the SSL handshake.
- [kCFStreamPropertySSLSettings](../cfnetwork/kcfstreampropertysslsettings.md): SSL Settings property key for set operations.
- [kCFStreamPropertySSLContext](../cfnetwork/kcfstreampropertysslcontext.md)
- [kCFStreamPropertySOCKSProxy](kcfstreampropertysocksproxy.md): SOCKS proxy property key.
- [kCFStreamPropertyProxyLocalBypass](../cfnetwork/kcfstreampropertyproxylocalbypass.md): Proxy Local Bypass property key.
- [kCFStreamPropertySocketRemoteHost](../cfnetwork/kcfstreampropertysocketremotehost.md): The key’s value is a `CFHostRef` for the remote host if it is known. If not, its value is `NULL`.
- [kCFStreamPropertySocketRemoteNetService](../cfnetwork/kcfstreampropertysocketremotenetservice.md): The key’s value is a `CFNetServiceRef` for the remote network service if it is known. If not, its value is `NULL`.
