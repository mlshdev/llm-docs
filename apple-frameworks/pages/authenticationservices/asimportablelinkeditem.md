> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablelinkeditem](https://developer.apple.com/documentation/authenticationservices/asimportablelinkeditem)

# ASImportableLinkedItem

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A linked item for use in import and export.

## Declaration

```swift
struct ASImportableLinkedItem
```

<a id="overview"></a>

## Overview

A linked item serves as a reference to an item, and contains no data of its own.

This type is a representation of `LinkedItem` as defined in the Credential Exchange Format (CXF) specification. You can supply a JSON representation of a CXF `Item` to initialize an instance of this struct by using a [JSONDecoder](../foundation/jsondecoder.md) and calling [decode(\_:from:)](../foundation/jsondecoder/decode%28__from_%29.md).

## Topics

### Creating a linked item

- [init(item:account:)](asimportablelinkeditem/init%28item_account_%29.md): Creates a linked item from the identifiers of an item and an account.

### Accessing linked item properties

- [item](asimportablelinkeditem/item.md): The unique identifier of the item linked by this linked item.
- [account](asimportablelinkeditem/account.md): The unique identifier of the account, if any, to which the linked item belongs.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Accessing collection properties

- [id](asimportablecollection/id.md): A unique identifier for the collection.
- [title](asimportablecollection/title.md): The title of the collection.
- [subtitle](asimportablecollection/subtitle.md): The subtitle of the collection, if any.
- [items](asimportablecollection/items.md): The items that are part of the collection.
- [subcollections](asimportablecollection/subcollections.md): Subcollections that are part of the collection.
