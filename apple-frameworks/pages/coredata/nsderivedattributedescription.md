> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsderivedattributedescription](https://developer.apple.com/documentation/coredata/nsderivedattributedescription)

# NSDerivedAttributeDescription (Swift)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of an attribute that derives its value by performing a calculation on a related attribute.

## Declaration

```swift
class NSDerivedAttributeDescription
```

<a id="overview"></a>

## Overview

Use derived attributes to optimize fetch performance; for example:

- Create a derived `searchName` attribute to reflect a `name` attribute with case and diacritics removed for more efficient comparison.
- Create a derived `relationshipCount` attribute to reflect the number of objects in a relationship and avoid having to do a join.

Derived attributes support the following expressions:

| **Expression** | **Description** | **Example** |
| --- | --- | --- |
| to-one keypath | A single value to replicate. | `name` or `author.name` |
| to-one keypath with a function | The result of calling a function on a single value. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) Supported functions include `canonical:`, `uppercase:`, and `lowercase:`. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) The `canonical:` function returns a case- and diacritic-insensitive String value. | `canonical:(name)` |
| to-many keypath with a function | The result of calling an aggregate function on a set of values. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) Supported functions include `@count` and `@sum`. | `friends.@count` |
| time | The current time. | `now()` |

> **Important**

>  Data recomputes derived attributes when you save a context. A managed object’s property does not reflect unsaved changes until you save the context and refresh the object.

## Topics

### Specifying the Derivation Expression

- [derivationExpression](nsderivedattributedescription/derivationexpression.md): An expression for generating derived data.

## Relationships

### Inherits From

- [NSAttributeDescription](nsattributedescription.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Computed attributes

- [NSCompositeAttributeDescription](nscompositeattributedescription.md): A description of an attribute that derives its value by composing other attributes.

# NSDerivedAttributeDescription (Objective-C)

**Framework:** Core Data  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A description of an attribute that derives its value by performing a calculation on a related attribute.

## Declaration

```objectivec
@interface NSDerivedAttributeDescription : NSAttributeDescription
```

<a id="overview"></a>

## Overview

Use derived attributes to optimize fetch performance; for example:

- Create a derived `searchName` attribute to reflect a `name` attribute with case and diacritics removed for more efficient comparison.
- Create a derived `relationshipCount` attribute to reflect the number of objects in a relationship and avoid having to do a join.

Derived attributes support the following expressions:

| **Expression** | **Description** | **Example** |
| --- | --- | --- |
| to-one keypath | A single value to replicate. | `name` or `author.name` |
| to-one keypath with a function | The result of calling a function on a single value. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) Supported functions include `canonical:`, `uppercase:`, and `lowercase:`. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) The `canonical:` function returns a case- and diacritic-insensitive String value. | `canonical:(name)` |
| to-many keypath with a function | The result of calling an aggregate function on a set of values. ![](https://developer.apple.com/images/com.apple.coredata/spacer.png) Supported functions include `@count` and `@sum`. | `friends.@count` |
| time | The current time. | `now()` |

> **Important**

>  Data recomputes derived attributes when you save a context. A managed object’s property does not reflect unsaved changes until you save the context and refresh the object.

## Topics

### Specifying the Derivation Expression

- [derivationExpression](nsderivedattributedescription/derivationexpression.md): An expression for generating derived data.

## Relationships

### Inherits From

- [NSAttributeDescription](nsattributedescription.md)

## See Also

### Computed attributes

- [NSCompositeAttributeDescription](nscompositeattributedescription.md): A description of an attribute that derives its value by composing other attributes.
