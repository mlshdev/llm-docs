> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwcipherkeyflags](https://developer.apple.com/documentation/corewlan/cwcipherkeyflags)

# CWCipherKeyFlags (Swift)

**Framework:** Core WLAN  
**Kind:** Structure  
**Availability:** macOS 10.7+

Cipher key flags.

## Declaration

```swift
struct CWCipherKeyFlags
```

<a id="overview"></a>

## Overview

Use these flags with [setWEPKey(\_:flags:index:)](cwinterface/setwepkey%28__flags_index_%29.md).

## Topics

### Constants

- [unicast](cwcipherkeyflags/unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [multicast](cwcipherkeyflags/multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [tx](cwcipherkeyflags/tx.md): A flag that indicates to use the cipher key for packets sent from the interface.
- [rx](cwcipherkeyflags/rx.md): A flag that indicates to use the cipher key for packets received by the interface.

### Initializers

- [init(rawValue:)](cwcipherkeyflags/init%28rawvalue_%29.md): Creates a cipher key flags structure with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# CWCipherKeyFlags (Objective-C)

**Framework:** Core WLAN  
**Kind:** Enumeration  
**Availability:** macOS 10.7+

Cipher key flags.

## Declaration

```objectivec
enum CWCipherKeyFlags : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these flags with [setWEPKey:flags:index:error:](cwinterface/setwepkey%28__flags_index_%29.md).

## Topics

### Constants

- [kCWCipherKeyFlagsNone](cwcipherkeyflags/kcwcipherkeyflagsnone.md): Open System authentication.
- [kCWCipherKeyFlagsUnicast](cwcipherkeyflags/unicast.md): A flag that indicates to use the cipher key for unicast packets.
- [kCWCipherKeyFlagsMulticast](cwcipherkeyflags/multicast.md): A flag that indicates to use the cipher key for multicast packets.
- [kCWCipherKeyFlagsTx](cwcipherkeyflags/tx.md): A flag that indicates to use the cipher key for packets sent from the interface.
- [kCWCipherKeyFlagsRx](cwcipherkeyflags/rx.md): A flag that indicates to use the cipher key for packets received by the interface.
