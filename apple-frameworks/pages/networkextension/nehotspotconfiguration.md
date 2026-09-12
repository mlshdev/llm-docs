> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration)

# NEHotspotConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Configuration settings for a Wi-Fi network.

## Declaration

```swift
class NEHotspotConfiguration
```

<a id="overview"></a>

## Overview

The `NEHotspotConfiguration` class contains configuration properties and credentials required to connect to Wi-Fi networks.

## Topics

### Initializing a configuration

Create new hotspot configurations for open, WEP, WPA/WPA2 personal, WPA/WPA enterprise, and Hotspot 2.0 Wi-Fi networks.

- [init(ssid:)](nehotspotconfiguration/init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [init(ssid:passphrase:isWEP:)](nehotspotconfiguration/init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [init(ssid:eapSettings:)](nehotspotconfiguration/init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(hs20Settings:eapSettings:)](nehotspotconfiguration/init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [init(ssidPrefix:)](nehotspotconfiguration/init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [init(ssidPrefix:passphrase:isWEP:)](nehotspotconfiguration/init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

### Accessing configuration properties

- [ssid](nehotspotconfiguration/ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [ssidPrefix](nehotspotconfiguration/ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](nehotspotconfiguration/lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](nehotspotconfiguration/joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](nehotspotconfiguration/hidden.md): A Boolean value that indicates the visibility of the SSID.

### Initializers

- [init(HS20Settings:eapSettings:)](nehotspotconfiguration/init%28hs20settings_eapsettings_%29-6tb5g.md)
- [init(SSID:)](nehotspotconfiguration/init%28ssid_%29-2n6vw.md)
- [init(SSID:eapSettings:)](nehotspotconfiguration/init%28ssid_eapsettings_%29-55nae.md)
- [init(SSID:passphrase:isWEP:)](nehotspotconfiguration/init%28ssid_passphrase_iswep_%29-35lmk.md)
- [init(SSIDPrefix:)](nehotspotconfiguration/init%28ssidprefix_%29-xdns.md)
- [init(SSIDPrefix:passphrase:isWEP:)](nehotspotconfiguration/init%28ssidprefix_passphrase_iswep_%29-93vo6.md)

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
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.

# NEHotspotConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Configuration settings for a Wi-Fi network.

## Declaration

```objectivec
@interface NEHotspotConfiguration : NSObject
```

<a id="overview"></a>

## Overview

The `NEHotspotConfiguration` class contains configuration properties and credentials required to connect to Wi-Fi networks.

## Topics

### Initializing a configuration

Create new hotspot configurations for open, WEP, WPA/WPA2 personal, WPA/WPA enterprise, and Hotspot 2.0 Wi-Fi networks.

- [initWithSSID:](nehotspotconfiguration/init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [initWithSSID:passphrase:isWEP:](nehotspotconfiguration/init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [initWithSSID:eapSettings:](nehotspotconfiguration/init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithHS20Settings:eapSettings:](nehotspotconfiguration/init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [initWithSSIDPrefix:](nehotspotconfiguration/init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [initWithSSIDPrefix:passphrase:isWEP:](nehotspotconfiguration/init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

### Accessing configuration properties

- [SSID](nehotspotconfiguration/ssid.md): The SSID of an open, WEP, WPA/WPA2 personal, or WPA/WPA2 enterprise Wi-Fi network.
- [SSIDPrefix](nehotspotconfiguration/ssidprefix.md): The string used to match networks against a known SSID prefix.
- [lifeTimeInDays](nehotspotconfiguration/lifetimeindays.md): The number of days the network retains the associated configuration.
- [joinOnce](nehotspotconfiguration/joinonce.md): Restricts the lifetime of a configuration to the operating status of the app that created it.
- [hidden](nehotspotconfiguration/hidden.md): A Boolean value that indicates the visibility of the SSID.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Wi-Fi network configuration

- [NEHotspotConfigurationManager](nehotspotconfigurationmanager.md): A manager that applies and removes hotspot configurations of Wi-Fi networks.
- [NEHotspotEAPSettings](nehotspoteapsettings.md): Extensible Authentication Protocol settings for configuring WPA and WPA2 enterprise Wi-Fi networks.
- [NEHotspotHS20Settings](nehotspoths20settings.md): Settings for configuring Hotspot 2.0 Wi-Fi networks.
