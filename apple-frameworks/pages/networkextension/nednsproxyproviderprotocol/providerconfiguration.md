> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyproviderprotocol/providerconfiguration](https://developer.apple.com/documentation/networkextension/nednsproxyproviderprotocol/providerconfiguration)

# providerConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A dictionary containing vendor-specific configuration parameters for a proxy provider.

## Declaration

```swift
var providerConfiguration: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

This dictionary is passed as-is through the `options` parameter when the framework starts a DNS proxy by calling the proxy’s [startProxy(options:completionHandler:)](../nednsproxyprovider/startproxy%28options_completionhandler_%29.md) function.

## See Also

### Accessing the DNS proxy configuration

- [providerBundleIdentifier](providerbundleidentifier.md): A string containing the bundle identifier of the proxy provider to be used by this configuration.

# providerConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A dictionary containing vendor-specific configuration parameters for a proxy provider.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * providerConfiguration;
```

<a id="Discussion"></a>

## Discussion

This dictionary is passed as-is through the `options` parameter when the framework starts a DNS proxy by calling the proxy’s [startProxyWithOptions:completionHandler:](../nednsproxyprovider/startproxy%28options_completionhandler_%29.md) function.

## See Also

### Accessing the DNS proxy configuration

- [providerBundleIdentifier](providerbundleidentifier.md): A string containing the bundle identifier of the proxy provider to be used by this configuration.
