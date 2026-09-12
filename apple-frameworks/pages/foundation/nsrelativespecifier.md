> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsrelativespecifier](https://developer.apple.com/documentation/foundation/nsrelativespecifier)

# NSRelativeSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier that indicates an object in a collection by its position relative to another object.

## Declaration

```swift
class NSRelativeSpecifier
```

<a id="overview"></a>

## Overview

You don’t normally subclass `NSRelativeSpecifier`.

## Topics

### Initializing a relative specifier

- [init(containerClassDescription:containerSpecifier:key:relativePosition:baseSpecifier:)](nsrelativespecifier/init%28containerclassdescription_containerspecifier_key_relativeposition_basespecifier_%29.md): Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the relative position and base specifier to `relPos` and `baseSpecifier`.

### Accessing a relative specifier

- [baseSpecifier](nsrelativespecifier/basespecifier.md): Sets the specifier for the base object.
- [relativePosition](nsrelativespecifier/relativeposition-swift.property.md): Sets the relative position encapsulated by the receiver.

### Constants

- [NSRelativeSpecifier.RelativePosition](nsrelativespecifier/relativeposition-swift.enum.md): These constants are used by [relativePosition](nsrelativespecifier/relativeposition-swift.property.md) and [relativePosition](nsrelativespecifier/relativeposition-swift.property.md).

### Initializers

- [init(coder:)](nsrelativespecifier/init%28coder_%29.md)

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
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.

# NSRelativeSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier that indicates an object in a collection by its position relative to another object.

## Declaration

```objectivec
@interface NSRelativeSpecifier : NSScriptObjectSpecifier
```

<a id="overview"></a>

## Overview

You don’t normally subclass `NSRelativeSpecifier`.

## Topics

### Initializing a relative specifier

- [initWithContainerClassDescription:containerSpecifier:key:relativePosition:baseSpecifier:](nsrelativespecifier/init%28containerclassdescription_containerspecifier_key_relativeposition_basespecifier_%29.md): Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and initializes the relative position and base specifier to `relPos` and `baseSpecifier`.

### Accessing a relative specifier

- [baseSpecifier](nsrelativespecifier/basespecifier.md): Sets the specifier for the base object.
- [relativePosition](nsrelativespecifier/relativeposition-swift.property.md): Sets the relative position encapsulated by the receiver.

### Constants

- [NSRelativePosition](nsrelativespecifier/relativeposition-swift.enum.md): These constants are used by [relativePosition](nsrelativespecifier/relativeposition-swift.property.md) and [relativePosition](nsrelativespecifier/relativeposition-swift.property.md).

### Instance Methods

- [initWithCoder:](nsrelativespecifier/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md)

## See Also

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSPositionalSpecifier](nspositionalspecifier.md): A specifier for an insertion point in a container relative to another object in the container.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
