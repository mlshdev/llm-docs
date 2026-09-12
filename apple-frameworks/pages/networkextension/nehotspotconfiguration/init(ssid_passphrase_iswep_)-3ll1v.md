> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/init(ssid:passphrase:iswep:)-3ll1v](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/init(ssid:passphrase:iswep:)-3ll1v)

# init(ssid:passphrase:isWEP:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

## Declaration

```swift
init(ssid SSID: String, passphrase: String, isWEP: Bool)
```

## Parameters

- `SSID`: The SSID of the WEP or WPA/WPA2 personal Wi-Fi Network. See [ssid](ssid.md).
- `passphrase`: The network’s passphrase credential: for WPA or WPA2 personal networks, 8-63 characters; for static 64-bit WEP, 10 hexadecimal digits; for static 128-bit WEP, 26 hexadecimal digits.
- `isWEP`: If `true`, the network is WEP Wi-Fi; otherwise it is a WPA or WPA2 personal Wi-Fi network.

## See Also

### Initializing a configuration

- [init(ssid:)](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [init(ssid:eapSettings:)](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(hs20Settings:eapSettings:)](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [init(ssidPrefix:)](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [init(ssidPrefix:passphrase:isWEP:)](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

# initWithSSID:passphrase:isWEP: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

## Declaration

```objectivec
- (instancetype) initWithSSID:(NSString *) SSID passphrase:(NSString *) passphrase isWEP:(BOOL) isWEP;
```

## Parameters

- `SSID`: The SSID of the WEP or WPA/WPA2 personal Wi-Fi Network. See [SSID](ssid.md).
- `passphrase`: The network’s passphrase credential: for WPA or WPA2 personal networks, 8-63 characters; for static 64-bit WEP, 10 hexadecimal digits; for static 128-bit WEP, 26 hexadecimal digits.
- `isWEP`: If `true`, the network is WEP Wi-Fi; otherwise it is a WPA or WPA2 personal Wi-Fi network.

## See Also

### Initializing a configuration

- [initWithSSID:](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [initWithSSID:eapSettings:](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithHS20Settings:eapSettings:](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [initWithSSIDPrefix:](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
- [initWithSSIDPrefix:passphrase:isWEP:](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
