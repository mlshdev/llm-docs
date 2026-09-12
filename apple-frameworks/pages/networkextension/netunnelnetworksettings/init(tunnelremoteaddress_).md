> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelnetworksettings/init(tunnelremoteaddress:)](https://developer.apple.com/documentation/networkextension/netunnelnetworksettings/init(tunnelremoteaddress:))

# init(tunnelRemoteAddress:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize a `NETunnelNetworkSettings` object.

## Declaration

```swift
init(tunnelRemoteAddress address: String)
```

## Parameters

- `address`: The IP address of the tunnel server.

# initWithTunnelRemoteAddress: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize a `NETunnelNetworkSettings` object.

## Declaration

```objectivec
- (instancetype) initWithTunnelRemoteAddress:(NSString *) address;
```

## Parameters

- `address`: The IP address of the tunnel server.
