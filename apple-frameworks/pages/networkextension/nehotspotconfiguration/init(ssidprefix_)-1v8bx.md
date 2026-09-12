> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspotconfiguration/init(ssidprefix:)-1v8bx](https://developer.apple.com/documentation/networkextension/nehotspotconfiguration/init(ssidprefix:)-1v8bx)

# init(ssidPrefix:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.

## Declaration

```swift
init(ssidPrefix SSIDPrefix: String)
```

## Parameters

- `SSIDPrefix`: A prefix string to match the SSID of an open Wi-Fi Network. This value must be between 3 and 32 characters.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to match a known SSID prefix, but don’t have a full SSID. If the system finds multiple Wi-Fi networks whose SSID string matches the given prefix, it selects the network with the greatest signal strength.

## See Also

### Initializing a configuration

- [init(ssid:)](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [init(ssid:passphrase:isWEP:)](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [init(ssid:eapSettings:)](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [init(hs20Settings:eapSettings:)](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [init(ssidPrefix:passphrase:isWEP:)](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.

# initWithSSIDPrefix: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 7.0+

Creates a new hotspot configuration, identified by an SSID prefix string, for an open Wi-Fi network.

## Declaration

```objectivec
- (instancetype) initWithSSIDPrefix:(NSString *) SSIDPrefix;
```

## Parameters

- `SSIDPrefix`: A prefix string to match the SSID of an open Wi-Fi Network. This value must be between 3 and 32 characters.

<a id="Discussion"></a>

## Discussion

Use this initializer when you want to match a known SSID prefix, but don’t have a full SSID. If the system finds multiple Wi-Fi networks whose SSID string matches the given prefix, it selects the network with the greatest signal strength.

## See Also

### Initializing a configuration

- [initWithSSID:](init%28ssid_%29-9apfi.md): Creates a new hotspot configuration, identified by an SSID, for an open Wi-Fi network.
- [initWithSSID:passphrase:isWEP:](init%28ssid_passphrase_iswep_%29-3ll1v.md): Creates a new hotspot configuration, identified by an SSID, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
- [initWithSSID:eapSettings:](init%28ssid_eapsettings_%29-53cpf.md): Creates a new hotspot configuration, identified by an SSID, for a WPA/WPA2 enterprise Wi-Fi network with EAP settings.
- [initWithHS20Settings:eapSettings:](init%28hs20settings_eapsettings_%29-291m2.md): Creates a new hotspot configuration, identified by a domain name, for a Hotspot 2.0 Wi-Fi network with HS 2.0 and EAP settings.
- [initWithSSIDPrefix:passphrase:isWEP:](init%28ssidprefix_passphrase_iswep_%29-7ttmu.md): Creates a new hotspot configuration, identified by an SSID prefix string, for a protected WEP or WPA/WPA2 personal Wi-Fi network.
