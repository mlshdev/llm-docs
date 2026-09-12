> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/corenfc/nfcndefpayload](https://developer.apple.com/documentation/corenfc/nfcndefpayload)

# NFCNDEFPayload (Swift)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A payload record in an NFC NDEF message.

## Declaration

```swift
class NFCNDEFPayload
```

## Mentioned In

- [Adding Support for Background Tag Reading](adding-support-for-background-tag-reading.md)

<a id="overview"></a>

## Overview

An NDEF message payload consists of the Type Name Format field (as defined by the NDEF specification), type, identifier, and data.

## Topics

### Creating a Payload Record

- [wellKnownTypeURIPayload(url:)](nfcndefpayload/wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayload(string:)](nfcndefpayload/wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayload(string:locale:)](nfcndefpayload/wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [init(format:type:identifier:payload:)](nfcndefpayload/init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [init(format:type:identifier:payload:chunkSize:)](nfcndefpayload/init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayload(string:locale:)](nfcndefpayload/wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

### Getting Information About a Payload Record

- [identifier](nfcndefpayload/identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](nfcndefpayload/payload.md): The payload, as defined by the NDEF specification.
- [type](nfcndefpayload/type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](nfcndefpayload/typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

### Getting the URI from a Payload Record

- [wellKnownTypeURIPayload()](nfcndefpayload/wellknowntypeuripayload%28%29.md): Returns the URL of a valid Well Known Type URI payload.

### Getting Text from a Payload Record

- [wellKnownTypeTextPayload()](nfcndefpayload/wellknowntypetextpayload%28%29.md): Returns the text and locale of a valid Well Known Type Text payload.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### NDEF messages and payloads

- [NFCNDEFMessage](nfcndefmessage.md): An NFC NDEF message consisting of an array of payload records.

# NFCNDEFPayload (Objective-C)

**Framework:** Core NFC  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+

A payload record in an NFC NDEF message.

## Declaration

```objectivec
@interface NFCNDEFPayload : NSObject
```

## Mentioned In

- [Adding Support for Background Tag Reading](adding-support-for-background-tag-reading.md)

<a id="overview"></a>

## Overview

An NDEF message payload consists of the Type Name Format field (as defined by the NDEF specification), type, identifier, and data.

## Topics

### Creating a Payload Record

- [wellKnownTypeURIPayloadWithURL:](nfcndefpayload/wellknowntypeuripayload%28url_%29.md): Creates a payload record with a URI specified as a URL.
- [wellKnownTypeURIPayloadWithString:](nfcndefpayload/wellknowntypeuripayload%28string_%29.md): Creates a payload record with a URI specified as a string.
- [wellKnownTypeTextPayloadWithString:locale:](nfcndefpayload/wellknowntypetextpayload%28string_locale_%29.md): Creates a payload record with text.
- [initWithFormat:type:identifier:payload:](nfcndefpayload/init%28format_type_identifier_payload_%29.md): Creates a payload record with the specified format, type, identifier, and payload data.
- [initWithFormat:type:identifier:payload:chunkSize:](nfcndefpayload/init%28format_type_identifier_payload_chunksize_%29.md): Creates a payload record with the specified format, type, identifier, payload data, and data chunk size.
- [wellKnowTypeTextPayloadWithString:locale:](nfcndefpayload/wellknowtypetextpayload%28string_locale_%29.md): Deprecated. Creates a payload record with text.

### Getting Information About a Payload Record

- [identifier](nfcndefpayload/identifier.md): The identifier of the payload, as defined by the NDEF specification.
- [payload](nfcndefpayload/payload.md): The payload, as defined by the NDEF specification.
- [type](nfcndefpayload/type.md): The type of the payload, as defined by the NDEF specification.
- [typeNameFormat](nfcndefpayload/typenameformat.md): The Type Name Format field of the payload, as defined by the NDEF specification.
- [NFCTypeNameFormat](nfctypenameformat.md): The Type Name Format values that specify the content type for the payload data in an NFC NDEF message.

### Getting the URI from a Payload Record

- [wellKnownTypeURIPayload](nfcndefpayload/wellknowntypeuripayload%28%29.md): Returns the URL of a valid Well Known Type URI payload.

### Getting Text from a Payload Record

- [wellKnownTypeTextPayloadWithLocale:](nfcndefpayload/wellknowntypetextpayloadwithlocale_.md): Returns the text of a valid Well Known Type Text payload.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### NDEF messages and payloads

- [NFCNDEFMessage](nfcndefmessage.md): An NFC NDEF message consisting of an array of payload records.
