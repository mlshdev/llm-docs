> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload/wellknowntypetextpayload(string:locale:)](https://developer.apple.com/documentation/corenfc/nfcndefpayload/wellknowntypetextpayload(string:locale:))

# wellKnownTypeTextPayload(string:locale:) (Swift)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with text.

## Declaration

```swift
class func wellKnownTypeTextPayload(string text: String, locale: Locale) -> Self?
```

## Parameters

- `text`: Text to include in the payload.
- `locale`: A locale object. This method saves the IANA language code, specified by the locale, to the payload.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayload(string:)](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [init(format:type:identifier:payload:)](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [init(format:type:identifier:payload:chunkSize:)](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayload(string:locale:)](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

# wellKnownTypeTextPayloadWithString:locale: (Objective-C)

**Framework:** Core NFC  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+

Creates a payload record with text.

## Declaration

```objectivec
+ (instancetype) wellKnownTypeTextPayloadWithString:(NSString *) text locale:(NSLocale *) locale;
```

## Parameters

- `text`: Text to include in the payload.
- `locale`: A locale object. This method saves the IANA language code, specified by the locale, to the payload.

<a id="return-value"></a>

## Return Value

An NDEF payload record.

## See Also

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayloadWithString:](wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [initWithFormat:type:identifier:payload:](init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [initWithFormat:type:identifier:payload:chunkSize:](init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayloadWithString:locale:](wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.
