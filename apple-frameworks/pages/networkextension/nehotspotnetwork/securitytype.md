> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/securitytype](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/securitytype)

# securityType (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type of security used by the Wi-Fi network.

## Declaration

```swift
var securityType: NEHotspotNetworkSecurityType { get }
```

## See Also

### Network information

- [ssid](ssid.md): The SSID for the Wi-Fi network.
- [bssid](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](issecure.md): Indicates whether the network is secure
- [didAutoJoin](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [didJustJoin](didjustjoin.md): Indicates whether the network was just joined.
- [isChosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

# securityType (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

The type of security used by the Wi-Fi network.

## Declaration

```objectivec
@property (readonly) NEHotspotNetworkSecurityType securityType;
```

## See Also

### Network information

- [SSID](ssid.md): The SSID for the Wi-Fi network.
- [BSSID](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](issecure.md): Indicates whether the network is secure
- [autoJoined](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [justJoined](didjustjoin.md): Indicates whether the network was just joined.
- [chosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.
