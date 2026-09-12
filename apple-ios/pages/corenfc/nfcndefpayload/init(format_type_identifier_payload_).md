> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/init(format:type:identifier:payload:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/init(format:type:identifier:payload:))

# init(format:type:identifier:payload:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with the specified format, type, identifier, and payload data.

## Declaration

```swift
init(format: NFCTypeNameFormat, type: Data, identifier: Data, payload: Data)
```

## Parameters

- `format`: A NFC type name format value.
- `type`: A data object describing the type of payload. If the data is empty, the method excludes this field from the payload record.
- `identifier`: A URI reference that identifies the payload. If the data is empty, the method excludes this field from the payload record.
- `payload`: A data object containing the payload data. If the data is empty, the method excludes this field from the payload record.

<a id="return-value"></a>

## Return Value

A newly initialized payload record object.

<a id="Discussion"></a>

## Discussion

This initializer uses the maximum payload chunk size defined by the NFC NDEF specification, which is 2^32-1 octets. If the payload size is bigger than the maximum size, the initializer splits the record into multiple record chunks.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayload(string:)](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayload(string:locale:)](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:chunkSize:)](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayload(string:locale:)](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

# initWithFormat:type:identifier:payload: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with the specified format, type, identifier, and payload data.

## Declaration

```objectivec
- (instancetype) initWithFormat:(NFCTypeNameFormat) format type:(NSData *) type identifier:(NSData *) identifier payload:(NSData *) payload;
```

## Parameters

- `format`: A NFC type name format value.
- `type`: A data object describing the type of payload. If the data is empty, the method excludes this field from the payload record.
- `identifier`: A URI reference that identifies the payload. If the data is empty, the method excludes this field from the payload record.
- `payload`: A data object containing the payload data. If the data is empty, the method excludes this field from the payload record.

<a id="return-value"></a>

## Return Value

A newly initialized payload record object.

<a id="Discussion"></a>

## Discussion

This initializer uses the maximum payload chunk size defined by the NFC NDEF specification, which is 2^32-1 octets. If the payload size is bigger than the maximum size, the initializer splits the record into multiple record chunks.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayloadWithString:](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayloadWithString:locale:](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:chunkSize:](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayloadWithString:locale:](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.
