> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwcipherkeyflags/unicast](https://developer.apple.com/documentation/corewlan/cwcipherkeyflags/unicast)

# unicast (Swift)

**Framework:** Core WLAN  
**Kind:** Type Property  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for unicast packets.

## Declaration

```swift
static var unicast: CWCipherKeyFlags { get }
```

## See Also

### Constants

- [multicast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [tx](tx.md): A flag that indicates to use the cipher key for packets sent from the interface.
- [rx](rx.md): A flag that indicates to use the cipher key for packets received by the interface.

# kCWCipherKeyFlagsUnicast (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration Case  
**Availability:** macOS 10.7+

A flag that indicates to use the cipher key for unicast packets.

## Declaration

```objectivec
kCWCipherKeyFlagsUnicast
```

## See Also

### Constants

- [kCWCipherKeyFlagsNone](kcwcipherkeyflagsnone.md): Open System authentication.
- [kCWCipherKeyFlagsMulticast](multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [kCWCipherKeyFlagsTx](tx.md): A flag that indicates to use the cipher key for packets sent from the interface.
- [kCWCipherKeyFlagsRx](rx.md): A flag that indicates to use the cipher key for packets received by the interface.
