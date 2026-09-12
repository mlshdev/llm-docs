> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pinbyteoffset](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pinbyteoffset)

# pinByteOffset (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset, in bytes, within the APDU template to mark the location for filling in the PIN.

## Declaration

```swift
var pinByteOffset: Int { get set }
```

## See Also

### Configuring the Operation

- [pinFormat](pinformat.md): The PIN format.
- [apduTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.

# PINByteOffset (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The offset, in bytes, within the APDU template to mark the location for filling in the PIN.

## Declaration

```objectivec
@property NSInteger PINByteOffset;
```

## See Also

### Configuring the Operation

- [PINFormat](pinformat.md): The PIN format.
- [APDUTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.
