> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/httpserver](https://developer.apple.com/documentation/networkextension/neproxysettings/httpserver)

# httpServer (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.

## Declaration

```swift
@NSCopying var httpServer: NEProxyServer? { get set }
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is [false](https://developer.apple.com/documentation/swift/false) and [httpEnabled](httpenabled.md) is [true](https://developer.apple.com/documentation/swift/true), then the proxy server specified in this property will be used for HTTP connections.

## See Also

### Related Documentation

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.

### Accessing Manual Proxy Properties

- [httpEnabled](httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [httpsEnabled](httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [httpsServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.

# HTTPServer (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.

## Declaration

```objectivec
@property (copy, nullable) NEProxyServer * HTTPServer;
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is [false](https://developer.apple.com/documentation/swift/false) and [HTTPEnabled](httpenabled.md) is [true](https://developer.apple.com/documentation/swift/true), then the proxy server specified in this property will be used for HTTP connections.

## See Also

### Related Documentation

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.

### Accessing Manual Proxy Properties

- [HTTPEnabled](httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [HTTPSEnabled](httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [HTTPSServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.
