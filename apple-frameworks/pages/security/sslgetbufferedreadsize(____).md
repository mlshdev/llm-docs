> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetbufferedreadsize(_:_:)](https://developer.apple.com/documentation/security/sslgetbufferedreadsize(_:_:))

# SSLGetBufferedReadSize(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Determines how much data is available to be read.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetBufferedReadSize(_ context: SSLContext, _ bufferSize: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `bufferSize`: On return, the size of the data to be read.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function determines how much data you can be guaranteed to obtain in a call to the [SSLRead(\_:\_:\_:\_:)](sslread%28________%29.md) function. This function does not block or cause any low-level read operations to occur.

# SSLGetBufferedReadSize (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines how much data is available to be read.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetBufferedReadSize(SSLContextRef context, size_t *bufferSize);
```

## Parameters

- `context`: An SSL session context reference.
- `bufferSize`: On return, the size of the data to be read.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

This function determines how much data you can be guaranteed to obtain in a call to the [SSLRead](sslread%28________%29.md) function. This function does not block or cause any low-level read operations to occur.
