> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowntypeuripayload(string:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowntypeuripayload(string:))

# wellKnownTypeURIPayload(string:) (Swift)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with a URI specified as a string.

## Declaration

```swift
class func wellKnownTypeURIPayload(string uri: String) -> Self?
```

## Parameters

- `uri`: A URL string.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

<a id="Discussion"></a>

## Discussion

Use this method to create NDEF URI payload records that you can’t create using a URL object, such as a URI containing special characters not represented by 7-bit ASCII encoding such as ä and ö.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeTextPayload(string:locale:)](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:)](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [init(format:type:identifier:payload:chunkSize:)](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayload(string:locale:)](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

# wellKnownTypeURIPayloadWithString: (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with a URI specified as a string.

## Declaration

```objectivec
+ (instancetype) wellKnownTypeURIPayloadWithString:(NSString *) uri;
```

## Parameters

- `uri`: A URL string.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

<a id="Discussion"></a>

## Discussion

Use this method to create NDEF URI payload records that you can’t create using a URL object, such as a URI containing special characters not represented by 7-bit ASCII encoding such as ä and ö.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeTextPayloadWithString:locale:](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [initWithFormat:type:identifier:payload:chunkSize:](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayloadWithString:locale:](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.
