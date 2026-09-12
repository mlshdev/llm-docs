> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspoths20settings](https://developer.apple.com/documentation/networkextension/nehotspoths20settings)

# NEHotspotHS20Settings (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Settings for configuring Hotspot 2.0 Wi-Fi networks.

## Declaration

```swift
class NEHotspotHS20Settings
```

## Topics

### Initializing Hotspot 2.0 settings

- [init(domainName:roamingEnabled:)](nehotspoths20settings/init%28domainname_roamingenabled_%29.md): Creates a new hotspot configuration of a legacy Hotspot or HS 2.0 Wi-Fi network. with optional roaming enabled.

### Accessing Hotspot 2.0 properties

- [domainName](nehotspoths20settings/domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [isRoamingEnabled](nehotspoths20settings/isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [mccAndMNCs](nehotspoths20settings/mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nehotspoths20settings/nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](nehotspoths20settings/roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Wi-Fi network configuration

- [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md): A manager that applies and removes hotspot configurations of Wi-Fi networks.
- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.

# NEHotspotHS20Settings (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Settings for configuring Hotspot 2.0 Wi-Fi networks.

## Declaration

```objectivec
@interface NEHotspotHS20Settings : NSObject
```

## Topics

### Initializing Hotspot 2.0 settings

- [initWithDomainName:roamingEnabled:](nehotspoths20settings/init%28domainname_roamingenabled_%29.md): Creates a new hotspot configuration of a legacy Hotspot or HS 2.0 Wi-Fi network. with optional roaming enabled.

### Accessing Hotspot 2.0 properties

- [domainName](nehotspoths20settings/domainname.md): The domain name of a Hotspot 2.0 Wi-Fi Network.
- [roamingEnabled](nehotspoths20settings/isroamingenabled.md): A Boolean value indicating whether or not roaming is enabled on a Hotspot 2.0 Wi-Fi network.
- [MCCAndMNCs](nehotspoths20settings/mccandmncs.md): An array of Mobile Country Code (MCC) and Mobile Network Code (MNC) pairs used for Wi-Fi Hotspot 2.0 negotiation.
- [naiRealmNames](nehotspoths20settings/nairealmnames.md): An array of Network Access Identifier (NAI) realm name strings used for Wi-Fi Hotspot 2.0 negotiation.
- [roamingConsortiumOIs](nehotspoths20settings/roamingconsortiumois.md): An array of Roaming Consortium Organization (RCO) identifiers used for Wi-Fi Hotspot 2.0 negotiation.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Wi-Fi network configuration

- [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md): A manager that applies and removes hotspot configurations of Wi-Fi networks.
- [NEHotspotConfiguration](nehotspotconfiguration.md): Configuration settings for a Wi-Fi network.
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.
