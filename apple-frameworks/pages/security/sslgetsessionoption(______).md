> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetsessionoption(_:_:_:)](https://developer.apple.com/documentation/security/sslgetsessionoption(_:_:_:))

# SSLGetSessionOption(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15)

Indicates the current setting of Secure Sockets Layer (SSL) session options.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetSessionOption(_ context: SSLContext, _ option: SSLSessionOption, _ value: UnsafeMutablePointer<DarwinBoolean>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `option`: An SSL session option. Possible values are listed in [SSLSessionOption](sslsessionoption.md).
- `value`: On return, `true` if the option is enabled, or `false` otherwise.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLGetSessionOption (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Indicates the current setting of Secure Sockets Layer (SSL) session options.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetSessionOption(SSLContextRef context, SSLSessionOption option, Boolean *value);
```

## Parameters

- `context`: An SSL session context reference.
- `option`: An SSL session option. Possible values are listed in [SSLSessionOption](sslsessionoption.md).
- `value`: On return, `true` if the option is enabled, or `false` otherwise.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
