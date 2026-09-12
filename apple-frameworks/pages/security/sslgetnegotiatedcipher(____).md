> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetnegotiatedcipher(_:_:)](https://developer.apple.com/documentation/security/sslgetnegotiatedcipher(_:_:))

# SSLGetNegotiatedCipher(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Retrieves the cipher suite negotiated for this session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetNegotiatedCipher(_ context: SSLContext, _ cipherSuite: UnsafeMutablePointer<SSLCipherSuite>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `cipherSuite`: On return, points to the cipher suite that was negotiated for this session.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You should call this function only when a session is active.

# SSLGetNegotiatedCipher (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves the cipher suite negotiated for this session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetNegotiatedCipher(SSLContextRef context, SSLCipherSuite *cipherSuite);
```

## Parameters

- `context`: An SSL session context reference.
- `cipherSuite`: On return, points to the cipher suite that was negotiated for this session.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You should call this function only when a session is active.
