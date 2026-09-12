> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslwritefunc](https://developer.apple.com/documentation/security/sslwritefunc)

# SSLWriteFunc (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to a customized write function that secure transport calls to write data to the connection.

## Declaration

```swift
typealias SSLWriteFunc = (SSLConnectionRef, UnsafeRawPointer, UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `connection`: The SSL session connection reference.
- `data`: A pointer to the data to write to the connection.You must allocate this memory before calling this function.
- `dataLength`: Before calling, an integer representing the length of the data in bytes. On return, this is the number of bytes actually transferred.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Before using the secure transport API, you must write the functions [SSLReadFunc](sslreadfunc.md) and [SSLWriteFunc](sslwritefunc.md) and provide them to the library by calling the [SSLSetIOFuncs(\_:\_:\_:)](sslsetiofuncs%28______%29.md) function.

You may configure the underlying connection to operate in a non-blocking manner. In that case, a write operation may well return [errSSLWouldBlock](errsslwouldblock.md), indicating less data than requested was transferred and nothing is wrong except that the requested I/O hasn’t completed. This result is returned to the caller from the functions [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md), [SSLWrite(\_:\_:\_:\_:)](sslwrite%28________%29.md), or [SSLHandshake(\_:)](sslhandshake%28__%29.md).

# SSLWriteFunc (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A pointer to a customized write function that secure transport calls to write data to the connection.

## Declaration

```objectivec
typedef int (*)(const void *, const void *, unsigned long *) SSLWriteFunc;
```

## Parameters

- `connection`: The SSL session connection reference.
- `data`: A pointer to the data to write to the connection.You must allocate this memory before calling this function.
- `dataLength`: Before calling, an integer representing the length of the data in bytes. On return, this is the number of bytes actually transferred.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

## Mentioned In

- [Using the Secure Socket Layer for Network Communication](using-the-secure-socket-layer-for-network-communication.md)

<a id="Discussion"></a>

## Discussion

Before using the secure transport API, you must write the functions [SSLReadFunc](sslreadfunc.md) and [SSLWriteFunc](sslwritefunc.md) and provide them to the library by calling the [SSLSetIOFuncs](sslsetiofuncs%28______%29.md) function.

You may configure the underlying connection to operate in a non-blocking manner. In that case, a write operation may well return [errSSLWouldBlock](errsslwouldblock.md), indicating less data than requested was transferred and nothing is wrong except that the requested I/O hasn’t completed. This result is returned to the caller from the functions [SSLRead](sslread%28________%29.md), [SSLWrite](sslwrite%28________%29.md), or [SSLHandshake](sslhandshake%28__%29.md).
