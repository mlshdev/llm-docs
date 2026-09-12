> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetsessionoption(_:_:_:)](https://developer.apple.com/documentation/security/sslsetsessionoption(_:_:_:))

# SSLSetSessionOption(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15)

Specifies options for a specific session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetSessionOption(_ context: SSLContext, _ option: SSLSessionOption, _ value: Bool) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `option`: An SSL session option. Possible values are listed in [SSLSessionOption](sslsessionoption.md).
- `value`: Set to [true](https://developer.apple.com/documentation/swift/true) to enable the option, or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function must be called prior to the [SSLHandshake(\_:)](sslhandshake%28__%29.md) function; consequently, this function can be called only when no session is active.

# SSLSetSessionOption (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies options for a specific session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetSessionOption(SSLContextRef context, SSLSessionOption option, Boolean value);
```

## Parameters

- `context`: An SSL session context reference.
- `option`: An SSL session option. Possible values are listed in [SSLSessionOption](sslsessionoption.md).
- `value`: Set to [true](https://developer.apple.com/documentation/swift/true) to enable the option, or [false](https://developer.apple.com/documentation/swift/false) to disable it.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function must be called prior to the [SSLHandshake](sslhandshake%28__%29.md) function; consequently, this function can be called only when no session is active.
