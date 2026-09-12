> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/cfnetworkcopyproxiesforautoconfigurationscript(_:_:_:)](https://developer.apple.com/documentation/cfnetwork/cfnetworkcopyproxiesforautoconfigurationscript(_:_:_:))

# CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:) (Swift)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.

## Declaration

```swift
func CFNetworkCopyProxiesForAutoConfigurationScript(_ proxyAutoConfigurationScript: CFString, _ targetURL: CFURL, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> Unmanaged<CFArray>?
```

## Parameters

- `proxyAutoConfigurationScript`: A `CFString` containing the code of the autoconfiguration script to execute.
- `targetURL`: The URL your application intends to access.
- `error`: The address of an error object reference that is overwritten on return if an error occurs.

<a id="return-value"></a>

## Return Value

Returns an array of dictionaries. Each dictionary describes a single proxy. The array is ordered optimally for requesting the URL specified.

<a id="Discussion"></a>

## Discussion

In general, you should try to download a URL using the first proxy in the array, try the second proxy if the first one fails, and so on.

Every proxy dictionary has an entry for `kCFProxyTypeKey`.  If the type is anything except `kCFProxyTypeAutoConfigurationURL`, the dictionary also has entries for the proxy’s host and port (under `kCFProxyHostNameKey` and `kCFProxyPortNumberKey` respectively).  If the type is `kCFProxyTypeAutoConfigurationURL`, it has an entry for `kCFProxyAutoConfigurationURLKey`.

The keys for username and password are optional and are present only if the username or password could be extracted from the information passed in (either from the URL itself or from the proxy dictionary supplied).  These APIs do not consult any external credential stores such as the Keychain.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

# CFNetworkCopyProxiesForAutoConfigurationScript (Objective-C)

**Framework:** CFNetwork  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.

## Declaration

```objectivec
extern CFArrayRefCFNetworkCopyProxiesForAutoConfigurationScript(CFStringRef proxyAutoConfigurationScript, CFURLRef targetURL, CFErrorRef*error);
```

## Parameters

- `proxyAutoConfigurationScript`: A `CFString` containing the code of the autoconfiguration script to execute.
- `targetURL`: The URL your application intends to access.
- `error`: The address of an error object reference that is overwritten on return if an error occurs.

<a id="return-value"></a>

## Return Value

Returns an array of dictionaries. Each dictionary describes a single proxy. The array is ordered optimally for requesting the URL specified.

<a id="Discussion"></a>

## Discussion

In general, you should try to download a URL using the first proxy in the array, try the second proxy if the first one fails, and so on.

Every proxy dictionary has an entry for `kCFProxyTypeKey`.  If the type is anything except `kCFProxyTypeAutoConfigurationURL`, the dictionary also has entries for the proxy’s host and port (under `kCFProxyHostNameKey` and `kCFProxyPortNumberKey` respectively).  If the type is `kCFProxyTypeAutoConfigurationURL`, it has an entry for `kCFProxyAutoConfigurationURLKey`.

The keys for username and password are optional and are present only if the username or password could be extracted from the information passed in (either from the URL itself or from the proxy dictionary supplied).  These APIs do not consult any external credential stores such as the Keychain.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).
