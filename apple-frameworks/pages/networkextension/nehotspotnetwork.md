> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotnetwork](https://developer.apple.com/documentation/networkextension/nehotspotnetwork)

# NEHotspotNetwork (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a Wi-Fi network associated with a command or a response.

## Declaration

```swift
class NEHotspotNetwork
```

<a id="overview"></a>

## Overview

When the Hotspot Helper app is asked to evaluate the a network or filter the Wi-Fi scan list, it annotates the  `NEHotspotNetwork` object via the `setConfidence:` method.

## Topics

### Network information

- [ssid](nehotspotnetwork/ssid.md): The SSID for the Wi-Fi network.
- [bssid](nehotspotnetwork/bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](nehotspotnetwork/signalstrength.md): The recent signal strength for the Wi-Fi network.
- [isSecure](nehotspotnetwork/issecure.md): Indicates whether the network is secure
- [didAutoJoin](nehotspotnetwork/didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [didJustJoin](nehotspotnetwork/didjustjoin.md): Indicates whether the network was just joined.
- [isChosenHelper](nehotspotnetwork/ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](nehotspotnetwork/securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

### Network annotation

- [setConfidence(\_:)](nehotspotnetwork/setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [NEHotspotHelperConfidence](nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.
- [setPassword(\_:)](nehotspotnetwork/setpassword%28__%29.md): Provide the password for a protected network.

### Fetching VPN network information

- [fetchCurrent(completionHandler:)](nehotspotnetwork/fetchcurrent%28completionhandler_%29.md): Fetches information about the current Wi-Fi network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.

# NEHotspotNetwork (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

Information about a Wi-Fi network associated with a command or a response.

## Declaration

```objectivec
@interface NEHotspotNetwork : NSObject
```

<a id="overview"></a>

## Overview

When the Hotspot Helper app is asked to evaluate the a network or filter the Wi-Fi scan list, it annotates the  `NEHotspotNetwork` object via the `setConfidence:` method.

## Topics

### Network information

- [SSID](nehotspotnetwork/ssid.md): The SSID for the Wi-Fi network.
- [BSSID](nehotspotnetwork/bssid.md): The BSSID for the Wi-Fi network.
- [signalStrength](nehotspotnetwork/signalstrength.md): The recent signal strength for the Wi-Fi network.
- [secure](nehotspotnetwork/issecure.md): Indicates whether the network is secure
- [autoJoined](nehotspotnetwork/didautojoin.md): Indicates whether the network was joined automatically or was joined explicitly by the user.
- [justJoined](nehotspotnetwork/didjustjoin.md): Indicates whether the network was just joined.
- [chosenHelper](nehotspotnetwork/ischosenhelper.md): Indicates whether the calling Hotspot Helper is the chosen helper for this network.
- [securityType](nehotspotnetwork/securitytype.md): The type of security used by the Wi-Fi network.
- [NEHotspotNetworkSecurityType](nehotspotnetworksecuritytype.md): An enumeration of constants that define Wi-Fi hotspot network security types.

### Network annotation

- [setConfidence:](nehotspotnetwork/setconfidence%28__%29.md): Indicate the level of confidence in being able to handle the network.
- [NEHotspotHelperConfidence](nehotspothelperconfidence.md): A type that indicates the hotspot helper’s confidence in its ability to handle the network.
- [setPassword:](nehotspotnetwork/setpassword%28__%29.md): Provide the password for a protected network.

### Fetching VPN network information

- [fetchCurrentWithCompletionHandler:](nehotspotnetwork/fetchcurrent%28completionhandler_%29.md): Fetches information about the current Wi-Fi network.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Commands

- [NEHotspotHelperCommand](nehotspothelpercommand.md): A command for the hotspot helper to handle.
- [NEHotspotHelperResponse](nehotspothelperresponse.md): The hotspot helper’s response to a command.
