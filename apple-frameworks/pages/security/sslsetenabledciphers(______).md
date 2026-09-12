> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetenabledciphers(_:_:_:)](https://developer.apple.com/documentation/security/sslsetenabledciphers(_:_:_:))

# SSLSetEnabledCiphers(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Specifies a restricted set of SSL cipher suites to be enabled by the current SSL session context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetEnabledCiphers(_ context: SSLContext, _ ciphers: UnsafePointer<SSLCipherSuite>, _ numCiphers: Int) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: A pointer to the cipher suites to enable.
- `numCiphers`: The number of cipher suites to enable.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can call this function, for example, to limit cipher suites to those that use exportable key sizes or to those supported by a particular protocol version.

This function can be called only when no session is active. The default set of enabled cipher suites is the complete set of supported cipher suites obtained by calling the [SSLGetSupportedCiphers(\_:\_:\_:)](sslgetsupportedciphers%28______%29.md) function.

Call the [SSLGetEnabledCiphers(\_:\_:\_:)](sslgetenabledciphers%28______%29.md) function to determine which SSL cipher suites are currently enabled.

# SSLSetEnabledCiphers (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies a restricted set of SSL cipher suites to be enabled by the current SSL session context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetEnabledCiphers(SSLContextRef context, const SSLCipherSuite *ciphers, size_t numCiphers);
```

## Parameters

- `context`: An SSL session context reference.
- `ciphers`: A pointer to the cipher suites to enable.
- `numCiphers`: The number of cipher suites to enable.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can call this function, for example, to limit cipher suites to those that use exportable key sizes or to those supported by a particular protocol version.

This function can be called only when no session is active. The default set of enabled cipher suites is the complete set of supported cipher suites obtained by calling the [SSLGetSupportedCiphers](sslgetsupportedciphers%28______%29.md) function.

Call the [SSLGetEnabledCiphers](sslgetenabledciphers%28______%29.md) function to determine which SSL cipher suites are currently enabled.
