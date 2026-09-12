> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitem](https://developer.apple.com/documentation/contactprovider/contactitem)

# ContactItem

**Framework:** ContactProvider  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+

An item in the contact database.

## Declaration

```swift
enum ContactItem
```

<a id="overview"></a>

## Overview

Your app creates instances of this type in your implementations of [ContactItemEnumerator](contactitemenumerator.md), delivering arrays of contact items to [ContactItemContentObserver](contactitemcontentobserver.md) and [ContactItemChangeObserver](contactitemchangeobserver.md) instances.

## Topics

### Handling item type

- [ContactItem.contact(\_:\_:)](contactitem/contact%28____%29.md): An item that represents a person or organization.

### Identifying the item

- [ContactItem.Identifier](contactitem/identifier.md): The app’s identifier for an item in the contact database.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Providing contacts

- [ContactItemEnumerating](contactitemenumerating.md): A protocol to provide enumerators for collections of contact items.
- [ContactItemEnumerator](contactitemenumerator.md): A protocol to provide enumerations of all contact items and changed contact items.
