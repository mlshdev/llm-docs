> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/proxy-types](https://developer.apple.com/documentation/cfnetwork/proxy-types)

# Proxy Types (Swift)

**Framework:** CFNetwork  
**Kind:** API Collection

Constants that specify the type of proxy.

## Topics

### Constants

- [kCFProxyTypeNone](kcfproxytypenone.md): Specifies that no proxy should be used.
- [kCFProxyTypeAutoConfigurationURL](kcfproxytypeautoconfigurationurl.md): Specifies that the proxy is determined by an autoconfiguration file at a given URL.
- [kCFProxyTypeAutoConfigurationJavaScript](kcfproxytypeautoconfigurationjavascript.md): Specifies that the proxy is determined by a provided autoconfiguration script.
- [kCFProxyTypeFTP](kcfproxytypeftp.md): Specifies an FTP proxy.
- [kCFProxyTypeHTTP](kcfproxytypehttp.md): Specifies an HTTP proxy.
- [kCFProxyTypeHTTPS](kcfproxytypehttps.md): Specifies an HTTPS proxy.
- [kCFProxyTypeSOCKS](kcfproxytypesocks.md): Specifies a SOCKS proxy.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

# Proxy Types (Objective-C)

**Framework:** CFNetwork  
**Kind:** API Collection

Constants that specify the type of proxy.

## Topics

### Constants

- [kCFProxyTypeNone](kcfproxytypenone.md): Specifies that no proxy should be used.
- [kCFProxyTypeAutoConfigurationURL](kcfproxytypeautoconfigurationurl.md): Specifies that the proxy is determined by an autoconfiguration file at a given URL.
- [kCFProxyTypeAutoConfigurationJavaScript](kcfproxytypeautoconfigurationjavascript.md): Specifies that the proxy is determined by a provided autoconfiguration script.
- [kCFProxyTypeFTP](kcfproxytypeftp.md): Specifies an FTP proxy.
- [kCFProxyTypeHTTP](kcfproxytypehttp.md): Specifies an HTTP proxy.
- [kCFProxyTypeHTTPS](kcfproxytypehttps.md): Specifies an HTTPS proxy.
- [kCFProxyTypeSOCKS](kcfproxytypesocks.md): Specifies a SOCKS proxy.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Global Proxy Settings Constants](global-proxy-settings-constants.md): Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).
