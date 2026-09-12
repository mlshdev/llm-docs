> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslseterror(_:_:)](https://developer.apple.com/documentation/security/sslseterror(_:_:))

# SSLSetError(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15)

Sets the status of a session context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetError(_ context: SSLContext, _ status: OSStatus) -> OSStatus
```

## Parameters

- `context`: A session context.
- `status`: A status result for the context, not to be confused with the return result of this function call. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="return-value"></a>

## Return Value

A result code that represents the outcome of this function call, not to be confused with the `status` parameter. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function after handling the steps of an SSL handshake, such as server certificate validation.

# SSLSetError (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.13+ (deprecated in 10.15) · tvOS 11.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Sets the status of a session context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetError(SSLContextRef context, OSStatus status);
```

## Parameters

- `context`: A session context.
- `status`: A status result for the context, not to be confused with the return result of this function call. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="return-value"></a>

## Return Value

A result code that represents the outcome of this function call, not to be confused with the `status` parameter. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Call this function after handling the steps of an SSL handshake, such as server certificate validation.
