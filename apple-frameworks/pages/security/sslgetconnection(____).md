> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetconnection(_:_:)](https://developer.apple.com/documentation/security/sslgetconnection(_:_:))

# SSLGetConnection(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Retrieves an I/O connection—such as a socket or endpoint—for a specific session.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetConnection(_ context: SSLContext, _ connection: UnsafeMutablePointer<SSLConnectionRef?>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `connection`: On return, a pointer to a session connection reference. If no connection has been set using the [SSLSetConnection(\_:\_:)](sslsetconnection%28____%29.md) function, then this parameter is `NULL` on return.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use this function on either the client or server to retrieve the connection associated with a secure session.

# SSLGetConnection (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Retrieves an I/O connection—such as a socket or endpoint—for a specific session.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetConnection(SSLContextRef context, SSLConnectionRef*connection);
```

## Parameters

- `context`: An SSL session context reference.
- `connection`: On return, a pointer to a session connection reference. If no connection has been set using the [SSLSetConnection](sslsetconnection%28____%29.md) function, then this parameter is `NULL` on return.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use this function on either the client or server to retrieve the connection associated with a secure session.
