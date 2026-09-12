> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cweventtype](https://developer.apple.com/documentation/corewlan/cweventtype)

# CWEventType (Swift)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Wi-Fi event types.

## Declaration

```swift
enum CWEventType
```

## Topics

### Constants

- [CWEventType.none](cweventtype/none.md): No specified event type.
- [CWEventType.powerDidChange](cweventtype/powerdidchange.md): Posts when the power state of any Wi-Fi interface changes.
- [CWEventType.ssidDidChange](cweventtype/ssiddidchange.md): Posts when the current SSID of any Wi-Fi interface changes.
- [CWEventType.bssidDidChange](cweventtype/bssiddidchange.md): Posts when the current BSSID of any Wi-Fi interface changes.
- [CWEventType.countryCodeDidChange](cweventtype/countrycodedidchange.md): Posts when the adopted country code of any Wi-Fi interface changes.
- [CWEventType.linkDidChange](cweventtype/linkdidchange.md): Posts when the link state for any Wi-Fi interface changes.
- [CWEventType.linkQualityDidChange](cweventtype/linkqualitydidchange.md): Posts when the RSSI or transmit rate for any Wi-Fi interface changes.
- [CWEventType.modeDidChange](cweventtype/modedidchange.md): Posts when the operating mode of any Wi-Fi interface changes.
- [CWEventType.scanCacheUpdated](cweventtype/scancacheupdated.md): Posts when the scan cache of any Wi-Fi interface is updated with new scan results.
- [CWEventType.unknown](cweventtype/unknown.md): Unknown event type.

### Enumeration Cases

- [CWEventType.btCoexStats](cweventtype/btcoexstats.md)

### Initializers

- [init(rawValue:)](cweventtype/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWErr](cwerr.md)
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.

# CWEventType (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Wi-Fi event types.

## Declaration

```objectivec
enum CWEventType : NSInteger;
```

## Topics

### Constants

- [CWEventTypeNone](cweventtype/none.md): No specified event type.
- [CWEventTypePowerDidChange](cweventtype/powerdidchange.md): Posts when the power state of any Wi-Fi interface changes.
- [CWEventTypeSSIDDidChange](cweventtype/ssiddidchange.md): Posts when the current SSID of any Wi-Fi interface changes.
- [CWEventTypeBSSIDDidChange](cweventtype/bssiddidchange.md): Posts when the current BSSID of any Wi-Fi interface changes.
- [CWEventTypeCountryCodeDidChange](cweventtype/countrycodedidchange.md): Posts when the adopted country code of any Wi-Fi interface changes.
- [CWEventTypeLinkDidChange](cweventtype/linkdidchange.md): Posts when the link state for any Wi-Fi interface changes.
- [CWEventTypeLinkQualityDidChange](cweventtype/linkqualitydidchange.md): Posts when the RSSI or transmit rate for any Wi-Fi interface changes.
- [CWEventTypeModeDidChange](cweventtype/modedidchange.md): Posts when the operating mode of any Wi-Fi interface changes.
- [CWEventTypeScanCacheUpdated](cweventtype/scancacheupdated.md): Posts when the scan cache of any Wi-Fi interface is updated with new scan results.
- [CWEventTypeUnknown](cweventtype/unknown.md): Unknown event type.

### Enumeration Cases

- [CWEventTypeBtCoexStats](cweventtype/btcoexstats.md)

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWErr](cwerr.md)
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.
