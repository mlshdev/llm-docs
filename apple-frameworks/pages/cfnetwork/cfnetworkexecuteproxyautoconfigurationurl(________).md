> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetworkexecuteproxyautoconfigurationurl(_:_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetworkexecuteproxyautoconfigurationurl(_:_:_:_:))

# CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Downloads a proxy autoconfiguration script and executes it.

## Declaration

```swift
func CFNetworkExecuteProxyAutoConfigurationURL(_ proxyAutoConfigURL: CFURL, _ targetURL: CFURL, _ cb: CFProxyAutoConfigurationResultCallback, _ clientContext: UnsafeMutablePointer<CFStreamClientContext>) -> CFRunLoopSource
```

## Parameters

- `proxyAutoConfigURL`: The URL of the autoconfiguration script.
- `targetURL`: The URL that your application intends to eventually download using the proxies.
- `cb`: A callback to be called when execution of the script is finished.
- `clientContext`: A stream context containing a client info object and optionally retain and release callbacks for that object.

<a id="Discussion"></a>

## Discussion

This function returns a run loop source that the caller should schedule. Once downloading and execution of the script has completed, the specified callback function is called.

> **Note**

>  If you want to terminate the request before completion, you should invalidate the run loop source.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

# CFNetworkExecuteProxyAutoConfigurationURL (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Downloads a proxy autoconfiguration script and executes it.

## Declaration

```objectivec
extern CFRunLoopSourceRefCFNetworkExecuteProxyAutoConfigurationURL(CFURLRef proxyAutoConfigURL, CFURLRef targetURL, CFProxyAutoConfigurationResultCallback cb, CFStreamClientContext *clientContext);
```

## Parameters

- `proxyAutoConfigURL`: The URL of the autoconfiguration script.
- `targetURL`: The URL that your application intends to eventually download using the proxies.
- `cb`: A callback to be called when execution of the script is finished.
- `clientContext`: A stream context containing a client info object and optionally retain and release callbacks for that object.

<a id="Discussion"></a>

## Discussion

This function returns a run loop source that the caller should schedule. Once downloading and execution of the script has completed, the specified callback function is called.

> **Note**

>  If you want to terminate the request before completion, you should invalidate the run loop source.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).
