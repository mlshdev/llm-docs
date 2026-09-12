> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetworkcopysystemproxysettings()](https://developer.apple.com/documentation/cfnetwork/cfnetworkcopysystemproxysettings())

# CFNetworkCopySystemProxySettings() (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns a CFDictionary containing the current systemwide internet proxy settings.

## Declaration

```swift
func CFNetworkCopySystemProxySettings() -> Unmanaged<CFDictionary>?
```

<a id="Discussion"></a>

## Discussion

The dictionary returned contains key-value pairs that represent the current internet proxy settings. The keys in this dictionary are defined in [Global Proxy Settings Constants](global-proxy-settings-constants.md).

The caller is responsible for releasing the returned dictionary.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

# CFNetworkCopySystemProxySettings (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+

Returns a CFDictionary containing the current systemwide internet proxy settings.

## Declaration

```objectivec
extern CFDictionaryRefCFNetworkCopySystemProxySettings();
```

<a id="Discussion"></a>

## Discussion

The dictionary returned contains key-value pairs that represent the current internet proxy settings. The keys in this dictionary are defined in [Global Proxy Settings Constants](global-proxy-settings-constants.md).

The caller is responsible for releasing the returned dictionary.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).
