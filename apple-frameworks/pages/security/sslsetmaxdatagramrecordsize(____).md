> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslsetmaxdatagramrecordsize(_:_:)](https://developer.apple.com/documentation/security/sslsetmaxdatagramrecordsize(_:_:))

# SSLSetMaxDatagramRecordSize(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Sets the maximum datagram record size allowed by the application for a given context.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLSetMaxDatagramRecordSize(_ dtlsContext: SSLContext, _ maxSize: Int) -> OSStatus
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `maxSize`: The length value.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The size you indicate includes all Datagram Transport Layer Security (DTLS) headers.

You can specify a new value up to the maximum size of a UDP packet (which, in turn, is based on the underlying IP protocol).

# SSLSetMaxDatagramRecordSize (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Sets the maximum datagram record size allowed by the application for a given context.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLSetMaxDatagramRecordSize(SSLContextRef dtlsContext, size_t maxSize);
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `maxSize`: The length value.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

The size you indicate includes all Datagram Transport Layer Security (DTLS) headers.

You can specify a new value up to the maximum size of a UDP packet (which, in turn, is based on the underlying IP protocol).
