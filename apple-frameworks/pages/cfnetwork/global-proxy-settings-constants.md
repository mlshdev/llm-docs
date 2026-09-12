> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/global-proxy-settings-constants](https://developer.apple.com/documentation/cfnetwork/global-proxy-settings-constants)

# Global Proxy Settings Constants (Swift)

**Framework:** CFNetwork  
**Kind:** API Collection

Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md).

## Topics

### Constants

- [kCFNetworkProxiesExceptionsList](kcfnetworkproxiesexceptionslist.md): Value is a `CFArray` of `CFString` objects indicating host name patterns that should bypass the proxy.
- [kCFNetworkProxiesExcludeSimpleHostnames](kcfnetworkproxiesexcludesimplehostnames.md): Value is a `CFNumber` object indicating whether simple host names are excluded. Simple host names are excluded if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPEnable](kcfnetworkproxiesftpenable.md): Value is a `CFNumber` object indicating whether an FTP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPPassive](kcfnetworkproxiesftppassive.md): Value is a `CFNumber` object indicating whether an FTP proxy’s passive mode is enabled. The passive mode is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPPort](kcfnetworkproxiesftpport.md): Value is a `CFNumber` object indicating the port number of an FTP proxy.
- [kCFNetworkProxiesFTPProxy](kcfnetworkproxiesftpproxy.md): Value is a `CFString` object indicating the host name or IP number of an FTP proxy.
- [kCFNetworkProxiesGopherEnable](kcfnetworkproxiesgopherenable.md): Value is a `CFNumber` object indicating whether a gopher proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesGopherPort](kcfnetworkproxiesgopherport.md): Value is a `CFNumber` indicating the port number of a gopher proxy.
- [kCFNetworkProxiesGopherProxy](kcfnetworkproxiesgopherproxy.md): Value is a `CFString` object indicating the host name or IP number of a gopher proxy.
- [kCFNetworkProxiesHTTPEnable](kcfnetworkproxieshttpenable.md): Value is a `CFNumber` object indicating whether an HTTP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesHTTPPort](kcfnetworkproxieshttpport.md): Value is a `CFNumber` object containing the port number associated with the HTTP proxy.
- [kCFNetworkProxiesHTTPProxy](kcfnetworkproxieshttpproxy.md): Value is a `CFString` object containing the HTTP proxy host name or IP number.
- [kCFNetworkProxiesHTTPSEnable](kcfnetworkproxieshttpsenable.md): Value is a `CFNumber` object indicating whether an HTTPS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesHTTPSPort](kcfnetworkproxieshttpsport.md): Value is a `CFNumber` object containing the port number associated with the HTTPS proxy.
- [kCFNetworkProxiesHTTPSProxy](kcfnetworkproxieshttpsproxy.md): Value is a `CFString` object containing the HTTPS proxy host name or IP number.
- [kCFNetworkProxiesRTSPEnable](kcfnetworkproxiesrtspenable.md): Value is a `CFNumber` object indicating whether an RTSP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesRTSPPort](kcfnetworkproxiesrtspport.md): Value is a `CFNumber` object containing the port number associated with the RTSP proxy.
- [kCFNetworkProxiesRTSPProxy](kcfnetworkproxiesrtspproxy.md): Value is a `CFString` object containing the RTSP proxy host name or IP number.
- [kCFNetworkProxiesSOCKSEnable](kcfnetworkproxiessocksenable.md): Value is a `CFNumber` object indicating whether a SOCKS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesSOCKSPort](kcfnetworkproxiessocksport.md): Value is a `CFNumber` object containing the port number associated with the SOCKS proxy.
- [kCFNetworkProxiesSOCKSProxy](kcfnetworkproxiessocksproxy.md): Value is a `CFString` object containing the SOCKS proxy host name or IP number.
- [kCFNetworkProxiesProxyAutoConfigEnable](kcfnetworkproxiesproxyautoconfigenable.md): Value is a `CFNumber` object indicating whether proxy autoconfiguration is enabled. Proxy autoconfiguration is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesProxyAutoConfigJavaScript](kcfnetworkproxiesproxyautoconfigjavascript.md): Value is a `CFString` object that contains the full JavaScript source of the ProxyAutoConfig (PAC) file.
- [kCFNetworkProxiesProxyAutoConfigURLString](kcfnetworkproxiesproxyautoconfigurlstring.md): Value is a `CFString` object that contains the URL of the proxy autoconfiguration (PAC) file.
- [kCFNetworkProxiesProxyAutoDiscoveryEnable](kcfnetworkproxiesproxyautodiscoveryenable.md): Value is a `CFNumber` object indicating whether proxy autodiscovery is enabled. Proxy autodiscovery is enabled if the key is present and the associated value is nonzero.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL(\_:\_:)](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript(\_:\_:\_:)](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL(\_:\_:\_:\_:)](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings()](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty(\_:\_:\_:)](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty(\_:\_:)](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.

# Global Proxy Settings Constants (Objective-C)

**Framework:** CFNetwork  
**Kind:** API Collection

Constants for keys in the global proxy settings dictionary returned by [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md).

## Topics

### Constants

- [kCFNetworkProxiesExceptionsList](kcfnetworkproxiesexceptionslist.md): Value is a `CFArray` of `CFString` objects indicating host name patterns that should bypass the proxy.
- [kCFNetworkProxiesExcludeSimpleHostnames](kcfnetworkproxiesexcludesimplehostnames.md): Value is a `CFNumber` object indicating whether simple host names are excluded. Simple host names are excluded if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPEnable](kcfnetworkproxiesftpenable.md): Value is a `CFNumber` object indicating whether an FTP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPPassive](kcfnetworkproxiesftppassive.md): Value is a `CFNumber` object indicating whether an FTP proxy’s passive mode is enabled. The passive mode is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesFTPPort](kcfnetworkproxiesftpport.md): Value is a `CFNumber` object indicating the port number of an FTP proxy.
- [kCFNetworkProxiesFTPProxy](kcfnetworkproxiesftpproxy.md): Value is a `CFString` object indicating the host name or IP number of an FTP proxy.
- [kCFNetworkProxiesGopherEnable](kcfnetworkproxiesgopherenable.md): Value is a `CFNumber` object indicating whether a gopher proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesGopherPort](kcfnetworkproxiesgopherport.md): Value is a `CFNumber` indicating the port number of a gopher proxy.
- [kCFNetworkProxiesGopherProxy](kcfnetworkproxiesgopherproxy.md): Value is a `CFString` object indicating the host name or IP number of a gopher proxy.
- [kCFNetworkProxiesHTTPEnable](kcfnetworkproxieshttpenable.md): Value is a `CFNumber` object indicating whether an HTTP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesHTTPPort](kcfnetworkproxieshttpport.md): Value is a `CFNumber` object containing the port number associated with the HTTP proxy.
- [kCFNetworkProxiesHTTPProxy](kcfnetworkproxieshttpproxy.md): Value is a `CFString` object containing the HTTP proxy host name or IP number.
- [kCFNetworkProxiesHTTPSEnable](kcfnetworkproxieshttpsenable.md): Value is a `CFNumber` object indicating whether an HTTPS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesHTTPSPort](kcfnetworkproxieshttpsport.md): Value is a `CFNumber` object containing the port number associated with the HTTPS proxy.
- [kCFNetworkProxiesHTTPSProxy](kcfnetworkproxieshttpsproxy.md): Value is a `CFString` object containing the HTTPS proxy host name or IP number.
- [kCFNetworkProxiesRTSPEnable](kcfnetworkproxiesrtspenable.md): Value is a `CFNumber` object indicating whether an RTSP proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesRTSPPort](kcfnetworkproxiesrtspport.md): Value is a `CFNumber` object containing the port number associated with the RTSP proxy.
- [kCFNetworkProxiesRTSPProxy](kcfnetworkproxiesrtspproxy.md): Value is a `CFString` object containing the RTSP proxy host name or IP number.
- [kCFNetworkProxiesSOCKSEnable](kcfnetworkproxiessocksenable.md): Value is a `CFNumber` object indicating whether a SOCKS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesSOCKSPort](kcfnetworkproxiessocksport.md): Value is a `CFNumber` object containing the port number associated with the SOCKS proxy.
- [kCFNetworkProxiesSOCKSProxy](kcfnetworkproxiessocksproxy.md): Value is a `CFString` object containing the SOCKS proxy host name or IP number.
- [kCFNetworkProxiesProxyAutoConfigEnable](kcfnetworkproxiesproxyautoconfigenable.md): Value is a `CFNumber` object indicating whether proxy autoconfiguration is enabled. Proxy autoconfiguration is enabled if the key is present and the associated value is nonzero.
- [kCFNetworkProxiesProxyAutoConfigJavaScript](kcfnetworkproxiesproxyautoconfigjavascript.md): Value is a `CFString` object that contains the full JavaScript source of the ProxyAutoConfig (PAC) file.
- [kCFNetworkProxiesProxyAutoConfigURLString](kcfnetworkproxiesproxyautoconfigurlstring.md): Value is a `CFString` object that contains the URL of the proxy autoconfiguration (PAC) file.
- [kCFNetworkProxiesProxyAutoDiscoveryEnable](kcfnetworkproxiesproxyautodiscoveryenable.md): Value is a `CFNumber` object indicating whether proxy autodiscovery is enabled. Proxy autodiscovery is enabled if the key is present and the associated value is nonzero.

