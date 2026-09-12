> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetworksecuritytype](https://developer.apple.com/documentation/networkextension/nehotspotnetworksecuritytype)

# NEHotspotNetworkSecurityType (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

An enumeration of constants that define Wi-Fi hotspot network security types.

## Declaration

```swift
enum NEHotspotNetworkSecurityType
```

## Topics

### Security types

- [NEHotspotNetworkSecurityType.open](nehotspotnetworksecuritytype/open.md): A security type to represent an open network with no security protocol.
- [NEHotspotNetworkSecurityType.WEP](nehotspotnetworksecuritytype/wep.md): A security type to represent use of Wired Equivalent Privacy (WEP).
- [NEHotspotNetworkSecurityType.personal](nehotspotnetworksecuritytype/personal.md): A security type to represent use of Wi-Fi protected access (WPA), WPA2, and WPA3 standards using a pre-shared secret.
- [NEHotspotNetworkSecurityType.enterprise](nehotspotnetworksecuritytype/enterprise.md): A security type to represent use of Wi-Fi protected access (WPA), WPA2, and WPA3 standards using enterprise-level seciurity.
- [NEHotspotNetworkSecurityType.unknown](nehotspotnetworksecuritytype/unknown.md): A value that represents an unknown security type.

### Initializers

- [init(rawValue:)](nehotspotnetworksecuritytype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Network information

- [ssid](nehotspotnetwork/ssid.md): The SSID for the Wi-Fi network.
- [bssid](nehotspotnetwork/bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](nehotspotnetwork/signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](nehotspotnetwork/issecure.md): Indicates whether the network is secure
- [didAutoJoin](nehotspotnetwork/didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [didJustJoin](nehotspotnetwork/didjustjoin.md): Indicates whether the network was just joined.
- [isChosenHelper](nehotspotnetwork/ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](nehotspotnetwork/securitytype.md): The type of security used by the Wi-Fi network.

# NEHotspotNetworkSecurityType (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · visionOS 1.0+ · watchOS 8.0+

An enumeration of constants that define Wi-Fi hotspot network security types.

## Declaration

```objectivec
enum NEHotspotNetworkSecurityType : NSInteger;
```

## Topics

### Security types

- [NEHotspotNetworkSecurityTypeOpen](nehotspotnetworksecuritytype/open.md): A security type to represent an open network with no security protocol.
- [NEHotspotNetworkSecurityTypeWEP](nehotspotnetworksecuritytype/wep.md): A security type to represent use of Wired Equivalent Privacy (WEP).
- [NEHotspotNetworkSecurityTypePersonal](nehotspotnetworksecuritytype/personal.md): A security type to represent use of Wi-Fi protected access (WPA), WPA2, and WPA3 standards using a pre-shared secret.
- [NEHotspotNetworkSecurityTypeEnterprise](nehotspotnetworksecuritytype/enterprise.md): A security type to represent use of Wi-Fi protected access (WPA), WPA2, and WPA3 standards using enterprise-level seciurity.
- [NEHotspotNetworkSecurityTypeUnknown](nehotspotnetworksecuritytype/unknown.md): A value that represents an unknown security type.

## See Also

### Network information

- [SSID](nehotspotnetwork/ssid.md): The SSID for the Wi-Fi network.
- [BSSID](nehotspotnetwork/bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](nehotspotnetwork/signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](nehotspotnetwork/issecure.md): Indicates whether the network is secure
- [autoJoined](nehotspotnetwork/didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [justJoined](nehotspotnetwork/didjustjoin.md): Indicates whether the network was just joined.
- [chosenHelper](nehotspotnetwork/ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](nehotspotnetwork/securitytype.md): The type of security used by the Wi-Fi network.
