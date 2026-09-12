> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/customfields](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/customfields)

# ASImportableCredential.CustomFields

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of CustomFields as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)

## Declaration

```swift
struct CustomFields
```

## Topics

### Initializers

- [init(id:label:fields:)](customfields/init%28id_label_fields_%29.md)

### Instance Properties

- [fields](customfields/fields.md): The collection of fields in this section.
- [id](customfields/id.md): Optional: Unique identifier for this section of custom fields.
- [label](customfields/label.md): Optional: A descriptive title for this section of custom fields.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
