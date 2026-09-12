> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/init(ssidprefix:passphrase:iswep:)-7ttmu](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/init(ssidprefix:passphrase:iswep:)-7ttmu)

# init(ssidPrefix:passphrase:isWEP:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

## Declaration

```swift
init(ssidPrefix SSIDPrefix: String, passphrase: String, isWEP: Bool)
```

## Parameters

- `SSIDPrefix`: A prefix string to match the SSID of a WPA/WPA2 enterprise Wi-Fi network. This value must be between 3 and 32 characters.
- `passphrase`: The network’s passphrase credential: for WPA or WPA2 personal networks, 8-63 characters; for static 64-bit WEP, 10 hexadecimal digits; for static 128-bit WEP, 26 hexadecimal digits.
- `isWEP`: If [true](https://developer.apple.com/documentation/swift/true), the network is WEP Wi-Fi; otherwise it is a WPA or WPA2 personal Wi-Fi network.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to match a known SSID prefix, but don’t have a full SSID. If the system finds multiple Wi-Fi networks whose SSID string matches the given prefix, it selects the network with the greatest signal strength.

## See Also

### Initializing a configuration

- [init(ssid:)](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [init(ssid:passphrase:isWEP:)](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [init(ssid:eapSettings:)](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(hs20Settings:eapSettings:)](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [init(ssidPrefix:)](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.

# initWithSSIDPrefix:passphrase:isWEP: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

## Declaration

```objectivec
- (instancetype) initWithSSIDPrefix:(NSString *) SSIDPrefix passphrase:(NSString *) passphrase isWEP:(BOOL) isWEP;
```

## Parameters

- `SSIDPrefix`: A prefix string to match the SSID of a WPA/WPA2 enterprise Wi-Fi network. This value must be between 3 and 32 characters.
- `passphrase`: The network’s passphrase credential: for WPA or WPA2 personal networks, 8-63 characters; for static 64-bit WEP, 10 hexadecimal digits; for static 128-bit WEP, 26 hexadecimal digits.
- `isWEP`: If [true](https://developer.apple.com/documentation/swift/true), the network is WEP Wi-Fi; otherwise it is a WPA or WPA2 personal Wi-Fi network.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to match a known SSID prefix, but don’t have a full SSID. If the system finds multiple Wi-Fi networks whose SSID string matches the given prefix, it selects the network with the greatest signal strength.

## See Also

### Initializing a configuration

- [initWithSSID:](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [initWithSSID:passphrase:isWEP:](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [initWithSSID:eapSettings:](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithHS20Settings:eapSettings:](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [initWithSSIDPrefix:](init%28ssidprefix_%29-1v8bx.md): Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.
