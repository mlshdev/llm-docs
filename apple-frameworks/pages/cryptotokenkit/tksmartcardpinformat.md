> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardpinformat](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardpinformat)

# TKSmartCardPINFormat (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The formatting properties for a PIN, such as character encoding and length constraints.

## Declaration

```swift
class TKSmartCardPINFormat
```

<a id="overview"></a>

## Overview

You typically interact with `TKSmartCardPINFormat` objects when calling the [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an instance of [TKSmartCard](tksmartcard.md).

## Topics

### Configuring PIN Formatting

- [charset](tksmartcardpinformat/charset-swift.property.md): The format of PIN characters. `TKSmartCardPINCharsetNumeric` by default.
- [encoding](tksmartcardpinformat/encoding-swift.property.md): The encoding of PIN characters. `TKSmartCardPINEncodingASCII` by default.
- [minPINLength](tksmartcardpinformat/minpinlength.md): The minimum number of characters to form a valid PIN. `4` by default.
- [maxPINLength](tksmartcardpinformat/maxpinlength.md): The maximum number of characters to form a valid PIN. `8` by default.
- [pinBlockByteLength](tksmartcardpinformat/pinblockbytelength.md): The total length of the PIN block in bytes. `8` by default.
- [pinJustification](tksmartcardpinformat/pinjustification.md): The justification within the PIN block. `TKSmartCardPINJustificationLeft` by default.
- [pinBitOffset](tksmartcardpinformat/pinbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the formatted PIN, which is justified with respect to the [pinJustification](tksmartcardpinformat/pinjustification.md) property value. `0` by default.
- [pinLengthBitOffset](tksmartcardpinformat/pinlengthbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the PIN length, which is always left justified. `0` by default.
- [pinLengthBitSize](tksmartcardpinformat/pinlengthbitsize.md): The size, in bits, of the PIN length field. If set to `0`, PIN length is not written. `0` by default.

### PIN Characteristics

- [TKSmartCardPINFormat.Charset](tksmartcardpinformat/charset-swift.enum.md): Possible PIN character sets.
- [TKSmartCardPINFormat.Encoding](tksmartcardpinformat/encoding-swift.enum.md): Possible PIN encoding types.
- [TKSmartCardPINFormat.Justification](tksmartcardpinformat/justification.md): Possible PIN justification types

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

### Managing User Interaction

- [userInteractionForSecurePINVerification(\_:apdu:pinByteOffset:)](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChange(\_:apdu:currentPINByteOffset:newPINByteOffset:)](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.

# TKSmartCardPINFormat (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The formatting properties for a PIN, such as character encoding and length constraints.

## Declaration

```objectivec
@interface TKSmartCardPINFormat : NSObject
```

<a id="overview"></a>

## Overview

You typically interact with `TKSmartCardPINFormat` objects when calling the [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md) and [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md) methods on an instance of [TKSmartCard](tksmartcard.md).

## Topics

### Configuring PIN Formatting

- [charset](tksmartcardpinformat/charset-swift.property.md): The format of PIN characters. `TKSmartCardPINCharsetNumeric` by default.
- [encoding](tksmartcardpinformat/encoding-swift.property.md): The encoding of PIN characters. `TKSmartCardPINEncodingASCII` by default.
- [minPINLength](tksmartcardpinformat/minpinlength.md): The minimum number of characters to form a valid PIN. `4` by default.
- [maxPINLength](tksmartcardpinformat/maxpinlength.md): The maximum number of characters to form a valid PIN. `8` by default.
- [PINBlockByteLength](tksmartcardpinformat/pinblockbytelength.md): The total length of the PIN block in bytes. `8` by default.
- [PINJustification](tksmartcardpinformat/pinjustification.md): The justification within the PIN block. `TKSmartCardPINJustificationLeft` by default.
- [PINBitOffset](tksmartcardpinformat/pinbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the formatted PIN, which is justified with respect to the [PINJustification](tksmartcardpinformat/pinjustification.md) property value. `0` by default.
- [PINLengthBitOffset](tksmartcardpinformat/pinlengthbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the PIN length, which is always left justified. `0` by default.
- [PINLengthBitSize](tksmartcardpinformat/pinlengthbitsize.md): The size, in bits, of the PIN length field. If set to `0`, PIN length is not written. `0` by default.

### PIN Characteristics

- [TKSmartCardPINCharset](tksmartcardpinformat/charset-swift.enum.md): Possible PIN character sets.
- [TKSmartCardPINEncoding](tksmartcardpinformat/encoding-swift.enum.md): Possible PIN encoding types.
- [TKSmartCardPINJustification](tksmartcardpinformat/justification.md): Possible PIN justification types

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Managing User Interaction

- [userInteractionForSecurePINVerificationWithPINFormat:APDU:PINByteOffset:](tksmartcard/userinteractionforsecurepinverification%28__apdu_pinbyteoffset_%29.md): Creates and returns a new user interaction object for secure PIN verification using the Smart Card reader facilities.
- [userInteractionForSecurePINChangeWithPINFormat:APDU:currentPINByteOffset:newPINByteOffset:](tksmartcard/userinteractionforsecurepinchange%28__apdu_currentpinbyteoffset_newpinbyteoffset_%29.md): Creates a new user interaction object for secure PIN change using the smart card reader facilities (typically a HW keypad).
- [TKSmartCardUserInteraction](tksmartcarduserinteraction.md): The base class for encapsulating user interaction with a Smart Card reader.
- [TKSmartCardUserInteractionForPINOperation](tksmartcarduserinteractionforpinoperation.md): A representation of user interaction for secure PIN operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINChange](tksmartcarduserinteractionforsecurepinchange.md): A representation of the user interaction for secure PIN change operations on a Smart Card reader.
- [TKSmartCardUserInteractionForSecurePINVerification](tksmartcarduserinteractionforsecurepinverification.md): A representation of the user interaction for secure PIN change verification on a Smart Card reader.
