> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/httpsenabled](https://developer.apple.com/documentation/networkextension/neproxysettings/httpsenabled)

# httpsEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if a static HTTPS proxy will be used.

## Declaration

```swift
var httpsEnabled: Bool { get set }
```

## See Also

### Accessing Manual Proxy Properties

- [httpEnabled](httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [httpServer](httpserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.
- [httpsServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.

# HTTPSEnabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if a static HTTPS proxy will be used.

## Declaration

```objectivec
@property BOOL HTTPSEnabled;
```

## See Also

### Accessing Manual Proxy Properties

- [HTTPEnabled](httpenabled.md): A Boolean indicating if a static HTTP proxy will be used.
- [HTTPServer](httpserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.
- [HTTPSServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.
