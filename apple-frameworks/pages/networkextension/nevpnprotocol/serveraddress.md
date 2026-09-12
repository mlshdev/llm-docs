> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/serveraddress](https://developer.apple.com/documentation/networkextension/nevpnprotocol/serveraddress)

# serverAddress (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The address of the VPN server.

## Declaration

```swift
var serverAddress: String? { get set }
```

<a id="Discussion"></a>

## Discussion

The format of the value of this property depends on the type of VPN protocol in use. For example, for IPSec the value should be a hostname or an IP address. For a custom SSL-VPN protocol the value may be a URL. The only requirement imposed by the Network Extension framework is that this property must have a non-`nil` string value for the protocol configuration to be valid.

## See Also

### Configuring the VPN

- [disconnectOnSleep](disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.
- [proxySettings](proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

# serverAddress (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The address of the VPN server.

## Declaration

```objectivec
@property (copy, nullable) NSString * serverAddress;
```

<a id="Discussion"></a>

## Discussion

The format of the value of this property depends on the type of VPN protocol in use. For example, for IPSec the value should be a hostname or an IP address. For a custom SSL-VPN protocol the value may be a URL. The only requirement imposed by the Network Extension framework is that this property must have a non-`nil` string value for the protocol configuration to be valid.

## See Also

### Configuring the VPN

- [disconnectOnSleep](disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.
- [proxySettings](proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.
