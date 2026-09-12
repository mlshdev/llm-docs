> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/proxysettings](https://developer.apple.com/documentation/networkextension/nevpnprotocol/proxysettings)

# proxySettings (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

## Declaration

```swift
@NSCopying var proxySettings: NEProxySettings? { get set }
```

<a id="Discussion"></a>

## Discussion

While operating under an established VPN tunnel, HTTP and HTTPS connections inside the tunnel use the given proxy settings.

## See Also

### Configuring the VPN

- [serverAddress](serveraddress.md): The address of the VPN server.
- [disconnectOnSleep](disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.

# proxySettings (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

## Declaration

```objectivec
@property (copy, nullable) NEProxySettings * proxySettings;
```

<a id="Discussion"></a>

## Discussion

While operating under an established VPN tunnel, HTTP and HTTPS connections inside the tunnel use the given proxy settings.

## See Also

### Configuring the VPN

- [serverAddress](serveraddress.md): The address of the VPN server.
- [disconnectOnSleep](disconnectonsleep.md): A Boolean value that indicates whether the VPN disconnects when the device sleeps.
