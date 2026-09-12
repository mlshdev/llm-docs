> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/bssid](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/bssid)

# bssid (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The BSSID for the Wi-Fi network.

## Declaration

```swift
var bssid: String { get }
```

## See Also

### Network information

- [ssid](ssid.md): The SSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](issecure.md): Indicates whether the network is secure
- [didAutoJoin](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [didJustJoin](didjustjoin.md): Indicates whether the network was just joined.
- [isChosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

# BSSID (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The BSSID for the Wi-Fi network.

## Declaration

```objectivec
@property (readonly) NSString * BSSID;
```

## See Also

### Network information

- [SSID](ssid.md): The SSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](issecure.md): Indicates whether the network is secure
- [autoJoined](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [justJoined](didjustjoin.md): Indicates whether the network was just joined.
- [chosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.
