> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/apikey](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/apikey)

# ASImportableCredential.APIKey

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of APIKey as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)

## Declaration

```swift
struct APIKey
```

## Topics

### Initializers

- [init(key:userName:keyType:url:validFrom:expiryDate:)](apikey/init%28key_username_keytype_url_validfrom_expirydate_%29.md)

### Instance Properties

- [expiryDate](apikey/expirydate.md)
- [key](apikey/key.md)
- [keyType](apikey/keytype.md)
- [url](apikey/url.md)
- [userName](apikey/username.md): When instantiating from JSON, this property will be populated from the “username” field.
- [validFrom](apikey/validfrom.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
