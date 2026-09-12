> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pinformat](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation/pinformat)

# pinFormat (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The PIN format.

## Declaration

```swift
var pinFormat: TKSmartCardPINFormat { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to a `TKSmartCardPINFormat` object initialized without any further configuration.

## See Also

### Configuring the Operation

- [apduTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [pinByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.

# PINFormat (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The PIN format.

## Declaration

```objectivec
@property TKSmartCardPINFormat * PINFormat;
```

<a id="Discussion"></a>

## Discussion

By default, this property is set to a `TKSmartCardPINFormat` object initialized without any further configuration.

## See Also

### Configuring the Operation

- [APDUTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [PINByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.
