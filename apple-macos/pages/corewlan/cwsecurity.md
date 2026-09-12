> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwsecurity](https://developer.apple.com/documentation/corewlan/cwsecurity)

# CWSecurity (Swift)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

CoreWLAN security types.

## Declaration

```swift
enum CWSecurity
```

## Topics

### Constants

- [CWSecurity.none](cwsecurity/none.md): Open System authentication.
- [CWSecurity.WEP](cwsecurity/wep.md): WEP security.
- [CWSecurity.wpaPersonal](cwsecurity/wpapersonal.md): WPA Personal authentication.
- [CWSecurity.wpaPersonalMixed](cwsecurity/wpapersonalmixed.md): WPA/WPA2 Personal authentication.
- [CWSecurity.wpa2Personal](cwsecurity/wpa2personal.md): WPA2 Personal authentication.
- [CWSecurity.personal](cwsecurity/personal.md): Personal authentication.
- [CWSecurity.dynamicWEP](cwsecurity/dynamicwep.md): Dynamic WEP security.
- [CWSecurity.wpaEnterprise](cwsecurity/wpaenterprise.md): WPA Enterprise authentication.
- [CWSecurity.wpaEnterpriseMixed](cwsecurity/wpaenterprisemixed.md): WPA/WPA2 Enterprise authentication.
- [CWSecurity.wpa2Enterprise](cwsecurity/wpa2enterprise.md): WPA2 Enterprise authentication.
- [CWSecurity.enterprise](cwsecurity/enterprise.md): Enterprise authentication.
- [CWSecurity.wpa3Personal](cwsecurity/wpa3personal.md): WPA3 Personal authentication.
- [CWSecurity.wpa3Enterprise](cwsecurity/wpa3enterprise.md): WPA3 Enterprise authentication.
- [CWSecurity.wpa3Transition](cwsecurity/wpa3transition.md): WPA3 Transition (WPA3/WPA2 Personal) authentication.
- [CWSecurity.unknown](cwsecurity/unknown.md): Unknown security type.

### Enumeration Cases

- [CWSecurity.OWE](cwsecurity/owe.md)
- [CWSecurity.oweTransition](cwsecurity/owetransition.md)

### Initializers

- [init(rawValue:)](cwsecurity/init%28rawvalue_%29.md)

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
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.

# CWSecurity (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

CoreWLAN security types.

## Declaration

```objectivec
enum CWSecurity : NSInteger;
```

## Topics

### Constants

- [kCWSecurityNone](cwsecurity/none.md): Open System authentication.
- [kCWSecurityWEP](cwsecurity/wep.md): WEP security.
- [kCWSecurityWPAPersonal](cwsecurity/wpapersonal.md): WPA Personal authentication.
- [kCWSecurityWPAPersonalMixed](cwsecurity/wpapersonalmixed.md): WPA/WPA2 Personal authentication.
- [kCWSecurityWPA2Personal](cwsecurity/wpa2personal.md): WPA2 Personal authentication.
- [kCWSecurityPersonal](cwsecurity/personal.md): Personal authentication.
- [kCWSecurityDynamicWEP](cwsecurity/dynamicwep.md): Dynamic WEP security.
- [kCWSecurityWPAEnterprise](cwsecurity/wpaenterprise.md): WPA Enterprise authentication.
- [kCWSecurityWPAEnterpriseMixed](cwsecurity/wpaenterprisemixed.md): WPA/WPA2 Enterprise authentication.
- [kCWSecurityWPA2Enterprise](cwsecurity/wpa2enterprise.md): WPA2 Enterprise authentication.
- [kCWSecurityEnterprise](cwsecurity/enterprise.md): Enterprise authentication.
- [kCWSecurityWPA3Personal](cwsecurity/wpa3personal.md): WPA3 Personal authentication.
- [kCWSecurityWPA3Enterprise](cwsecurity/wpa3enterprise.md): WPA3 Enterprise authentication.
- [kCWSecurityWPA3Transition](cwsecurity/wpa3transition.md): WPA3 Transition (WPA3/WPA2 Personal) authentication.
- [kCWSecurityUnknown](cwsecurity/unknown.md): Unknown security type.

### Enumeration Cases

- [kCWSecurityOWE](cwsecurity/owe.md)
- [kCWSecurityOWETransition](cwsecurity/owetransition.md)

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWErr](cwerr.md)
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
