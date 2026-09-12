> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportableitem](https://developer.apple.com/documentation/authenticationservices/asimportableitem)

# ASImportableItem

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An item for use in import and export.

## Declaration

```swift
struct ASImportableItem
```

<a id="overview"></a>

## Overview

An item represents an account for a service stored by the password manager. One item can store multiple credentials. For example, to represent an account with a password and a passkey, use an item with two credentials: a [ASImportableCredential.BasicAuthentication](asimportablecredential/basicauthentication.md) password and a [ASImportableCredential.Passkey](asimportablecredential/passkey.md).

This type is a representation of `Item` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `Item` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md).

## Topics

### Accessing item properties

- [id](asimportableitem/id.md): A unique identifier for the item.
- [created](asimportableitem/created.md): The item’s creation date and time.
- [lastModified](asimportableitem/lastmodified.md): The item’s last modified date and time.
- [subtitle](asimportableitem/subtitle.md): A subtitle or description of this item, if any.
- [credentials](asimportableitem/credentials.md): The credentials associated with this item.
- [ASImportableCredential](asimportablecredential.md): A credential for use in import and export.
- [tags](asimportableitem/tags.md): The user-defined tags associated with this item, if any.

### Initializers

- [init(id:created:lastModified:title:subtitle:favorite:scope:credentials:tags:)](asimportableitem/init%28id_created_lastmodified_title_subtitle_favorite_scope_credentials_tags_%29.md)
- [init(id:created:lastModified:title:subtitle:favorite:scope:credentials:tags:extensions:)](asimportableitem/init%28id_created_lastmodified_title_subtitle_favorite_scope_credentials_tags_extensions_%29.md)
- [init(id:title:subtitle:favorite:scope:credentials:tags:)](asimportableitem/init%28id_title_subtitle_favorite_scope_credentials_tags_%29.md)

### Instance Properties

- [extensions](asimportableitem/extensions.md): The extensions associated with this item.
- [favorite](asimportableitem/favorite.md): Indicate whether this is a “favorite” item.
- [scope](asimportableitem/scope.md): The scope for where the credential can be used.
- [title](asimportableitem/title.md): The user-defined name or title of this item.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing account properties

- [id](asimportableaccount/id.md): A unique identifier for the account.
- [userName](asimportableaccount/username.md): The username associated with the account.
- [email](asimportableaccount/email.md): The email address associated with this account.
- [fullName](asimportableaccount/fullname.md): The full name of the account owner, if provided.
- [collections](asimportableaccount/collections.md): The collections stored in this account.
- [ASImportableCollection](asimportablecollection.md): A collection of items and subcollections for use in import and export.
- [items](asimportableaccount/items.md): All items stored in the account.
