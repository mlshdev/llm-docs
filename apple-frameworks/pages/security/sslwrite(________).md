> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslwrite(_:_:_:_:)](https://developer.apple.com/documentation/security/sslwrite(_:_:_:_:))

# SSLWrite(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Performs a typical application-level write operation.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLWrite(_ context: SSLContext, _ data: UnsafeRawPointer?, _ dataLength: Int, _ processed: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `data`: A pointer to the buffer of data to write.
- `dataLength`: The amount, in bytes, of data to write.
- `processed`: On return, the length, in bytes, of the data actually written.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

The [SSLWrite(\_:\_:\_:\_:)](sslwrite%28________%29.md) function might call the [SSLWriteFunc](sslwritefunc.md) function that you provide (see [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md)). Because you may configure the underlying connection to operate in a no-blocking manner, a write operation might return `errSSLWouldBlock`, indicating that less data than requested was actually transferred. In this case, you should repeat the call to [SSLWrite(\_:\_:\_:\_:)](sslwrite%28________%29.md) until some other result is returned.

# SSLWrite (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Performs a typical application-level write operation.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLWrite(SSLContextRef context, const void *data, size_t dataLength, size_t *processed);
```

## Parameters

- `context`: An SSL session context reference.
- `data`: A pointer to the buffer of data to write.
- `dataLength`: The amount, in bytes, of data to write.
- `processed`: On return, the length, in bytes, of the data actually written.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

The [SSLWrite](sslwrite%28________%29.md) function might call the [SSLWriteFunc](sslwritefunc.md) function that you provide (see [SSLSetIOFuncs](sslsetiofuncs%28______%29.md)). Because you may configure the underlying connection to operate in a no-blocking manner, a write operation might return `errSSLWouldBlock`, indicating that less data than requested was actually transferred. In this case, you should repeat the call to [SSLWrite](sslwrite%28________%29.md) until some other result is returned.
