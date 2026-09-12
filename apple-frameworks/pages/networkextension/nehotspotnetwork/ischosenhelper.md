> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork/ischosenhelper](https://developer.apple.com/documentation/networkextension/nehotspotnetwork/ischosenhelper)

# isChosenHelper (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether the calling Hotspot Helper is the chosen helper for this network.

## Declaration

```swift
var isChosenHelper: Bool { get }
```

<a id="Discussion"></a>

## Discussion

The `NEHotspotNetwork` class must have been instantiated via a call to the `supportedNetworkInterfaces` method in the [NEHotspotHelper](../nehotspothelper.md) object. This property is useful for restoring state after the Hotspot Helper application has quit and restarted.

## See Also

### Network information

- [ssid](ssid.md): The SSID for the Wi-Fi network.
- [bssid](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](issecure.md): Indicates whether the network is secure
- [didAutoJoin](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [didJustJoin](didjustjoin.md): Indicates whether the network was just joined.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

# chosenHelper (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Indicates whether the calling Hotspot Helper is the chosen helper for this network.

## Declaration

```objectivec
@property (readonly, getter=isChosenHelper) BOOL chosenHelper;
```

<a id="Discussion"></a>

## Discussion

The `NEHotspotNetwork` class must have been instantiated via a call to the `supportedNetworkInterfaces` method in the [NEHotspotHelper](../nehotspothelper.md) object. This property is useful for restoring state after the Hotspot Helper application has quit and restarted.

## See Also

### Network information

- [SSID](ssid.md): The SSID for the Wi-Fi network.
- [BSSID](bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](issecure.md): Indicates whether the network is secure
- [autoJoined](didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [justJoined](didjustjoin.md): Indicates whether the network was just joined.
- [securityType](securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](../nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.
