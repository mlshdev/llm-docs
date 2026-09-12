> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/init(format:type:identifier:payload:chunksize:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/init(format:type:identifier:payload:chunksize:))

# init(format:type:identifier:payload:chunkSize:) (Swift)

**Framework:** Core NFC  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.

## Declaration

```swift
init(format: NFCTypeNameFormat, type: Data, identifier: Data, payload: Data, chunkSize: Int)
```

## Parameters

- `format`: A NFC type name format value.
- `type`: A data object describing the type of payload. If the data is empty, the method excludes this field from the payload record.
- `identifier`: A URI reference that identifies the payload. If the data is empty, the method excludes this field from the payload record.
- `payload`: A data object containing the payload data. If the data is empty, the method excludes this field from the payload record.
- `chunkSize`: The maximum size of a payload chunk. A value of zero indicates that the payload fits in a single record, that is, no chunking of the payload.

<a id="return-value"></a>

## Return Value

A newly initialized payload record object.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayload(string:)](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayload(string:locale:)](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:)](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [wellKnowTypeTextPayload(string:locale:)](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

# initWithFormat:type:identifier:payload:chunkSize: (Objective-C)

**Framework:** Core NFC  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.

## Declaration

```objectivec
- (instancetype) initWithFormat:(NFCTypeNameFormat) format type:(NSData *) type identifier:(NSData *) identifier payload:(NSData *) payload chunkSize:(size_t) chunkSize;
```

## Parameters

- `format`: A NFC type name format value.
- `type`: A data object describing the type of payload. If the data is empty, the method excludes this field from the payload record.
- `identifier`: A URI reference that identifies the payload. If the data is empty, the method excludes this field from the payload record.
- `payload`: A data object containing the payload data. If the data is empty, the method excludes this field from the payload record.
- `chunkSize`: The maximum size of a payload chunk. A value of zero indicates that the payload fits in a single record, that is, no chunking of the payload.

<a id="return-value"></a>

## Return Value

A newly initialized payload record object.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayloadWithString:](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayloadWithString:locale:](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [wellKnowTypeTextPayloadWithString:locale:](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.
