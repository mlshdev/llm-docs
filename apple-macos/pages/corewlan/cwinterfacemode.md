> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwinterfacemode](https://developer.apple.com/documentation/corewlan/cwinterfacemode)

# CWInterfaceMode (Swift)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Wi-Fi interface operating modes.

## Declaration

```swift
enum CWInterfaceMode
```

## Topics

### Constants

- [CWInterfaceMode.none](cwinterfacemode/none.md): Interface is not in any mode.
- [CWInterfaceMode.station](cwinterfacemode/station.md): Interface is participating in an infrastructure network as a non-AP station.
- [CWInterfaceMode.IBSS](cwinterfacemode/ibss.md): Interface is participating in an IBSS network.
- [CWInterfaceMode.hostAP](cwinterfacemode/hostap.md): Interface is participating in an infrastructure network as an access point.

### Initializers

- [init(rawValue:)](cwinterfacemode/init%28rawvalue_%29.md)

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
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.

# CWInterfaceMode (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Wi-Fi interface operating modes.

## Declaration

```objectivec
enum CWInterfaceMode : NSInteger;
```

## Topics

### Constants

- [kCWInterfaceModeNone](cwinterfacemode/none.md): Interface is not in any mode.
- [kCWInterfaceModeStation](cwinterfacemode/station.md): Interface is participating in an infrastructure network as a non-AP station.
- [kCWInterfaceModeIBSS](cwinterfacemode/ibss.md): Interface is participating in an IBSS network.
- [kCWInterfaceModeHostAP](cwinterfacemode/hostap.md): Interface is participating in an infrastructure network as an access point.

## See Also

### Enumerations

- [CWChannelBand](cwchannelband.md): CoreWLAN channel bands.
- [CWChannelWidth](cwchannelwidth.md): CoreWLAN channel widths.
- [CWCipherKeyFlags](cwcipherkeyflags.md): Cipher key flags.
- [CWErr](cwerr.md)
- [CWEventType](cweventtype.md): Wi-Fi event types.
- [CWIBSSModeSecurity](cwibssmodesecurity.md): Deprecated. IBSS mode security types.
- [CWKeychainDomain](cwkeychaindomain.md): Keychain domain types that CoreWLAN keychain methods use.
- [CWPHYMode](cwphymode.md): CoreWLAN physical layer modes.
- [CWSecurity](cwsecurity.md): CoreWLAN security types.
