> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nepackettunnelnetworksettings/excludecellularservices](https://developer.apple.com/documentation/networkextension/nepackettunnelnetworksettings/excludecellularservices)

# excludeCellularServices

**Interface language:** Objective-C

**Framework:** Network Extension  
**Kind:** Instance Property

## Declaration

```objectivec
@property BOOL excludeCellularServices;
```

<a id="discussion"></a>

## Discussion

If includeAllNetworks is set to YES and this property is set to YES, then internet-routable network traffic for cellular services (VoLTE, Wi-Fi Calling, IMS, MMS, Visual Voicemail, etc.) is excluded from the tunnel. Note that some cellular carriers route cellular services traffic directly to the carrier network, bypassing the internet. Such cellular services traffic is always excluded from the tunnel. The default value of this property is YES. If either the includeAllNetworks property in NEVPNProtocol class is set, then the excludeCellularServices property in NEVPNProtocol class takes precedence.
