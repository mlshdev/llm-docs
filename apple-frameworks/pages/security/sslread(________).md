> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslread(_:_:_:_:)](https://developer.apple.com/documentation/security/sslread(_:_:_:_:))

# SSLRead(\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Performs a normal application-level read operation.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLRead(_ context: SSLContext, _ data: UnsafeMutableRawPointer, _ dataLength: Int, _ processed: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `data`: On return, points to the data read. You must allocate this buffer before calling the function. The size of this buffer must be equal to or greater than the value in the `dataLength` parameter.
- `dataLength`: The amount of data you would like to read.
- `processed`: On return, points to the number of bytes actually read.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

The [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md) function might call the [SSLReadFunc](sslreadfunc.md) function that you provide (see [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md). Because you may configure the underlying connection to operate in a nonblocking manner, a read operation might return `errSSLWouldBlock`, indicating that less data than requested was actually transferred. In this case, you should repeat the call to [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md) until some other result is returned.

# SSLRead (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Performs a normal application-level read operation.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLRead(SSLContextRef context, void *data, size_t dataLength, size_t *processed);
```

## Parameters

- `context`: An SSL session context reference.
- `data`: On return, points to the data read. You must allocate this buffer before calling the function. The size of this buffer must be equal to or greater than the value in the `dataLength` parameter.
- `dataLength`: The amount of data you would like to read.
- `processed`: On return, points to the number of bytes actually read.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

The [SSLRead](sslread%28________%29.md) function might call the [SSLReadFunc](sslreadfunc.md) function that you provide (see [SSLSetIOFuncs](sslsetiofuncs%28______%29.md). Because you may configure the underlying connection to operate in a nonblocking manner, a read operation might return `errSSLWouldBlock`, indicating that less data than requested was actually transferred. In this case, you should repeat the call to [SSLRead](sslread%28________%29.md) until some other result is returned.
