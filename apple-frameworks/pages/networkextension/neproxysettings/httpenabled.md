> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neproxysettings/httpenabled

# httpEnabled (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if a static HTTP proxy will be used.

## Declaration

```swift
var httpEnabled: Bool { get set }
```

## See Also

### Accessing Manual Proxy Properties

- [httpServer](httpserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.
- [httpsEnabled](httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [httpsServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.

# HTTPEnabled (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean indicating if a static HTTP proxy will be used.

## Declaration

```objectivec
@property BOOL HTTPEnabled;
```

## See Also

### Accessing Manual Proxy Properties

- [HTTPServer](httpserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTP proxy server settings.
- [HTTPSEnabled](httpsenabled.md): A Boolean indicating if a static HTTPS proxy will be used.
- [HTTPSServer](httpsserver.md): An [NEProxyServer](../neproxyserver.md) object containing the static HTTPS proxy server settings.
- [NEProxyServer](../neproxyserver.md): `NEProxyServer` contains settings for a proxy server.
