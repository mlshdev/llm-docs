> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/excludelocalnetworks](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/excludelocalnetworks)

# excludeLocalNetworks

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Property

## Declaration

```objectivec
@property NEPacketTunnelNetworkSettingsIPFamily excludeLocalNetworks;
```

<a id="discussion"></a>

## Discussion

If this property is set, traffic destined for local networks will be excluded from the tunnel. The set value of NEPacketTunnelNetworkSettingsIPFamily type indicates if excludeLocalNetworks should be applied to all traffic, IPv4 only or IPv6 only. The default is NEPacketTunnelNetworkSettingsIPFamilyNone on macOS and NEPacketTunnelNetworkSettingsIPFamilyAny on iOS. If either the includeAllNetworks or the enforceRoutes property in NEVPNProtocol class is set, then the excludeLocalNetworks property in NEVPNProtocol class takes precedence.
