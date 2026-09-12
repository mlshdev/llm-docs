> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings](https://developer.apple.com/documentation/networkextension/neproxysettings)

# NEProxySettings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEProxySettings` contains HTTP proxy settings.

## Declaration

```swift
class NEProxySettings
```

<a id="overview"></a>

## Overview

`NEProxySettings` is used in the context of a VPN configuration to specify the proxy that should be used for network traffic when the VPN is active.

Instances of this class are thread safe.

## Topics

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](neproxysettings/autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationURL](neproxysettings/proxyautoconfigurationurl.md): A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.
- [proxyAutoConfigurationJavaScript](neproxysettings/proxyautoconfigurationjavascript.md): A string containing the Proxy Auto Configuration (PAC) JavaScript source code.

### Accessing Manual Proxy Properties

- [httpEnabled](neproxysettings/httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [httpServer](neproxysettings/httpserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTP proxy server settings.
- [httpsEnabled](neproxysettings/httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [httpsServer](neproxysettings/httpsserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](neproxyserver.md): `NEProxyServer` contains settings for a proxy server.

### Accessing General Proxy Properties

- [excludeSimpleHostnames](neproxysettings/excludesimplehostnames.md): A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.
- [exceptionList](neproxysettings/exceptionlist.md): An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.
- [matchDomains](neproxysettings/matchdomains.md): An array of domain strings.

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

### Accessing tunnel network settings

- [tunnelRemoteAddress](netunnelnetworksettings/tunnelremoteaddress.md): The IP address of the tunnel server.
- [dnsSettings](netunnelnetworksettings/dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](netunnelnetworksettings/proxysettings.md): The tunnel HTTP proxy settings.

# NEProxySettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

`NEProxySettings` contains HTTP proxy settings.

## Declaration

```objectivec
@interface NEProxySettings : NSObject
```

<a id="overview"></a>

## Overview

`NEProxySettings` is used in the context of a VPN configuration to specify the proxy that should be used for network traffic when the VPN is active.

Instances of this class are thread safe.

## Topics

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](neproxysettings/autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationURL](neproxysettings/proxyautoconfigurationurl.md): A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.
- [proxyAutoConfigurationJavaScript](neproxysettings/proxyautoconfigurationjavascript.md): A string containing the Proxy Auto Configuration (PAC) JavaScript source code.

### Accessing Manual Proxy Properties

- [HTTPEnabled](neproxysettings/httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [HTTPServer](neproxysettings/httpserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTP proxy server settings.
- [HTTPSEnabled](neproxysettings/httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [HTTPSServer](neproxysettings/httpsserver.md): An [NEProxyServer](neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](neproxyserver.md): `NEProxyServer` contains settings for a proxy server.

### Accessing General Proxy Properties

- [excludeSimpleHostnames](neproxysettings/excludesimplehostnames.md): A Boolean indicating if HTTP requests using single-label host names should be excluded from using the proxy settings.
- [exceptionList](neproxysettings/exceptionlist.md): An array of domain name patterns. If the destination host name of an HTTP connection matches one of these patterns then the proxy settings will not be used for the connection.
- [matchDomains](neproxysettings/matchdomains.md): An array of domain strings.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Accessing tunnel network settings

- [tunnelRemoteAddress](netunnelnetworksettings/tunnelremoteaddress.md): The IP address of the tunnel server.
- [DNSSettings](netunnelnetworksettings/dnssettings.md): The tunnel DNS settings.
- [NEDNSSettings](nednssettings.md): The DNS resolver settings of a network tunnel or a system-wide configuration.
- [proxySettings](netunnelnetworksettings/proxysettings.md): The tunnel HTTP proxy settings.
