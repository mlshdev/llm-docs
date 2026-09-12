> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/systemconfiguration/proxies-entity-keys](https://developer.apple.com/documentation/systemconfiguration/proxies-entity-keys)

# Proxies Entity Keys

**Interface languages:** Swift, Objective-C

**Framework:** System Configuration  
**Kind:** API Collection

Keys that correspond to values in the `kSCEntNetProxies` dictionary.

## Topics

### Constants

- [kSCPropNetProxiesExceptionsList](kscpropnetproxiesexceptionslist-swift.var.md): The Proxies key `ExceptionsList`, whose value is of type `CFArray`, containing elements of type `CFString`.
- [kSCPropNetProxiesExcludeSimpleHostnames](kscpropnetproxiesexcludesimplehostnames-swift.var.md): The Proxies key `ExcludeSimpleHostnames`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesFTPEnable](kscpropnetproxiesftpenable-swift.var.md): The Proxies key `FTPEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesFTPPassive](kscpropnetproxiesftppassive-swift.var.md): The Proxies key `FTPPassive`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesFTPPort](kscpropnetproxiesftpport-swift.var.md): The Proxies key `FTPPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesFTPProxy](kscpropnetproxiesftpproxy-swift.var.md): The Proxies key `FTPProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesGopherEnable](kscpropnetproxiesgopherenable-swift.var.md): The Proxies key `GopherEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesGopherPort](kscpropnetproxiesgopherport-swift.var.md): The Proxies key `GopherPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesGopherProxy](kscpropnetproxiesgopherproxy-swift.var.md): The Proxies key `GopherProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesHTTPEnable](kscpropnetproxieshttpenable-swift.var.md): The Proxies key `HTTPEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesHTTPPort](kscpropnetproxieshttpport-swift.var.md): The Proxies key `HTTPPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesHTTPProxy](kscpropnetproxieshttpproxy-swift.var.md): The Proxies key `HTTPProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesHTTPSEnable](kscpropnetproxieshttpsenable-swift.var.md): The Proxies key `HTTPSEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesHTTPSPort](kscpropnetproxieshttpsport-swift.var.md): The Proxies key `HTTPSPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesHTTPSProxy](kscpropnetproxieshttpsproxy-swift.var.md): The Proxies key `HTTPSProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesRTSPEnable](kscpropnetproxiesrtspenable-swift.var.md): The Proxies key `RTSPEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesRTSPPort](kscpropnetproxiesrtspport-swift.var.md): The Proxies key `RTSPPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesRTSPProxy](kscpropnetproxiesrtspproxy-swift.var.md): The Proxies key `RTSPProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesSOCKSEnable](kscpropnetproxiessocksenable-swift.var.md): The Proxies key `SOCKSEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesSOCKSPort](kscpropnetproxiessocksport-swift.var.md): The Proxies key `SOCKSPort`, whose value is of type `CFNumber`.
- [kSCPropNetProxiesSOCKSProxy](kscpropnetproxiessocksproxy-swift.var.md): The Proxies key `SOCKSProxy`, whose value is of type `CFString`.
- [kSCPropNetProxiesProxyAutoConfigEnable](kscpropnetproxiesproxyautoconfigenable-swift.var.md): The Proxies key `ProxyAutoConfigEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.
- [kSCPropNetProxiesProxyAutoConfigJavaScript](kscpropnetproxiesproxyautoconfigjavascript-swift.var.md): The Proxies key ProxyAutoConfigJavaScript.
- [kSCPropNetProxiesProxyAutoConfigURLString](kscpropnetproxiesproxyautoconfigurlstring-swift.var.md): The Proxies key `ProxyAutoConfigURLString`, whose value is of type `CFString`.
- [kSCPropNetProxiesProxyAutoDiscoveryEnable](kscpropnetproxiesproxyautodiscoveryenable-swift.var.md): The Proxies key `ProxyAutoDiscoveryEnable`, whose value is of type `CFNumber` and is equal to `0` or `1`.

## See Also

### Constants

- [Generic Keys](generic-keys.md): General-purpose keys that apply to multiple dictionaries in the persistent store.
- [Preference Keys](preference-keys.md): Keys that correspond to preferences in the persistent store.
- [Component Keys](component-keys.md): Keys that correspond to components in the persistent store.
- [Network Dictionary Keys](network-dictionary-keys.md): Keys that correspond to values in the `kSCCompNetwork` dictionary.
- [Interface Dictionary Keys](interface-dictionary-keys.md): Keys that correspond to values in the `kSCCompInterface` dictionary.
- [Hostnames Dictionary Keys](hostnames-dictionary-keys.md): Keys that correspond to values in the `kSCCompHostnames` dictionary.
- [Network Entity Keys](network-entity-keys.md): Keys that correspond to network entity dictionaries in the persistent store.
- [DNS Entity Keys](dns-entity-keys.md): Keys that correspond to values in the `kSCEntNetDNS` dictionary.
- [Ethernet Entity Keys](ethernet-entity-keys.md): Keys that correspond to values in the `kSCEntNetEthernet` dictionary.
- [Interface Entity Keys](interface-entity-keys.md): Keys that correspond to values in the `kSCEntNetInterface` dictionary.
- [IPSec Entity Keys](ipsec-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPSec` dictionary.
- [IPv4 Entity Keys](ipv4-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPv4` dictionary.
- [IPv6 Entity Keys](ipv6-entity-keys.md): Keys that correspond to values in the `kSCEntNetIPv6` dictionary.
- [6to4 Entity Keys](6to4-entity-keys.md): Keys that correspond to values in the `kSCEntNet6to4` dictionary.
- [Link Entity Keys](link-entity-keys.md): Keys that correspond to values in the `kSCEntNetLink` dictionary.
