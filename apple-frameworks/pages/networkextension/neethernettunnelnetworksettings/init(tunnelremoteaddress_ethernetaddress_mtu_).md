> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neethernettunnelnetworksettings/init(tunnelremoteaddress:ethernetaddress:mtu:)](https://developer.apple.com/documentation/networkextension/neethernettunnelnetworksettings/init(tunnelremoteaddress:ethernetaddress:mtu:))

# init(tunnelRemoteAddress:ethernetAddress:mtu:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** macOS 13.0+

Creates a settings object with a given tunnel remote address and MAC address.

## Declaration

```swift
init(tunnelRemoteAddress address: String, ethernetAddress: String, mtu: Int)
```

# initWithTunnelRemoteAddress:ethernetAddress:mtu: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Creates a settings object with a given tunnel remote address and MAC address.

## Declaration

```objectivec
- (instancetype) initWithTunnelRemoteAddress:(NSString *) address ethernetAddress:(NSString *) ethernetAddress mtu:(NSInteger) mtu;
```
