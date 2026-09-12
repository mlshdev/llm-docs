> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardpinformat/pinjustification](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardpinformat/pinjustification)

# pinJustification (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The justification within the PIN block. `TKSmartCardPINJustificationLeft` by default.

## Declaration

```swift
var pinJustification: TKSmartCardPINFormat.Justification { get set }
```

## See Also

### Configuring PIN Formatting

- [charset](charset-swift.property.md): The format of PIN characters. `TKSmartCardPINCharsetNumeric` by default.
- [encoding](encoding-swift.property.md): The encoding of PIN characters. `TKSmartCardPINEncodingASCII` by default.
- [minPINLength](minpinlength.md): The minimum number of characters to form a valid PIN. `4` by default.
- [maxPINLength](maxpinlength.md): The maximum number of characters to form a valid PIN. `8` by default.
- [pinBlockByteLength](pinblockbytelength.md): The total length of the PIN block in bytes. `8` by default.
- [pinBitOffset](pinbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the formatted PIN, which is justified with respect to the [pinJustification](pinjustification.md) property value. `0` by default.
- [pinLengthBitOffset](pinlengthbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the PIN length, which is always left justified. `0` by default.
- [pinLengthBitSize](pinlengthbitsize.md): The size, in bits, of the PIN length field. If set to `0`, PIN length is not written. `0` by default.

# PINJustification (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The justification within the PIN block. `TKSmartCardPINJustificationLeft` by default.

## Declaration

```objectivec
@property TKSmartCardPINJustification PINJustification;
```

## See Also

### Configuring PIN Formatting

- [charset](charset-swift.property.md): The format of PIN characters. `TKSmartCardPINCharsetNumeric` by default.
- [encoding](encoding-swift.property.md): The encoding of PIN characters. `TKSmartCardPINEncodingASCII` by default.
- [minPINLength](minpinlength.md): The minimum number of characters to form a valid PIN. `4` by default.
- [maxPINLength](maxpinlength.md): The maximum number of characters to form a valid PIN. `8` by default.
- [PINBlockByteLength](pinblockbytelength.md): The total length of the PIN block in bytes. `8` by default.
- [PINBitOffset](pinbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the formatted PIN, which is justified with respect to the [PINJustification](pinjustification.md) property value. `0` by default.
- [PINLengthBitOffset](pinlengthbitoffset.md): The offset, in bits, within the PIN block to mark a location for filling in the PIN length, which is always left justified. `0` by default.
- [PINLengthBitSize](pinlengthbitsize.md): The size, in bits, of the PIN length field. If set to `0`, PIN length is not written. `0` by default.