## See Also

### Global Proxy Configuration

- [CFNetworkCopyProxiesForURL](cfnetworkcopyproxiesforurl%28____%29.md): Returns the list of proxies that should be used to download a given URL.
- [CFNetworkCopyProxiesForAutoConfigurationScript](cfnetworkcopyproxiesforautoconfigurationscript%28______%29.md): Executes a proxy autoconfiguration script to determine the best proxy to use to retrieve a specified URL.
- [CFNetworkExecuteProxyAutoConfigurationScript](cfnetworkexecuteproxyautoconfigurationscript%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkExecuteProxyAutoConfigurationURL](cfnetworkexecuteproxyautoconfigurationurl%28________%29.md): Downloads a proxy autoconfiguration script and executes it.
- [CFNetworkCopySystemProxySettings](cfnetworkcopysystemproxysettings%28%29.md): Returns a CFDictionary containing the current systemwide internet proxy settings.
- [CFProxyAutoConfigurationResultCallback](cfproxyautoconfigurationresultcallback.md): Callback function called when a proxy autoconfiguration computation has completed.
- [Property Keys](property-keys.md): Keys for calls to property get/set functions such as [CFReadStreamSetProperty](../corefoundation/cfreadstreamsetproperty%28______%29.md) and [CFReadStreamCopyProperty](../corefoundation/cfreadstreamcopyproperty%28____%29.md).
- [Proxy Types](proxy-types.md): Constants that specify the type of proxy.
