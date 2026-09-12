> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowtypetextpayload(string:locale:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowtypetextpayload(string:locale:))

# wellKnowTypeTextPayload(string:locale:) (Swift)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a payload record with text.

## Declaration

```swift
class func wellKnowTypeTextPayload(string text: String, locale: Locale) -> Self?
```

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayload(string:)](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayload(string:locale:)](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:)](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [init(format:type:identifier:payload:chunkSize:)](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.

# wellKnowTypeTextPayloadWithString:locale: (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ (deprecated in 13.0) · iPadOS 13.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Creates a payload record with text.

## Declaration

```objectivec
+ (instancetype) wellKnowTypeTextPayloadWithString:(NSString *) text locale:(NSLocale *) locale;
```

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayloadWithString:](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayloadWithString:locale:](wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [initWithFormat:type:identifier:payload:chunkSize:](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
