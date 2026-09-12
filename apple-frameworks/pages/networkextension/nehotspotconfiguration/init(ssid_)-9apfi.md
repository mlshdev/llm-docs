> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/init(ssid:)-9apfi](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/init(ssid:)-9apfi)

# init(ssid:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.

## Declaration

```swift
init(ssid SSID: String)
```

## Parameters

- `SSID`: The SSID of the open Wi-Fi network. See [ssid](ssid.md).

## See Also

### Initializing a configuration

- [init(ssid:passphrase:isWEP:)](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [init(ssid:eapSettings:)](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(hs20Settings:eapSettings:)](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [init(ssidPrefix:)](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [init(ssidPrefix:passphrase:isWEP:)](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

# initWithSSID: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.

## Declaration

```objectivec
- (instancetype) initWithSSID:(NSString *) SSID;
```

## Parameters

- `SSID`: The SSID of the open Wi-Fi network. See [SSID](ssid.md).

## See Also

### Initializing a configuration

- [initWithSSID:passphrase:isWEP:](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [initWithSSID:eapSettings:](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithHS20Settings:eapSettings:](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [initWithSSIDPrefix:](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [initWithSSIDPrefix:passphrase:isWEP:](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
