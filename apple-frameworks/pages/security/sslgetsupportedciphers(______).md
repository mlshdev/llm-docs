> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetsupportedciphers(_:_:_:)](https://developer.apple.com/documentation/security/sslgetsupportedciphers(_:_:_:))

# SSLGetSupportedCiphers(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Determines the values of the supported cipher suites.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetSupportedCiphers(_ context: SSLContext, _ ciphers: UnsafeMutablePointer<SSLCipherSuite>, _ numCiphers: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: On return, points to the values of the supported cipher suites. Before calling, you must allocate this buffer using the number of supported cipher suites retrieved from a call to the [SSLGetNumberSupportedCiphers(\_:\_:)](sslgetnumbersupportedciphers%28____%29.md) function.
- `numCiphers`: Points to the number of supported cipher suites that you want returned. Before calling, retrieve this value by calling the [SSLGetNumberSupportedCiphers(\_:\_:)](sslgetnumbersupportedciphers%28____%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). If the supplied buffer is too small, [errSSLBufferOverflow](errsslbufferoverflow.md) is returned.

<a id="Discussion"></a>

## Discussion

All the supported cipher suites are enabled by default. Use the [SSLSetEnabledCiphers(\_:\_:\_:)](sslsetenabledciphers%28______%29.md) function to enable a subset of the supported cipher suites. Use the [SSLGetEnabledCiphers(\_:\_:\_:)](sslgetenabledciphers%28______%29.md) function to determine which cipher suites are currently enabled.

# SSLGetSupportedCiphers (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines the values of the supported cipher suites.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetSupportedCiphers(SSLContextRef context, SSLCipherSuite *ciphers, size_t *numCiphers);
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: On return, points to the values of the supported cipher suites. Before calling, you must allocate this buffer using the number of supported cipher suites retrieved from a call to the [SSLGetNumberSupportedCiphers](sslgetnumbersupportedciphers%28____%29.md) function.
- `numCiphers`: Points to the number of supported cipher suites that you want returned. Before calling, retrieve this value by calling the [SSLGetNumberSupportedCiphers](sslgetnumbersupportedciphers%28____%29.md) function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md). If the supplied buffer is too small, [errSSLBufferOverflow](errsslbufferoverflow.md) is returned.

<a id="Discussion"></a>

## Discussion

All the supported cipher suites are enabled by default. Use the [SSLSetEnabledCiphers](sslsetenabledciphers%28______%29.md) function to enable a subset of the supported cipher suites. Use the [SSLGetEnabledCiphers](sslgetenabledciphers%28______%29.md) function to determine which cipher suites are currently enabled.
