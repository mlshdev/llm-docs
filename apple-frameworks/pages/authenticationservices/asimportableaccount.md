> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableaccount](https://developer.apple.com/documentation/authenticationservices/asimportableaccount)

# ASImportableAccount

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An account for use in importing and exporting credentials.

## Declaration

```swift
struct ASImportableAccount
```

<a id="overview"></a>

## Overview

This type is a representation of `Account` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `Account` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md). When using a [JSONDecoder](../foundation/jsondecoder.md), set the [dateDecodingStrategy](../foundation/jsondecoder/datedecodingstrategy-swift.property.md) property of the decoder to [JSONDecoder.DateDecodingStrategy.secondsSince1970](../foundation/jsondecoder/datedecodingstrategy-swift.enum/secondssince1970.md).

The account represents the user of the password manager app itself. You can export multiple accounts together by including them in an [ASExportedCredentialData](asexportedcredentialdata.md) instance.

## Topics

### Creating an account

- [init(id:userName:email:fullName:collections:items:)](asimportableaccount/init%28id_username_email_fullname_collections_items_%29.md): Creates an account instance from its required and optional properties.

### Accessing account properties

- [id](asimportableaccount/id.md): A unique identifier for the account.
- [userName](asimportableaccount/username.md): The username associated with the account.
- [email](asimportableaccount/email.md): The email address associated with this account.
- [fullName](asimportableaccount/fullname.md): The full name of the account owner, if provided.
- [collections](asimportableaccount/collections.md): The collections stored in this account.
- [ASImportableCollection](asimportablecollection.md): A collection of items and subcollections for use in import and export.
- [items](asimportableaccount/items.md): All items stored in the account.
- [ASImportableItem](asimportableitem.md): An item for use in import and export.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing accounts

- [accounts](asexportedcredentialdata/accounts.md): An array of importable accounts.
