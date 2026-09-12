> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableeditablefield](https://developer.apple.com/documentation/authenticationservices/asimportableeditablefield)

# ASImportableEditableField

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A field that someone can edit within a credential.

## Declaration

```swift
struct ASImportableEditableField
```

<a id="overview"></a>

## Overview

Examples of editable fields include `ASImportableCredential/BasicAuthentication/username` and [password](asimportablecredential/basicauthentication/password.md) in [ASImportableCredential.BasicAuthentication](asimportablecredential/basicauthentication.md).

This type is a representation of `EditableField` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `EditableField` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md).

## Topics

### Creating an editable field

- [init(id:fieldType:value:label:)](asimportableeditablefield/init%28id_fieldtype_value_label_%29.md): Creates an editable field instance.

### Accessing field properties

- [id](asimportableeditablefield/id.md): A unique identifier for this editable field.
- [fieldType](asimportableeditablefield/fieldtype-swift.property.md): The type of this editable field.
- [ASImportableEditableField.FieldType](asimportableeditablefield/fieldtype-swift.enum.md): An enumeration of editable field types.
- [value](asimportableeditablefield/value.md): The value stored in this editable field.
- [label](asimportableeditablefield/label.md): A value describing the field, if any.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing authentication properties

- [password](asimportablecredential/basicauthentication/password.md): The password associated with the credential.
