> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxymanager/providerprotocol](https://developer.apple.com/documentation/networkextension/nednsproxymanager/providerprotocol)

# providerProtocol (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The provider-specific portion of the DNS proxy configuration.

## Declaration

```swift
var providerProtocol: NEDNSProxyProviderProtocol? { get set }
```

<a id="Discussion"></a>

## Discussion

As the author of the DNS proxy, you decide what configuration the proxy needs. For example, if your proxy requires the IP addresses of servers to which DNS traffic can be redirected, you can use an array of strings to hold these values.

Initially, you store this array in the configuration profile, as described in [Configuration Profile Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010206). When you want to inspect or modify this data, you call [loadFromPreferences(completionHandler:)](loadfrompreferences%28completionhandler_%29.md) to pull the configuration into memory. You access this memory through the proxy manager’s [providerProtocol](providerprotocol.md) property.

## See Also

### Accessing DNS proxy configuration properties

- [isEnabled](isenabled.md): The status of a DNS proxy.
- [localizedDescription](localizeddescription.md): A description of the DNS proxy.

# providerProtocol (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · visionOS 1.0+

The provider-specific portion of the DNS proxy configuration.

## Declaration

```objectivec
@property (strong, nullable) NEDNSProxyProviderProtocol * providerProtocol;
```

<a id="Discussion"></a>

## Discussion

As the author of the DNS proxy, you decide what configuration the proxy needs. For example, if your proxy requires the IP addresses of servers to which DNS traffic can be redirected, you can use an array of strings to hold these values.

Initially, you store this array in the configuration profile, as described in [Configuration Profile Reference](https://developer.apple.com/library/archive/featuredarticles/iPhoneConfigurationProfileRef/Introduction/Introduction.html#//apple_ref/doc/uid/TP40010206). When you want to inspect or modify this data, you call [loadFromPreferencesWithCompletionHandler:](loadfrompreferences%28completionhandler_%29.md) to pull the configuration into memory. You access this memory through the proxy manager’s [providerProtocol](providerprotocol.md) property.

## See Also

### Accessing DNS proxy configuration properties

- [enabled](isenabled.md): The status of a DNS proxy.
- [localizedDescription](localizeddescription.md): A description of the DNS proxy.
