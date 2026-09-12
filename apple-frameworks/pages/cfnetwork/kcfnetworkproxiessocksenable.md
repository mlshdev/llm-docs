> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cfnetwork/kcfnetworkproxiessocksenable](https://developer.apple.com/documentation/cfnetwork/kcfnetworkproxiessocksenable)

# kCFNetworkProxiesSOCKSEnable (Swift)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Value is a `CFNumber` object indicating whether a SOCKS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.

## Declaration

```swift
let kCFNetworkProxiesSOCKSEnable: CFString
```

## See Also

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

# kCFNetworkProxiesSOCKSEnable (Objective-C)

**Framework:** CFNetwork  
**Kind:** Global Variable  
**Availability:** macOS 10.6+

Value is a `CFNumber` object indicating whether a SOCKS proxy is enabled. The proxy is enabled if the key is present and the associated value is nonzero.

## Declaration

```objectivec
extern CFStringRef const kCFNetworkProxiesSOCKSEnable;
```

## See Also

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
