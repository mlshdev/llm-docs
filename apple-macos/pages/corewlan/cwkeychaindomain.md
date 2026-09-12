> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwkeychaindomain](https://developer.apple.com/documentation/corewlan/cwkeychaindomain)

# CWKeychainDomain (Swift)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Keychain domain types that CoreWLAN keychain methods use.

## Declaration

```swift
enum CWKeychainDomain
```

## Topics

### Constants

- [CWKeychainDomain.none](cwkeychaindomain/none.md): No keychain domain specified.
- [CWKeychainDomain.user](cwkeychaindomain/user.md): The user keychain domain.
- [CWKeychainDomain.system](cwkeychaindomain/system.md): The system keychain domain.

### Initializers

- [init(rawValue:)](cwkeychaindomain/init%28rawvalue_%29.md)

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
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.

# CWKeychainDomain (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.10+

Keychain domain types that CoreWLAN keychain methods use.

## Declaration

```objectivec
enum CWKeychainDomain : NSInteger;
```

## Topics

### Constants

- [kCWKeychainDomainNone](cwkeychaindomain/none.md): No keychain domain specified.
- [kCWKeychainDomainUser](cwkeychaindomain/user.md): The user keychain domain.
- [kCWKeychainDomainSystem](cwkeychaindomain/system.md): The system keychain domain.

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWErr](cwerr.md)
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWInterfaceMode](cwinterfacemode.md): Wi-Fi interface operating modes.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.
