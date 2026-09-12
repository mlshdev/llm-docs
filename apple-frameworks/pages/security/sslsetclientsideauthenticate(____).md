> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetclientsideauthenticate(_:_:)](https://developer.apple.com/documentation/security/sslsetclientsideauthenticate(_:_:))

# SSLSetClientSideAuthenticate(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Specifies the requirements for client-side authentication.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetClientSideAuthenticate(_ context: SSLContext, _ auth: SSLAuthenticate) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `auth`: A flag setting the requirements for client-side authentication. See [SSLAuthenticate](sslauthenticate.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function can be called only by servers. Use of this function is optional. The default authentication requirement is [SSLAuthenticate.neverAuthenticate](sslauthenticate/neverauthenticate.md). This function may be called only when no session is active.

# SSLSetClientSideAuthenticate (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies the requirements for client-side authentication.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetClientSideAuthenticate(SSLContextRef context, SSLAuthenticate auth);
```

## Parameters

- `context`: An SSL session context reference.
- `auth`: A flag setting the requirements for client-side authentication. See [SSLAuthenticate](sslauthenticate.md) for possible values.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function can be called only by servers. Use of this function is optional. The default authentication requirement is [kNeverAuthenticate](sslauthenticate/neverauthenticate.md). This function may be called only when no session is active.
