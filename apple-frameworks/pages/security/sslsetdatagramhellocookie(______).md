> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetdatagramhellocookie(_:_:_:)](https://developer.apple.com/documentation/security/sslsetdatagramhellocookie(_:_:_:))

# SSLSetDatagramHelloCookie(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Sets the cookie value used in the Datagram Transport Layer Security (DTLS) hello message.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetDatagramHelloCookie(_ dtlsContext: SSLContext, _ cookie: UnsafeRawPointer?, _ cookieLen: Int) -> OSStatus
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `cookie`: The cookie value.
- `cookieLen`: The length of the cookie (up to 32 bytes).

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function should be called only on the server side, and is optional. The default cookie is a zero-length cookie.

# SSLSetDatagramHelloCookie (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Sets the cookie value used in the Datagram Transport Layer Security (DTLS) hello message.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetDatagramHelloCookie(SSLContextRef dtlsContext, const void *cookie, size_t cookieLen);
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `cookie`: The cookie value.
- `cookieLen`: The length of the cookie (up to 32 bytes).

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function should be called only on the server side, and is optional. The default cookie is a zero-length cookie.
