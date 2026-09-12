> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nevpnprotocol/disconnectonsleep](https://developer.apple.com/documentation/networkextension/nevpnprotocol/disconnectonsleep)

# disconnectOnSleep (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the VPN disconnects when the device sleeps.

## Declaration

```swift
var disconnectOnSleep: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the VPN

- [serverAddress](serveraddress.md): The address of the VPN server.
- [proxySettings](proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.

# disconnectOnSleep (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A Boolean value that indicates whether the VPN disconnects when the device sleeps.

## Declaration

```objectivec
@property BOOL disconnectOnSleep;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the VPN

- [serverAddress](serveraddress.md): The address of the VPN server.
- [proxySettings](proxysettings.md): The proxy settings to use for HTTP and HTTPS connections that route through the VPN.
