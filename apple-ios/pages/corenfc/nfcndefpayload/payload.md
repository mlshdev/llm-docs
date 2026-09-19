> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/corenfc/nfcndefpayload/payload

# payload (Swift)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The payload, as defined by the NDEF specification.

## Declaration

```swift
var payload: Data { get set }
```

## See Also

### Getting Information About a Payload Record

- [identifier](identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [type](type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](../nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

# payload (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The payload, as defined by the NDEF specification.

## Declaration

```objectivec
@property (nonatomic, copy) NSData * payload;
```

## See Also

### Getting Information About a Payload Record

- [identifier](identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [type](type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](../nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.
