> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr/interfacegroup](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr/interfacegroup)

# TKSmartCardATR.InterfaceGroup (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A single interface-bytes group for a Smart Card ATR (Answer to Reset).

## Declaration

```swift
class InterfaceGroup
```

<a id="overview"></a>

## Overview

You access instances of this class by calling the [interfaceGroup(at:)](interfacegroup%28at_%29.md) and [interfaceGroup(for:)](interfacegroup%28for_%29.md) methods on an [TKSmartCardATR](../tksmartcardatr.md) object.

## Topics

### Accessing Interface Group Protocol and Bytes

- [protocol](interfacegroup/protocol.md): The protocol for this group.
- [ta](interfacegroup/ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [tb](interfacegroup/tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [tc](interfacegroup/tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)

## See Also

### Retrieving Interface Groups

- [interfaceGroup(at:)](interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [interfaceGroup(for:)](interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.

# TKSmartCardATRInterfaceGroup (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A single interface-bytes group for a Smart Card ATR (Answer to Reset).

## Declaration

```objectivec
@interface TKSmartCardATRInterfaceGroup : NSObject
```

<a id="overview"></a>

## Overview

You access instances of this class by calling the [interfaceGroupAtIndex:](interfacegroup%28at_%29.md) and [interfaceGroupForProtocol:](interfacegroup%28for_%29.md) methods on an [TKSmartCardATR](../tksmartcardatr.md) object.

## Topics

### Accessing Interface Group Protocol and Bytes

- [protocol](interfacegroup/protocol.md): The protocol for this group.
- [TA](interfacegroup/ta.md): The TA interface byte of ATR group, or `nil` if TA is not present.
- [TB](interfacegroup/tb.md): The TB interface byte of ATR group, or `nil` if TB is not present.
- [TC](interfacegroup/tc.md): The TC interface byte of ATR group, or `nil` if TC is not present.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

## See Also

### Retrieving Interface Groups

- [interfaceGroupAtIndex:](interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [interfaceGroupForProtocol:](interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.
