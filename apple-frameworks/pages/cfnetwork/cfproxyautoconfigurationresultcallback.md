> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfproxyautoconfigurationresultcallback](https://developer.apple.com/documentation/cfnetwork/cfproxyautoconfigurationresultcallback)

# CFProxyAutoConfigurationResultCallback (Swift)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Callback function called when a proxy autoconfiguration computation has completed.

## Declaration

```swift
typealias CFProxyAutoConfigurationResultCallback = (UnsafeMutableRawPointer, CFArray, CFError?) -> Void
```

## Parameters

- `client`: The client reference originally passed in the `clientContext` parameter of the `CFNetworkExecuteProxyAutoConfigurationScript` or `CFNetworkExecuteProxyAutoConfigurationURL` call that triggered this callback.
- `proxyList`: The list of proxies returned by the autoconfiguration script. This list is in a format suitable for passing to `CFProxyCopyProxiesForURL` (with the added guarantee that no entries will ever be autoconfiguration URL entries). If an error occurs, this value will be `NULL`.

  > **Note**

  >  If you want to keep this list, you must retain it when your callback receives it.
- `error`: An error object that indicates any error that may have occurred. If no error occurred, this value will be NULL.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

# CFProxyAutoConfigurationResultCallback (Objective-C)

**Framework:** CFNetwork  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+

Callback function called when a proxy autoconfiguration computation has completed.

## Declaration

```objectivec
typedef void (*)(void *, const struct __CFArray *, struct __CFError *) CFProxyAutoConfigurationResultCallback;
```

## Parameters

- `client`: The client reference originally passed in the `clientContext` parameter of the `CFNetworkExecuteProxyAutoConfigurationScript` or `CFNetworkExecuteProxyAutoConfigurationURL` call that triggered this callback.
- `proxyList`: The list of proxies returned by the autoconfiguration script. This list is in a format suitable for passing to `CFProxyCopyProxiesForURL` (with the added guarantee that no entries will ever be autoconfiguration URL entries). If an error occurs, this value will be `NULL`.

  > **Note**

  >  If you want to keep this list, you must retain it when your callback receives it.
- `error`: An error object that indicates any error that may have occurred. If no error occurred, this value will be NULL.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).
