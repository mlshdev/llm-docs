> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetenabledciphers(_:_:_:)](https://developer.apple.com/documentation/security/sslgetenabledciphers(_:_:_:))

# SSLGetEnabledCiphers(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Determines which SSL cipher suites are currently enabled.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetEnabledCiphers(_ context: SSLContext, _ ciphers: UnsafeMutablePointer<SSLCipherSuite>, _ numCiphers: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: On return, points to the enabled cipher suites. Before calling, you must allocate this buffer using the number of enabled cipher suites retrieved from a call to the [SSLGetNumberEnabledCiphers(\_:\_:)](sslgetnumberenabledciphers%28____%29.md) function.
- `numCiphers`: Pointer to the number of enabled cipher suites. Before calling, retrieve this value by calling the [SSLGetNumberEnabledCiphers(\_:\_:)](sslgetnumberenabledciphers%28____%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). If the supplied buffer is too small, [errSSLBufferOverflow](errsslbufferoverflow.md) is returned.

<a id="Discussion"></a>

## Discussion

Call the [SSLSetEnabledCiphers(\_:\_:\_:)](sslsetenabledciphers%28______%29.md) function to specify which SSL cipher suites are enabled.

# SSLGetEnabledCiphers (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines which SSL cipher suites are currently enabled.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetEnabledCiphers(SSLContextRef context, SSLCipherSuite *ciphers, size_t *numCiphers);
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: On return, points to the enabled cipher suites. Before calling, you must allocate this buffer using the number of enabled cipher suites retrieved from a call to the [SSLGetNumberEnabledCiphers](sslgetnumberenabledciphers%28____%29.md) function.
- `numCiphers`: Pointer to the number of enabled cipher suites. Before calling, retrieve this value by calling the [SSLGetNumberEnabledCiphers](sslgetnumberenabledciphers%28____%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). If the supplied buffer is too small, [errSSLBufferOverflow](errsslbufferoverflow.md) is returned.

<a id="Discussion"></a>

## Discussion

Call the [SSLSetEnabledCiphers](sslsetenabledciphers%28______%29.md) function to specify which SSL cipher suites are enabled.
