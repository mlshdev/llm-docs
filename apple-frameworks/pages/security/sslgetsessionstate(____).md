> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetsessionstate(_:_:)](https://developer.apple.com/documentation/security/sslgetsessionstate(_:_:))

# SSLGetSessionState(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Retrieves the state of an SSL session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetSessionState(_ context: SSLContext, _ state: UnsafeMutablePointer<SSLSessionState>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `state`: On return, points to a constant that indicates the state of the SSL session. See [SSLSessionState](sslsessionstate.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

# SSLGetSessionState (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves the state of an SSL session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetSessionState(SSLContextRef context, SSLSessionState *state);
```

## Parameters

- `context`: An SSL session context reference.
- `state`: On return, points to a constant that indicates the state of the SSL session. See [SSLSessionState](sslsessionstate.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).
