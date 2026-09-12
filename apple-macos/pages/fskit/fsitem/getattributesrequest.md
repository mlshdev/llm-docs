> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitem/getattributesrequest](https://developer.apple.com/documentation/fskit/fsitem/getattributesrequest)

# FSItem.GetAttributesRequest (Swift)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A request to get attributes from an item.

## Declaration

```swift
class GetAttributesRequest
```

<a id="overview"></a>

## Overview

Methods that retrieve attributes use this type and inspect the [wantedAttributes](getattributesrequest/wantedattributes.md) property to determine which attributes to provide. FSKit calls the [isAttributeWanted(\_:)](getattributesrequest/isattributewanted%28__%29.md) method to determine whether the request requires a given attribute.

## Topics

### Inspecting requested attributes

- [wantedAttributes](getattributesrequest/wantedattributes.md): The attributes requested by the request.
- [isAttributeWanted(\_:)](getattributesrequest/isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.
- [FSItem.Attribute](attribute.md): A value that indicates a set of item attributes to get or set.

### Initializers

- [init(coder:)](getattributesrequest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Working with attributes

- [FSItem.Attributes](attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItem.SetAttributesRequest](setattributesrequest.md): A request to set attributes on an item.

# FSItemGetAttributesRequest (Objective-C)

**Framework:** FSKit  
**Kind:** Class  
**Availability:** macOS 15.4+

A request to get attributes from an item.

## Declaration

```objectivec
@interface FSItemGetAttributesRequest : NSObject
```

<a id="overview"></a>

## Overview

Methods that retrieve attributes use this type and inspect the [wantedAttributes](getattributesrequest/wantedattributes.md) property to determine which attributes to provide. FSKit calls the [isAttributeWanted:](getattributesrequest/isattributewanted%28__%29.md) method to determine whether the request requires a given attribute.

## Topics

### Inspecting requested attributes

- [wantedAttributes](getattributesrequest/wantedattributes.md): The attributes requested by the request.
- [isAttributeWanted:](getattributesrequest/isattributewanted%28__%29.md): A method that indicates whether the request wants given attribute.
- [FSItemAttribute](attribute.md): A value that indicates a set of item attributes to get or set.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSSecureCoding](https://developer.apple.com/documentation/foundation/nssecurecoding)

## See Also

### Working with attributes

- [FSItemAttributes](attributes.md): Attributes of an item, such as size, creation and modification times, and user and group identifiers.
- [FSItemSetAttributesRequest](setattributesrequest.md): A request to set attributes on an item.
