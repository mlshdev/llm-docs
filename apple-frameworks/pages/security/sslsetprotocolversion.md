> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetprotocolversion](https://developer.apple.com/documentation/security/sslsetprotocolversion)

# SSLSetProtocolVersion

**Interface language:** Objective-C

**Framework:** Security  
**Kind:** Function  
**Availability:** macOS 10.2+ (deprecated in 10.8)

Sets the SSL protocol version.

> Use [SSLSetProtocolVersionMin](sslsetprotocolversionmin%28____%29.md) and/or [SSLSetProtocolVersionMax](sslsetprotocolversionmax%28____%29.md) to specify which protocols are enabled.

## Declaration

```objectivec
OSStatus SSLSetProtocolVersion(SSLContextRef context, SSLProtocol version);
```

## Parameters

- `context`: An SSL session context reference.
- `version`: The SSL protocol version to negotiate.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function cannot be called when a session is active.
