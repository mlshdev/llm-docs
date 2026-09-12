> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyproviderprotocol](https://developer.apple.com/documentation/networkextension/nednsproxyproviderprotocol)

# NEDNSProxyProviderProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Configuration parameters for a DNS proxy.

## Declaration

```swift
class NEDNSProxyProviderProtocol
```

## Topics

### Accessing the DNS proxy configuration

- [providerConfiguration](nednsproxyproviderprotocol/providerconfiguration.md): A dictionary containing vendor-specific configuration parameters for a proxy provider.
- [providerBundleIdentifier](nednsproxyproviderprotocol/providerbundleidentifier.md): A string containing the bundle identifier of the proxy provider to be used by this configuration.

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

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

### Configuration

- [NEDNSProxyManager](nednsproxymanager.md): An object to create and manage an DNS proxy provider’s configuration.

# NEDNSProxyProviderProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

Configuration parameters for a DNS proxy.

## Declaration

```objectivec
@interface NEDNSProxyProviderProtocol : NEVPNProtocol
```

## Topics

### Accessing the DNS proxy configuration

- [providerConfiguration](nednsproxyproviderprotocol/providerconfiguration.md): A dictionary containing vendor-specific configuration parameters for a proxy provider.
- [providerBundleIdentifier](nednsproxyproviderprotocol/providerbundleidentifier.md): A string containing the bundle identifier of the proxy provider to be used by this configuration.

## Relationships

### Inherits From

- [NEVPNProtocol](nevpnprotocol.md)

## See Also

### Configuration

- [NEDNSProxyManager](nednsproxymanager.md): An object to create and manage an DNS proxy provider’s configuration.
