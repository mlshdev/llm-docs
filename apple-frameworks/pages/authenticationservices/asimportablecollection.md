> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecollection](https://developer.apple.com/documentation/authenticationservices/asimportablecollection)

# ASImportableCollection

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A collection of items and subcollections for use in import and export.

## Declaration

```swift
struct ASImportableCollection
```

<a id="overview"></a>

## Overview

A collection represents a group of items such as a vault or folder.

This type is a representation of `Collection` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `Collection` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md).

## Topics

### Accessing collection properties

- [id](asimportablecollection/id.md): A unique identifier for the collection.
- [title](asimportablecollection/title.md): The title of the collection.
- [subtitle](asimportablecollection/subtitle.md): The subtitle of the collection, if any.
- [items](asimportablecollection/items.md): The items that are part of the collection.
- [ASImportableLinkedItem](asimportablelinkeditem.md): A linked item for use in import and export.
- [subcollections](asimportablecollection/subcollections.md): Subcollections that are part of the collection.

### Initializers

- [init(id:created:lastModified:title:subtitle:items:subcollections:)](asimportablecollection/init%28id_created_lastmodified_title_subtitle_items_subcollections_%29.md)

### Instance Properties

- [created](asimportablecollection/created.md): The date and time when the collection was created.
- [lastModified](asimportablecollection/lastmodified.md): The date and time when the collection was last modified.

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
- [items](asimportableaccount/items.md): All items stored in the account.
- [ASImportableItem](asimportableitem.md): An item for use in import and export.
