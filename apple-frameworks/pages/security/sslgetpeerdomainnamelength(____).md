> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sslgetpeerdomainnamelength(_:_:)](https://developer.apple.com/documentation/security/sslgetpeerdomainnamelength(_:_:))

# SSLGetPeerDomainNameLength(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15)

Determines the length of a previously set peer domain name.

> No longer supported. Use Network.framework.

## Declaration

```swift
func SSLGetPeerDomainNameLength(_ context: SSLContext, _ peerNameLen: UnsafeMutablePointer<Int>) -> OSStatus
```

## Parameters

- `context`: An SSL session context reference.
- `peerNameLen`: On return, points to the length of the peer domain name.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you previously called the [SSLSetPeerDomainName(\_:\_:\_:)](sslsetpeerdomainname%28______%29.md) function to specify a fully qualified domain name for the peer certificate, you can use the [SSLGetPeerDomainName(\_:\_:\_:)](sslgetpeerdomainname%28______%29.md) function to retrieve the peer domain name. Before doing so, you must call the [SSLGetPeerDomainNameLength(\_:\_:)](sslgetpeerdomainnamelength%28____%29.md) function to retrieve the buffer size needed for the domain name.

# SSLGetPeerDomainNameLength (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 5.0+ (deprecated in 13.0) · iPadOS 5.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.2+ (deprecated in 10.15) · tvOS 9.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 6.0)

Determines the length of a previously set peer domain name.

> No longer supported. Use Network.framework.

## Declaration

```objectivec
OSStatus SSLGetPeerDomainNameLength(SSLContextRef context, size_t *peerNameLen);
```

## Parameters

- `context`: An SSL session context reference.
- `peerNameLen`: On return, points to the length of the peer domain name.

<a id="return-value"></a>

## Return Value

A result code. See [Secure Transport Result Codes](secure-transport-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you previously called the [SSLSetPeerDomainName](sslsetpeerdomainname%28______%29.md) function to specify a fully qualified domain name for the peer certificate, you can use the [SSLGetPeerDomainName](sslgetpeerdomainname%28______%29.md) function to retrieve the peer domain name. Before doing so, you must call the [SSLGetPeerDomainNameLength](sslgetpeerdomainnamelength%28____%29.md) function to retrieve the buffer size needed for the domain name.
