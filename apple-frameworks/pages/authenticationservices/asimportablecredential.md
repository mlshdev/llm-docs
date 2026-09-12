> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential](https://developer.apple.com/documentation/authenticationservices/asimportablecredential)

# ASImportableCredential

**Framework:** Authentication Services  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A credential for use in import and export.

## Declaration

```swift
enum ASImportableCredential
```

<a id="overview"></a>

## Overview

A credential represents a piece of secure information associated with an item. `ASImportableCredential` currently supports the following kinds of credentials:

- Password (`BasicAuthentication`)
- Passkey
- Time-based one-time password (TOTP)
- Note
- Credit card

This type is a representation of `Credential` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `Credential` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md).

## Topics

### Login credential types

- [ASImportableCredential.basicAuthentication(\_:)](asimportablecredential/basicauthentication%28__%29.md): A password credential.
- [ASImportableCredential.BasicAuthentication](asimportablecredential/basicauthentication.md): A type to represent a basic authentication password.
- [ASImportableCredential.passkey(\_:)](asimportablecredential/passkey%28__%29.md): A passkey credential.
- [ASImportableCredential.Passkey](asimportablecredential/passkey.md): A type to represent a passkey credential.
- [ASImportableCredential.totp(\_:)](asimportablecredential/totp%28__%29.md): A time-based one-time password (TOTP) credential.
- [ASImportableCredential.TOTP](asimportablecredential/totp.md): A type to represent a time-based one-time password generator (TOTP).

### Document credential types

- [ASImportableCredential.note(\_:)](asimportablecredential/note%28__%29.md): A note credential.
- [ASImportableCredential.Note](asimportablecredential/note.md): A piece of text used to store some information about an item.

### Identity credential types

- [ASImportableCredential.creditCard(\_:)](asimportablecredential/creditcard%28__%29.md): A credit card credential.
- [ASImportableCredential.CreditCard](asimportablecredential/creditcard.md): A type to represent credit card information.

### Structures

- [ASImportableCredential.APIKey](asimportablecredential/apikey.md): A representation of APIKey as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)
- [ASImportableCredential.Address](asimportablecredential/address.md): A representation of Address as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a physical address.
- [ASImportableCredential.CustomFields](asimportablecredential/customfields.md): A representation of CustomFields as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)
- [ASImportableCredential.DriversLicense](asimportablecredential/driverslicense.md): A representation of DriversLicense as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)
- [ASImportableCredential.GeneratedPassword](asimportablecredential/generatedpassword.md): A representation of GeneratedPassword as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a machine-generated password.
- [ASImportableCredential.IdentityDocument](asimportablecredential/identitydocument.md): A representation of IdentityDocument as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents any kind of document that can be used for identification.
- [ASImportableCredential.ItemReference](asimportablecredential/itemreference.md): A representation of ItemReference as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This is a pointer to another Item.
- [ASImportableCredential.Passport](asimportablecredential/passport.md): A representation of Passport as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a passport document.
- [ASImportableCredential.PersonName](asimportablecredential/personname.md): A representation of PersonName as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a person’s name.
- [ASImportableCredential.SSHKey](asimportablecredential/sshkey.md): A representation of SSHKey as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)
- [ASImportableCredential.WiFi](asimportablecredential/wifi.md): A representation of Wi-Fi Passphrase as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html) This represents a credential for a WiFi network..

### Enumeration Cases

- [ASImportableCredential.address(\_:)](asimportablecredential/address%28__%29.md)
- [ASImportableCredential.apiKey(\_:)](asimportablecredential/apikey%28__%29.md)
- [ASImportableCredential.customFields(\_:)](asimportablecredential/customfields%28__%29.md)
- [ASImportableCredential.driversLicense(\_:)](asimportablecredential/driverslicense%28__%29.md)
- [ASImportableCredential.generatedPassword(\_:)](asimportablecredential/generatedpassword%28__%29.md)
- [ASImportableCredential.identityDocument(\_:)](asimportablecredential/identitydocument%28__%29.md)
- [ASImportableCredential.itemReference(\_:)](asimportablecredential/itemreference%28__%29.md)
- [ASImportableCredential.passport(\_:)](asimportablecredential/passport%28__%29.md)
- [ASImportableCredential.personName(\_:)](asimportablecredential/personname%28__%29.md)
- [ASImportableCredential.sshKey(\_:)](asimportablecredential/sshkey%28__%29.md)
- [ASImportableCredential.wifi(\_:)](asimportablecredential/wifi%28__%29.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing item properties

- [id](asimportableitem/id.md): A unique identifier for the item.
- [created](asimportableitem/created.md): The item’s creation date and time.
- [lastModified](asimportableitem/lastmodified.md): The item’s last modified date and time.
- [subtitle](asimportableitem/subtitle.md): A subtitle or description of this item, if any.
- [credentials](asimportableitem/credentials.md): The credentials associated with this item.
- [tags](asimportableitem/tags.md): The user-defined tags associated with this item, if any.
