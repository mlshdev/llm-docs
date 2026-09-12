> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowntypeuripayload(url:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowntypeuripayload(url:))

# wellKnownTypeURIPayload(url:) (Swift)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with a URI specified as a URL.

## Declaration

```swift
class func wellKnownTypeURIPayload(url: URL) -> Self?
```

## Parameters

- `url`: A URL object.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(string:)](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayload(string:locale:)](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:)](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [init(format:type:identifier:payload:chunkSize:)](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayload(string:locale:)](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

# wellKnownTypeURIPayloadWithURL: (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with a URI specified as a URL.

## Declaration

```objectivec
+ (instancetype) wellKnownTypeURIPayloadWithURL:(NSURL *) url;
```

## Parameters

- `url`: A URL object.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithString:](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayloadWithString:locale:](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [initWithFormat:type:identifier:payload:chunkSize:](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayloadWithString:locale:](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.
