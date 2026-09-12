> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactitemenumerating](https://developer.apple.com/documentation/contactprovider/contactitemenumerating)

# ContactItemEnumerating

**Framework:** ContactProvider  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A protocol to provide enumerators for collections of contact items.

## Declaration

```swift
protocol ContactItemEnumerating
```

<a id="overview"></a>

## Overview

You typically implement this protocol in your app extension, since [ContactProviderExtension](contactproviderextension.md) inherits this protocol.

## Topics

### Providing an enumeration

- [enumerator(for:)](contactitemenumerating/enumerator%28for_%29.md): Provide an enumerator for the contact items collection.
- [ContactItem.Identifier](contactitem/identifier.md): The app’s identifier for an item in the contact database.
- [ContactItemEnumerator](contactitemenumerator.md): A protocol to provide enumerations of all contact items and changed contact items.

## Relationships

### Inherited By

- [ContactProviderExtension](contactproviderextension.md)

## See Also

### Providing contacts

- [ContactItem](contactitem.md): An item in the contact database.
- [ContactItemEnumerator](contactitemenumerator.md): A protocol to provide enumerations of all contact items and changed contact items.
