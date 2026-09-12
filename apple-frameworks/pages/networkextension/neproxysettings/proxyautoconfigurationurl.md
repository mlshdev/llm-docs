> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/proxyautoconfigurationurl](https://developer.apple.com/documentation/networkextension/neproxysettings/proxyautoconfigurationurl)

# proxyAutoConfigurationURL (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.

## Declaration

```swift
var proxyAutoConfigurationURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is set to [true](https://developer.apple.com/documentation/swift/true) and [proxyAutoConfigurationJavaScript](proxyautoconfigurationjavascript.md) is set to nil then the system will download the PAC script from this location and execute the script to determine what proxies to use (if any) for HTTP and HTTPS connections.

## See Also

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationJavaScript](proxyautoconfigurationjavascript.md): A string containing the Proxy Auto Configuration (PAC) JavaScript source code.

# proxyAutoConfigurationURL (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.

## Declaration

```objectivec
@property (copy, nullable) NSURL * proxyAutoConfigurationURL;
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is set to [true](https://developer.apple.com/documentation/swift/true) and [proxyAutoConfigurationJavaScript](proxyautoconfigurationjavascript.md) is set to nil then the system will download the PAC script from this location and execute the script to determine what proxies to use (if any) for HTTP and HTTPS connections.

## See Also

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationJavaScript](proxyautoconfigurationjavascript.md): A string containing the Proxy Auto Configuration (PAC) JavaScript source code.
