> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation/smartcard](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation/smartcard)

# smartCard (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Smart Card to which the formatted APDU is sent in order to authenticate.

## Declaration

```swift
var smartCard: TKSmartCard? { get set }
```

<a id="Discussion"></a>

## Discussion

This property is only used if the [apduTemplate](apdutemplate.md) property has a set value.

## See Also

### Configuring the Operation

- [pinFormat](pinformat.md): The PIN format.
- [apduTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [pinByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.

# smartCard (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

A Smart Card to which the formatted APDU is sent in order to authenticate.

## Declaration

```objectivec
@property (nullable) TKSmartCard * smartCard;
```

<a id="Discussion"></a>

## Discussion

This property is only used if the [APDUTemplate](apdutemplate.md) property has a set value.

## See Also

### Configuring the Operation

- [PINFormat](pinformat.md): The PIN format.
- [APDUTemplate](apdutemplate.md): The template into which the PIN is filled in. `nil` by default.
- [PINByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
