> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetdatagramwritesize(_:_:)](https://developer.apple.com/documentation/security/sslgetdatagramwritesize(_:_:))

# SSLGetDatagramWriteSize(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15)

Provides the largest packet that the OS guarantees it can send without fragmentation.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetDatagramWriteSize(_ dtlsContext: SSLContext, _ bufSize: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `bufSize`: The address of a `size_t` integer for storing the length.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Although any packet below this threshold size will not be fragmented by the OS when sent using [SSLWrite(\_:\_:\_:\_:)](sslwrite%28________%29.md), this function provides no guarantees about whether the packet will be fragmented by routers en route. This size value is equal to the maximum Datagram Record size (set by calling [SSLSetMaxDatagramRecordSize(\_:\_:)](sslsetmaxdatagramrecordsize%28____%29.md)) minus the DTLS Record header size.

# SSLGetDatagramWriteSize (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Provides the largest packet that the OS guarantees it can send without fragmentation.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetDatagramWriteSize(SSLContextRef dtlsContext, size_t *bufSize);
```

## Parameters

- `dtlsContext`: The SSL context associated with the connection.
- `bufSize`: The address of a `size_t` integer for storing the length.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

Although any packet below this threshold size will not be fragmented by the OS when sent using [SSLWrite](sslwrite%28________%29.md), this function provides no guarantees about whether the packet will be fragmented by routers en route. This size value is equal to the maximum Datagram Record size (set by calling [SSLSetMaxDatagramRecordSize](sslsetmaxdatagramrecordsize%28____%29.md)) minus the DTLS Record header size.
