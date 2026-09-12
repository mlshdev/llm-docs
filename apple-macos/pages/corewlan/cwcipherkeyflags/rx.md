> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwcipherkeyflags/rx](https://developer.apple.com/documentation/corewlan/cwcipherkeyflags/rx)

# rx (Swift)

**Framework:** Core WLAN  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for packets received by the interface.

## Declaration

```swift
static var rx: CWCipherKeyFlags { get }
```

## See Also

### Constants

- [unicast](unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [multicast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [tx](tx.md): A flag that indicates to use the cipher key for packets sent from the interface.

# kCWCipherKeyFlagsRx (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for packets received by the interface.

## Declaration

```objectivec
kCWCipherKeyFlagsRx
```

## See Also

### Constants

- [kCWCipherKeyFlagsNone](kcwcipherkeyflagsnone.md): Open System authentication.
- [kCWCipherKeyFlagsUnicast](unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [kCWCipherKeyFlagsMulticast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [kCWCipherKeyFlagsTx](tx.md): A flag that indicates to use the cipher key for packets sent from the interface.
