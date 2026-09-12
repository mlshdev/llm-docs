> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/options/listenforconnections](https://developer.apple.com/documentation/foundation/netservice/options/listenforconnections)

# listenForConnections (Swift)

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```swift
static var listenForConnections: NetService.Options { get }
```

<a id="Discussion"></a>

## Discussion

Specifies that a TCP listener should be started for both IPv4 and IPv6 on the port specified by this service. If the listening port can’t be opened, the service calls its delegate’s [netService(\_:didNotPublish:)](../../netservicedelegate/netservice%28__didnotpublish_%29.md) method to report the error.

The listener supports only TCP connections. If the service’s type does not end with `_tcp`, publication fails with [NetService.ErrorCode.badArgumentError](../errorcode-swift.enum/badargumenterror.md).

Whenever a client connects to the listening socket, the service calls its delegate’s [netService(\_:didAcceptConnectionWith:outputStream:)](../../netservicedelegate/netservice%28__didacceptconnectionwith_outputstream_%29.md) method with a pair of `NSStream` objects.

## See Also

### Constants

- [noAutoRename](noautorename.md): Specifies that the network service should not rename itself in the event of a name collision.

# NSNetServiceListenForConnections (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration Case  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

## Declaration

```objectivec
NSNetServiceListenForConnections
```

<a id="Discussion"></a>

## Discussion

Specifies that a TCP listener should be started for both IPv4 and IPv6 on the port specified by this service. If the listening port can’t be opened, the service calls its delegate’s [netService:didNotPublish:](../../netservicedelegate/netservice%28__didnotpublish_%29.md) method to report the error.

The listener supports only TCP connections. If the service’s type does not end with `_tcp`, publication fails with [NSNetServicesBadArgumentError](../errorcode-swift.enum/badargumenterror.md).

Whenever a client connects to the listening socket, the service calls its delegate’s [netService:didAcceptConnectionWithInputStream:outputStream:](../../netservicedelegate/netservice%28__didacceptconnectionwith_outputstream_%29.md) method with a pair of `NSStream` objects.

## See Also

### Constants

- [NSNetServiceNoAutoRename](noautorename.md): Specifies that the network service should not rename itself in the event of a name collision.
