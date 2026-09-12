> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetprotocolversionenabled](https://developer.apple.com/documentation/security/sslsetprotocolversionenabled)

# SSLSetProtocolVersionEnabled

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Sets the allowed Secure Sockets Layer (SSL) protocol versions.

> Use [SSLSetProtocolVersionMin](sslsetprotocolversionmin%28____%29.md) and/or [SSLSetProtocolVersionMax](sslsetprotocolversionmax%28____%29.md) to specify which protocols are enabled.

## Declaration

```objectivec
OSStatus SSLSetProtocolVersionEnabled(SSLContextRef context, SSLProtocol protocol, Boolean enable);
```

## Parameters

- `context`: An SSL session context reference.
- `protocol`: The SSL protocol version to enable. Pass `kSSLProtocolAll` to enable all protocols.
- `enable`: A Boolean value indicating whether to enable or disable the specified protocol. Specify `true` to enable the protocol.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Calling this function is optional. The default is that all supported protocols are enabled. When you call this function, only the specified protocol is affected. Therefore, if you call it once to disable SSL version 2 (for example), the other protocols all remain enabled. You may call this function as many times as you wish to enable and disable specific protocols. You can specify one of the following values for the `protocol` parameter:

- `kSSLProtocol2`
- `kSSLProtocol3`
- `kTLSProtocol1`
- `kSSLProtocolAll`

This function cannot be called when a session is active.
