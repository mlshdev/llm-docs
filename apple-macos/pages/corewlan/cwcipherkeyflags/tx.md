> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwcipherkeyflags/tx](https://developer.apple.com/documentation/corewlan/cwcipherkeyflags/tx)

# tx (Swift)

**Framework:** Core WLAN  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for packets sent from the interface.

## Declaration

```swift
static var tx: CWCipherKeyFlags { get }
```

## See Also

### Constants

- [unicast](unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [multicast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [rx](rx.md): A flag that indicates to use the cipher key for packets received by the interface.

# kCWCipherKeyFlagsTx (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for packets sent from the interface.

## Declaration

```objectivec
kCWCipherKeyFlagsTx
```

## See Also

### Constants

- [kCWCipherKeyFlagsNone](kcwcipherkeyflagsnone.md): Open System authentication.
- [kCWCipherKeyFlagsUnicast](unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [kCWCipherKeyFlagsMulticast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [kCWCipherKeyFlagsRx](rx.md): A flag that indicates to use the cipher key for packets received by the interface.
