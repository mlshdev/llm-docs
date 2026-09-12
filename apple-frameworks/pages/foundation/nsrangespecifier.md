> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrangespecifier](https://developer.apple.com/documentation/foundation/nsrangespecifier)

# NSRangeSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for a range of objects in a container.

## Declaration

```swift
class NSRangeSpecifier
```

<a id="overview"></a>

## Overview

An `NSRangeSpecifier` object specifies a range (that is, an uninterrupted series) of objects in a container through two delimiting objects. The range is represented by two object specifiers, a start specifier and an end specifier, which can be of any specifier type (such as [NSIndexSpecifier](nsindexspecifier.md) or [NSWhoseSpecifier](nswhosespecifier.md) object). These specifiers are evaluated in the context of the same container object as the range specifier itself.

You don’t normally subclass `NSRangeSpecifier`.

## Topics

### Initializing a range specifier

- [init(containerClassDescription:containerSpecifier:key:start:end:)](nsrangespecifier/init%28containerclassdescription_containerspecifier_key_start_end_%29.md): Returns a range specifier initialized with the given properties.

### Accessing a range specifier

- [endSpecifier](nsrangespecifier/endspecifier.md): Sets the object specifier representing the last object of the range to a given object.
- [startSpecifier](nsrangespecifier/startspecifier.md): Returns the object specifier representing the first object of the range.

### Initializers

- [init(coder:)](nsrangespecifier/init%28coder_%29.md)
- [init(containerClassDescription:containerSpecifier:key:startSpecifier:endSpecifier:)](nsrangespecifier/init%28containerclassdescription_containerspecifier_key_startspecifier_endspecifier_%29.md)

## Relationships

### Inherits From

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSPositionalSpecifier](nspositionalspecifier.md): A specifier for an insertion point in a container relative to another object in the container.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.

# NSRangeSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for a range of objects in a container.

## Declaration

```objectivec
@interface NSRangeSpecifier : NSScriptObjectSpecifier
```

<a id="overview"></a>

## Overview

An `NSRangeSpecifier` object specifies a range (that is, an uninterrupted series) of objects in a container through two delimiting objects. The range is represented by two object specifiers, a start specifier and an end specifier, which can be of any specifier type (such as [NSIndexSpecifier](nsindexspecifier.md) or [NSWhoseSpecifier](nswhosespecifier.md) object). These specifiers are evaluated in the context of the same container object as the range specifier itself.

You don’t normally subclass `NSRangeSpecifier`.

## Topics

### Initializing a range specifier

- [initWithContainerClassDescription:containerSpecifier:key:startSpecifier:endSpecifier:](nsrangespecifier/init%28containerclassdescription_containerspecifier_key_start_end_%29.md): Returns a range specifier initialized with the given properties.

### Accessing a range specifier

- [endSpecifier](nsrangespecifier/endspecifier.md): Sets the object specifier representing the last object of the range to a given object.
- [startSpecifier](nsrangespecifier/startspecifier.md): Returns the object specifier representing the first object of the range.

### Instance Methods

- [initWithCoder:](nsrangespecifier/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md)

## See Also

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSPositionalSpecifier](nspositionalspecifier.md): A specifier for an insertion point in a container relative to another object in the container.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.
