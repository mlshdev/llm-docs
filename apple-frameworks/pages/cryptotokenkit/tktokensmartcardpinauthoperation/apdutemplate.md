> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tktokensmartcardpinauthoperation/apdutemplate](https://developer.apple.com/documentation/cryptotokenkit/tktokensmartcardpinauthoperation/apdutemplate)

# apduTemplate (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The template into which the PIN is filled in. `nil` by default.

## Declaration

```swift
var apduTemplate: Data? { get set }
```

<a id="Discussion"></a>

## Discussion

If `nil`, the system will not attempt to authenticate by sending the formatted APDU to the Smart Card. Instead, the token itself is expected to perform the authentication. You are encouraged to provide an APDU template, if possible, as it allows the use of a hardware interface for secure PIN entry, provided one exists.

## See Also

### Configuring the Operation

- [pinFormat](pinformat.md): The PIN format.
- [pinByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.

# APDUTemplate (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 10.12+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The template into which the PIN is filled in. `nil` by default.

## Declaration

```objectivec
@property (copy, nullable) NSData * APDUTemplate;
```

<a id="Discussion"></a>

## Discussion

If `nil`, the system will not attempt to authenticate by sending the formatted APDU to the Smart Card. Instead, the token itself is expected to perform the authentication. You are encouraged to provide an APDU template, if possible, as it allows the use of a hardware interface for secure PIN entry, provided one exists.

## See Also

### Configuring the Operation

- [PINFormat](pinformat.md): The PIN format.
- [PINByteOffset](pinbyteoffset.md): The offset, in bytes, within the APDU template to mark the location for filling in the PIN.
- [smartCard](smartcard.md): A Smart Card to which the formatted APDU is sent in order to authenticate.
