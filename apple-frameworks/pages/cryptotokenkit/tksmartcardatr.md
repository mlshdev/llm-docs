> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardatr](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardatr)

# TKSmartCardATR (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A parsed ATR (Answer To Reset) message from a Smart Card.

## Declaration

```swift
class TKSmartCardATR
```

<a id="overview"></a>

## Overview

This class declares a programmatic interface to parsing an ATR from data or a byte stream, and accessing the individual parts.

> **Note**

>  The [TKSmartCardATR](tksmartcardatr.md) class parses ATR messages according to the ISO/IEC 7816-3 specification.

## Topics

### Creating a Smart Card ATR

- [init(bytes:)](tksmartcardatr/init%28bytes_%29.md): Initializes a `TKSmartCardATR` object from a provided data object.
- [init(source:)](tksmartcardatr/init%28source_%29.md): Initializes a `TKSmartCardATR` object from a provided data source.

### Accessing ATR Attributes

- [protocols](tksmartcardatr/protocols.md): An array of protocols indicated in the ATR
- [bytes](tksmartcardatr/bytes.md): The ATR message data.
- [historicalBytes](tksmartcardatr/historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](tksmartcardatr/historicalrecords.md): A list of compact TLV records parsed from historical bytes.

### Retrieving Interface Groups

- [interfaceGroup(at:)](tksmartcardatr/interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [interfaceGroup(for:)](tksmartcardatr/interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.
- [TKSmartCardATR.InterfaceGroup](tksmartcardatr/interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Reading the Answer to Reset

- [atr](tksmartcardslot/atr.md): The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.

# TKSmartCardATR (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A parsed ATR (Answer To Reset) message from a Smart Card.

## Declaration

```objectivec
@interface TKSmartCardATR : NSObject
```

<a id="overview"></a>

## Overview

This class declares a programmatic interface to parsing an ATR from data or a byte stream, and accessing the individual parts.

> **Note**

>  The [TKSmartCardATR](tksmartcardatr.md) class parses ATR messages according to the ISO/IEC 7816-3 specification.

## Topics

### Creating a Smart Card ATR

- [initWithBytes:](tksmartcardatr/init%28bytes_%29.md): Initializes a `TKSmartCardATR` object from a provided data object.
- [initWithSource:](tksmartcardatr/init%28source_%29.md): Initializes a `TKSmartCardATR` object from a provided data source.

### Accessing ATR Attributes

- [protocols](tksmartcardatr/protocols.md): An array of protocols indicated in the ATR
- [bytes](tksmartcardatr/bytes.md): The ATR message data.
- [historicalBytes](tksmartcardatr/historicalbytes.md): The ATR historical bytes, not including interface bytes or the TCK (check byte).
- [historicalRecords](tksmartcardatr/historicalrecords.md): A list of compact TLV records parsed from historical bytes.

### Retrieving Interface Groups

- [interfaceGroupAtIndex:](tksmartcardatr/interfacegroup%28at_%29.md): Returns the interface group at the specified index.
- [interfaceGroupForProtocol:](tksmartcardatr/interfacegroup%28for_%29.md): Returns the interface group with the specified protocol.
- [TKSmartCardATRInterfaceGroup](tksmartcardatr/interfacegroup.md): A single interface-bytes group for a Smart Card ATR (Answer to Reset).

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Reading the Answer to Reset

- [ATR](tksmartcardslot/atr.md): The ATR (Answer to Reset) of the inserted Smart Card, or `nil` if no Smart Card is inserted or the inserted Smart Card is mute.
