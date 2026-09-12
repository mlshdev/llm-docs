> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neproxysettings/proxyautoconfigurationjavascript](https://developer.apple.com/documentation/networkextension/neproxysettings/proxyautoconfigurationjavascript)

# proxyAutoConfigurationJavaScript (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the Proxy Auto Configuration (PAC) JavaScript source code.

## Declaration

```swift
var proxyAutoConfigurationJavaScript: String? { get set }
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is set to [true](https://developer.apple.com/documentation/swift/true) then the system will execute the PAC script to determine what proxies to use (if any) for HTTP and HTTPS connections.

## See Also

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationURL](proxyautoconfigurationurl.md): A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.

# proxyAutoConfigurationJavaScript (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string containing the Proxy Auto Configuration (PAC) JavaScript source code.

## Declaration

```objectivec
@property (copy, nullable) NSString * proxyAutoConfigurationJavaScript;
```

<a id="Discussion"></a>

## Discussion

If [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md) is set to [true](https://developer.apple.com/documentation/swift/true) then the system will execute the PAC script to determine what proxies to use (if any) for HTTP and HTTPS connections.

## See Also

### Accessing Automatic Proxy Properties

- [autoProxyConfigurationEnabled](autoproxyconfigurationenabled.md): A Boolean indicating if proxy auto-configuration is enabled.
- [proxyAutoConfigurationURL](proxyautoconfigurationurl.md): A URL specifying the location from where the Proxy Auto Configuration (PAC) script should be downloaded.
