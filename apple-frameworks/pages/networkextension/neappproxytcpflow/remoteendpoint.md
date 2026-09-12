> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxytcpflow/remoteendpoint](https://developer.apple.com/documentation/networkextension/neappproxytcpflow/remoteendpoint)

# remoteEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An [NWEndpoint](../nwendpoint.md) object containing information about the intended remote endpoint of the flow.

## Declaration

```swift
var remoteEndpoint: NWEndpoint { get }
```

<a id="Discussion"></a>

## Discussion

If the flow’s corresponding socket was created using one of the high-level networking APIs such as [URLSession](../../foundation/urlsession.md) or [NSURLConnection](../../foundation/nsurlconnection.md), then the hostname property of the `remoteEndpoint` object contains the DNS name of the remote host. If the flow’s corresponding socket was created using the sockets API directly, then the hostname property of the `remoteEndpoint` object contains the IP address of the remote host.

# remoteEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An [NWEndpoint](../nwendpoint.md) object containing information about the intended remote endpoint of the flow.

## Declaration

```objectivec
@property (readonly) NWEndpoint * remoteEndpoint;
```

<a id="Discussion"></a>

## Discussion

If the flow’s corresponding socket was created using one of the high-level networking APIs such as [NSURLSession](../../foundation/urlsession.md) or [NSURLConnection](../../foundation/nsurlconnection.md), then the hostname property of the `remoteEndpoint` object contains the DNS name of the remote host. If the flow’s corresponding socket was created using the sockets API directly, then the hostname property of the `remoteEndpoint` object contains the IP address of the remote host.
