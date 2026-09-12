> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetiofuncs(_:_:_:)](https://developer.apple.com/documentation/security/sslsetiofuncs(_:_:_:))

# SSLSetIOFuncs(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Specifies callback functions that perform the network I/O operations.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetIOFuncs(_ context: SSLContext, _ readFunc: SSLReadFunc, _ writeFunc: SSLWriteFunc) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `readFunc`: A pointer to your read callback function. See [SSLReadFunc](sslreadfunc.md) for information on defining this function.
- `writeFunc`: A pointer to your write callback function. See [SSLWriteFunc](sslwritefunc.md) for information on defining this function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Secure Transport calls your read and write callback functions to perform network I/O. You must define these functions before calling [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md).

You must call [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md) prior to calling the [SSLHandshake(\_:)](sslhandshake%28__%29.md) function. [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md) cannot be called while a session is active.

# SSLSetIOFuncs (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Specifies callback functions that perform the network I/O operations.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetIOFuncs(SSLContextRef context, SSLReadFunc readFunc, SSLWriteFunc writeFunc);
```

## Parameters

- `context`: An SSL session context reference.
- `readFunc`: A pointer to your read callback function. See [SSLReadFunc](sslreadfunc.md) for information on defining this function.
- `writeFunc`: A pointer to your write callback function. See [SSLWriteFunc](sslwritefunc.md) for information on defining this function.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Secure Transport calls your read and write callback functions to perform network I/O. You must define these functions before calling [SSLSetIOFuncs](sslsetiofuncs%28______%29.md).

You must call [SSLSetIOFuncs](sslsetiofuncs%28______%29.md) prior to calling the [SSLHandshake](sslhandshake%28__%29.md) function. [SSLSetIOFuncs](sslsetiofuncs%28______%29.md) cannot be called while a session is active.
