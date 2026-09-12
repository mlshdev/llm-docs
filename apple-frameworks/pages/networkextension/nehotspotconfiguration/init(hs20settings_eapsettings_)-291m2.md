> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/init(hs20settings:eapsettings:)-291m2](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/init(hs20settings:eapsettings:)-291m2)

# init(hs20Settings:eapSettings:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.

## Declaration

```swift
init(hs20Settings: NEHotspotHS20Settings, eapSettings: NEHotspotEAPSettings)
```

## Parameters

- `hs20Settings`: Hotspot 2.0 settings. For possible values, see [NEHotspotHS20Settings](../nehotspoths20settings.md).
- `eapSettings`: EAP settings. For possible values, see [NEHotspotEAPSettings](../nehotspoteapsettings.md)

## See Also

### Initializing a configuration

- [init(ssid:)](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [init(ssid:passphrase:isWEP:)](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [init(ssid:eapSettings:)](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(ssidPrefix:)](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [init(ssidPrefix:passphrase:isWEP:)](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

# initWithHS20Settings:eapSettings: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.

## Declaration

```objectivec
- (instancetype) initWithHS20Settings:(NEHotspotHS20Settings *) hs20Settings eapSettings:(NEHotspotEAPSettings *) eapSettings;
```

## Parameters

- `hs20Settings`: Hotspot 2.0 settings. For possible values, see [NEHotspotHS20Settings](../nehotspoths20settings.md).
- `eapSettings`: EAP settings. For possible values, see [NEHotspotEAPSettings](../nehotspoteapsettings.md)

## See Also

### Initializing a configuration

- [initWithSSID:](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [initWithSSID:passphrase:isWEP:](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [initWithSSID:eapSettings:](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithSSIDPrefix:](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [initWithSSIDPrefix:passphrase:isWEP:](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
