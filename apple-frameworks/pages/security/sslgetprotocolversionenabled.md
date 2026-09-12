> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetprotocolversionenabled](https://developer.apple.com/documentation/security/sslgetprotocolversionenabled)

# SSLGetProtocolVersionEnabled

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.9)

Retrieves the enabled status of a given protocol.

> Use [SSLGetProtocolVersionMin](sslgetprotocolversionmin%28____%29.md) and/or [SSLGetProtocolVersionMax](sslgetprotocolversionmax%28____%29.md) to check whether a protocol is enabled.

## Declaration

```objectivec
OSStatus SSLGetProtocolVersionEnabled(SSLContextRef context, SSLProtocol protocol, Boolean *enable);
```

## Parameters

- `context`: An SSL session context reference.
- `protocol`: A value of type `SSLProtocol` representing an SSL protocol version.
- `enable`: On return, points to a Boolean value indicating whether the specified protocol version is enabled. If this value is `true`, the protocol is enabled.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can specify any one of the following values for the `protocol` parameter:

- `kSSLProtocol2`
- `kSSLProtocol3`
- `kTLSProtocol1`
- `kSSLProtocolAll` Specify this value to determine whether all protocols are enabled.
