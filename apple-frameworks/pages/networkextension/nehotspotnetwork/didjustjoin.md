> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/didjustjoin](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/didjustjoin)

# didJustJoin (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether the network was just joined.

## Declaration

```swift
var didJustJoin: Bool { get }
```

<a id="Discussion"></a>

## Discussion

This property is useful in the Maintaining state to differentiate whether the Maintain command is for the initial join, or the subsequent periodic callback.

## See Also

### Network information

- [ssid](ssid.md): The SSID for the Wi-Fi network.
- [bssid](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](issecure.md): Indicates whether the network is secure
- [didAutoJoin](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [isChosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

# justJoined (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether the network was just joined.

## Declaration

```objectivec
@property (readonly, getter=didJustJoin) BOOL justJoined;
```

<a id="Discussion"></a>

## Discussion

This property is useful in the Maintaining state to differentiate whether the Maintain command is for the initial join, or the subsequent periodic callback.

## See Also

### Network information

- [SSID](ssid.md): The SSID for the Wi-Fi network.
- [BSSID](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](issecure.md): Indicates whether the network is secure
- [autoJoined](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [chosenHelper](ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.
