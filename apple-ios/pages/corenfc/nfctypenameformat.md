> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfctypenameformat](https://developer.apple.com/documentation/corenfc/nfctypenameformat)

# NFCTypeNameFormat (Swift)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

## Declaration

```swift
enum NFCTypeNameFormat
```

## Topics

### Content Types

- [NFCTypeNameFormat.absoluteURI](nfctypenameformat/absoluteuri.md): A type indicating that the payload contains a uniform resource identifier.
- [NFCTypeNameFormat.empty](nfctypenameformat/empty.md): A type indicating that the payload contains no data.
- [NFCTypeNameFormat.media](nfctypenameformat/media.md): A type indicating that the payload contains media data as defined by RFC 2046.
- [NFCTypeNameFormat.nfcExternal](nfctypenameformat/nfcexternal.md): A type indicating that the payload contains NFC external type data.
- [NFCTypeNameFormat.nfcWellKnown](nfctypenameformat/nfcwellknown.md): A type indicating that the payload contains well-known NFC record type data.
- [NFCTypeNameFormat.unchanged](nfctypenameformat/unchanged.md): A type indicating that the payload is part of a series of records containing chunked data.
- [NFCTypeNameFormat.unknown](nfctypenameformat/unknown.md): A type indicating that the payload data type is unknown.

### Initializers

- [init(rawValue:)](nfctypenameformat/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting Information About a Payload Record

- [identifier](nfcndefpayload/identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](nfcndefpayload/payload.md): The payload, as defined by the NDEF specification.
- [type](nfcndefpayload/type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](nfcndefpayload/typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.

# NFCTypeNameFormat (Objective-C)

**Framework:** Core NFC  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst

The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

## Declaration

```objectivec
enum NFCTypeNameFormat : uint8_t;
```

## Topics

### Content Types

- [NFCTypeNameFormatAbsoluteURI](nfctypenameformat/absoluteuri.md): A type indicating that the payload contains a uniform resource identifier.
- [NFCTypeNameFormatEmpty](nfctypenameformat/empty.md): A type indicating that the payload contains no data.
- [NFCTypeNameFormatMedia](nfctypenameformat/media.md): A type indicating that the payload contains media data as defined by RFC 2046.
- [NFCTypeNameFormatNFCExternal](nfctypenameformat/nfcexternal.md): A type indicating that the payload contains NFC external type data.
- [NFCTypeNameFormatNFCWellKnown](nfctypenameformat/nfcwellknown.md): A type indicating that the payload contains well-known NFC record type data.
- [NFCTypeNameFormatUnchanged](nfctypenameformat/unchanged.md): A type indicating that the payload is part of a series of records containing chunked data.
- [NFCTypeNameFormatUnknown](nfctypenameformat/unknown.md): A type indicating that the payload data type is unknown.

## See Also

### Getting Information About a Payload Record

- [identifier](nfcndefpayload/identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](nfcndefpayload/payload.md): The payload, as defined by the NDEF specification.
- [type](nfcndefpayload/type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](nfcndefpayload/typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
