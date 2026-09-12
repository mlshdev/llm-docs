> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetprotocolversion](https://developer.apple.com/documentation/security/sslgetprotocolversion)

# SSLGetProtocolVersion

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Gets the SSL protocol version.

> Use [SSLGetProtocolVersionMin](sslgetprotocolversionmin%28____%29.md) and/or [SSLGetProtocolVersionMax](sslgetprotocolversionmax%28____%29.md) to check whether a protocol is enabled.

## Declaration

```objectivec
OSStatus SSLGetProtocolVersion(SSLContextRef context, SSLProtocol *protocol);
```

## Parameters

- `context`: An SSL session context reference.
- `protocol`: On return, a pointer to the SSL protocol version.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
