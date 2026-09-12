> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetnumberenabledciphers(_:_:)](https://developer.apple.com/documentation/security/sslgetnumberenabledciphers(_:_:))

# SSLGetNumberEnabledCiphers(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Determines the number of cipher suites currently enabled.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetNumberEnabledCiphers(_ context: SSLContext, _ numCiphers: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `numCiphers`: On return, points to the number of enabled cipher suites.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You use the number of enabled cipher suites returned by this function when you call the [SSLGetEnabledCiphers(\_:\_:\_:)](sslgetenabledciphers%28______%29.md) function to retrieve the list of currently enabled cipher suites.

# SSLGetNumberEnabledCiphers (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines the number of cipher suites currently enabled.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetNumberEnabledCiphers(SSLContextRef context, size_t *numCiphers);
```

## Parameters

- `context`: An SSL session context reference.
- `numCiphers`: On return, points to the number of enabled cipher suites.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You use the number of enabled cipher suites returned by this function when you call the [SSLGetEnabledCiphers](sslgetenabledciphers%28______%29.md) function to retrieve the list of currently enabled cipher suites.
