> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/cscustomattributekey](https://developer.apple.com/documentation/corespotlight/cscustomattributekey)

# CSCustomAttributeKey (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A key associated with a custom attribute for a searchable item.

## Declaration

```swift
class CSCustomAttributeKey
```

<a id="overview"></a>

## Overview

The `CSCustomAttributeKey` class defines a key that you can associate with a custom attribute for a searchable item. Item attributes provide metadata about the item that can be indexed and displayed to users in search results.

Although the Core Spotlight framework provides several predefined attributes, such as title and description, you can create a `CSCustomAttributeKey` object to specify a custom attribute that makes sense in your domain.

## Topics

### Creating a custom attribute

- [init(keyName:)](cscustomattributekey/init%28keyname_%29.md): Returns a new custom attribute key with the specified name.
- [init(keyName:searchable:searchableByDefault:unique:multiValued:)](cscustomattributekey/init%28keyname_searchable_searchablebydefault_unique_multivalued_%29.md): Returns a new custom attribute key with the specified name and properties.
- [init(coder:)](cscustomattributekey/init%28coder_%29.md)

### Getting the attribute details

- [keyName](cscustomattributekey/keyname.md): The name of the custom attribute key.
- [isMultiValued](cscustomattributekey/ismultivalued.md): A Boolean value that indicates if the custom attribute is likely to have multiple values, such as arrays, associated with it.
- [isSearchable](cscustomattributekey/issearchable.md): A Boolean value that indicates if the custom attribute can be specified as a search term.
- [isSearchableByDefault](cscustomattributekey/issearchablebydefault.md): A Boolean value that indicates if the custom attribute should be searchable by default.
- [isUnique](cscustomattributekey/isunique.md): A Boolean value that indicates if duplicate custom attribute values should be treated as the same value to save storage space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.

# CSCustomAttributeKey (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

A key associated with a custom attribute for a searchable item.

## Declaration

```objectivec
@interface CSCustomAttributeKey : NSObject
```

<a id="overview"></a>

## Overview

The `CSCustomAttributeKey` class defines a key that you can associate with a custom attribute for a searchable item. Item attributes provide metadata about the item that can be indexed and displayed to users in search results.

Although the Core Spotlight framework provides several predefined attributes, such as title and description, you can create a `CSCustomAttributeKey` object to specify a custom attribute that makes sense in your domain.

## Topics

### Creating a custom attribute

- [initWithKeyName:](cscustomattributekey/init%28keyname_%29.md): Returns a new custom attribute key with the specified name.
- [initWithKeyName:searchable:searchableByDefault:unique:multiValued:](cscustomattributekey/init%28keyname_searchable_searchablebydefault_unique_multivalued_%29.md): Returns a new custom attribute key with the specified name and properties.

### Getting the attribute details

- [keyName](cscustomattributekey/keyname.md): The name of the custom attribute key.
- [multiValued](cscustomattributekey/ismultivalued.md): A Boolean value that indicates if the custom attribute is likely to have multiple values, such as arrays, associated with it.
- [searchable](cscustomattributekey/issearchable.md): A Boolean value that indicates if the custom attribute can be specified as a search term.
- [searchableByDefault](cscustomattributekey/issearchablebydefault.md): A Boolean value that indicates if the custom attribute should be searchable by default.
- [unique](cscustomattributekey/isunique.md): A Boolean value that indicates if duplicate custom attribute values should be treated as the same value to save storage space.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Searchable items

- [CSSearchableItem](cssearchableitem.md): The details of your app-specific content that someone might search for on their devices.
- [CSSearchableItemAttributeSet](cssearchableitemattributeset.md): The detailed metadata for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
- [CSPerson](csperson.md): An object that represents a person in the context of search results.
