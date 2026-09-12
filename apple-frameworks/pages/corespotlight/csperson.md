> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/csperson](https://developer.apple.com/documentation/corespotlight/csperson)

# CSPerson (Swift)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that represents a person in the context of search results.

## Declaration

```swift
class CSPerson
```

<a id="overview"></a>

## Overview

A `CSPerson` object represents a person in the context of search results. You can create a `CSPerson` object when you have a display name and a contact handle of some kind, such as an email address or phone number.

If you create a `CSPerson` object to represent a specific contact, you can use the value of the contact’s identifier property for the person object’s [contactIdentifier](csperson/contactidentifier.md) property. Using the same value lets you avoid using names or phone numbers to look up the contact that’s associated with a person.

## Topics

### Initializing a person object

- [init(displayName:handles:handleIdentifier:)](csperson/init%28displayname_handles_handleidentifier_%29.md): Returns a new `CSPerson` object initialized with the specified display name and contact attributes.
- [init(coder:)](csperson/init%28coder_%29.md)

### Accessing person properties

- [contactIdentifier](csperson/contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](csperson/displayname.md): A display name for the person.
- [handleIdentifier](csperson/handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.
- [handles](csperson/handles.md): An array of contact handles related to the person.

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
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.

# CSPerson (Objective-C)

**Framework:** Core Spotlight  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · visionOS 1.0+

An object that represents a person in the context of search results.

## Declaration

```objectivec
@interface CSPerson : NSObject
```

<a id="overview"></a>

## Overview

A `CSPerson` object represents a person in the context of search results. You can create a `CSPerson` object when you have a display name and a contact handle of some kind, such as an email address or phone number.

If you create a `CSPerson` object to represent a specific contact, you can use the value of the contact’s identifier property for the person object’s [contactIdentifier](csperson/contactidentifier.md) property. Using the same value lets you avoid using names or phone numbers to look up the contact that’s associated with a person.

## Topics

### Initializing a person object

- [initWithDisplayName:handles:handleIdentifier:](csperson/init%28displayname_handles_handleidentifier_%29.md): Returns a new `CSPerson` object initialized with the specified display name and contact attributes.

### Accessing person properties

- [contactIdentifier](csperson/contactidentifier.md): The identifier for the contact associated with the person.
- [displayName](csperson/displayname.md): A display name for the person.
- [handleIdentifier](csperson/handleidentifier.md): A key that identifies the type of contact property represented by the person object’s handle.
- [handles](csperson/handles.md): An array of contact handles related to the person.

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
- [CSCustomAttributeKey](cscustomattributekey.md): A key associated with a custom attribute for a searchable item.
- [CSLocalizedString](cslocalizedstring.md): An object that displays localized text in search results related to your app.
