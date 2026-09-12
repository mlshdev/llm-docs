> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxyserver](https://developer.apple.com/documentation/networkextension/neproxyserver)

# NEProxyServer (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEProxyServer` contains settings for a proxy server.

## Declaration

```swift
class NEProxyServer
```

<a id="overview"></a>

## Overview

`NEProxyServer` instances are used inside of [NEProxySettings](neproxysettings.md) instances to configure proxy settings for VPN connections.

## Topics

### Initializing a Proxy Server

- [init(address:port:)](neproxyserver/init%28address_port_%29.md): Initialize a newly-allocated `NEProxyServer` object

### Accessing Proxy Server Properties

- [address](neproxyserver/address.md): The address of the proxy server.
- [port](neproxyserver/port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](neproxyserver/authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [username](neproxyserver/username.md): The username portion of the authentication credential to be used to authenticate with the proxy server.
- [password](neproxyserver/password.md): The password portion of the authentication credential to be used to authenticate with the proxy server.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing Manual Proxy Properties

- [httpEnabled](neproxysettings/httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [httpServer](neproxysettings/httpserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTP proxy server settings.
- [httpsEnabled](neproxysettings/httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [httpsServer](neproxysettings/httpsserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTPS proxy server settings.

# NEProxyServer (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEProxyServer` contains settings for a proxy server.

## Declaration

```objectivec
@interface NEProxyServer : NSObject
```

<a id="overview"></a>

## Overview

`NEProxyServer` instances are used inside of [NEProxySettings](neproxysettings.md) instances to configure proxy settings for VPN connections.

## Topics

### Initializing a Proxy Server

- [initWithAddress:port:](neproxyserver/init%28address_port_%29.md): Initialize a newly-allocated `NEProxyServer` object

### Accessing Proxy Server Properties

- [address](neproxyserver/address.md): The address of the proxy server.
- [port](neproxyserver/port.md): The TCP port on which the proxy server is listening for connections.
- [authenticationRequired](neproxyserver/authenticationrequired.md): A Boolean indicating if the server requires authentication credentials.
- [username](neproxyserver/username.md): The username portion of the authentication credential to be used to authenticate with the proxy server.
- [password](neproxyserver/password.md): The password portion of the authentication credential to be used to authenticate with the proxy server.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing Manual Proxy Properties

- [HTTPEnabled](neproxysettings/httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [HTTPServer](neproxysettings/httpserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTP proxy server settings.
- [HTTPSEnabled](neproxysettings/httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [HTTPSServer](neproxysettings/httpsserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTPS proxy server settings.
