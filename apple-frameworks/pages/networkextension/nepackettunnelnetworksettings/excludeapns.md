> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/excludeapns](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/excludeapns)

# excludeAPNs

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Property

## Declaration

```objectivec
@property BOOL excludeAPNs;
```

<a id="discussion"></a>

## Discussion

If includeAllNetworks is set to YES and this property is set to YES, then network traffic for the Apple Push Notification service (APNs) is excluded from the tunnel. The default value of this property is YES. If either the includeAllNetworks property in NEVPNProtocol class is set, then the excludeAPNs property in NEVPNProtocol class takes precedence.
