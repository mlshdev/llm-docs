> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nswhosespecifier](https://developer.apple.com/documentation/foundation/nswhosespecifier)

# NSWhoseSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier that indicates every object in a collection matching a condition.

## Declaration

```swift
class NSWhoseSpecifier
```

<a id="overview"></a>

## Overview

`NSWhoseSpecifier` specifies every object in a collection (or every element in a container) that matches the condition defined by a single Boolean expression or multiple Boolean expressions connected by logical operators. `NSWhoseSpecifier` is unique among object specifiers in that its top-level container is typically not the application object but an evaluated object specifier involved in the tested-for condition. An `NSWhoseSpecifier` object encapsulates a “test” object for defining this condition. A test object is instantiated from a subclass of the abstract [NSScriptWhoseTest](nsscriptwhosetest.md) class, whose one declared method is [isTrue()](nsscriptwhosetest/istrue%28%29.md). See “Boolean Expressions and Logical Operations” in [NSScriptObjectSpecifier](nsscriptobjectspecifier.md) and the descriptions in NSComparisonMethods and NSScriptingComparisonMethods for more information.

The set of elements specified by an `NSWhoseSpecifier` object can be a subset of those that pass the `NSWhoseSpecifier` object’s test. This subset is specified by the various sub-element properties of the `NSWhoseSpecifier` object . Consider as an example the specifier `paragraphs where color of third word is blue`. This would be represented by an `NSWhoseSpecifier` object  that uses a test specifier and another object specifier to identify a subset of the objects with the specified property. That is, the specifier’s property is `paragraphs`; the test specifier is an index specifier with property `words` and `index 3`; and the qualifier is a key value qualifier for key `color` and value `[NSColor blueColor]`. The test object specifier (`word at index 3`) is evaluated for each object (paragraph) using that object as the container; the resulting objects (if any) are tested with the qualifier (`color blue`).

`NSWhoseSpecifier` is part of Cocoa’s built-in script handling. You don’t normally subclass it.

## Topics

### Initializing a whose specifier

- [init(containerClassDescription:containerSpecifier:key:test:)](nswhosespecifier/init%28containerclassdescription_containerspecifier_key_test_%29.md): Returns an `NSWhoseSpecifier` object initialized with the given attributes.

### Accessing information about a whose specifier

- [endSubelementIdentifier](nswhosespecifier/endsubelementidentifier.md): Sets the end sub-element identifier for the specifier to the value of a given sub-element.
- [endSubelementIndex](nswhosespecifier/endsubelementindex.md): Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.
- [startSubelementIdentifier](nswhosespecifier/startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](nswhosespecifier/startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](nswhosespecifier/test.md): Returns the test object encapsulated by the receiver.

### Constants

- [NSWhoseSpecifier.SubelementIdentifier](nswhosespecifier/subelementidentifier.md): `NSWhoseSpecifier` uses these constants to specify sub-elements within the collection of objects being tested that pass the specifier’s test.

### Initializers

- [init(coder:)](nswhosespecifier/init%28coder_%29.md)

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
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.

# NSWhoseSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier that indicates every object in a collection matching a condition.

## Declaration

```objectivec
@interface NSWhoseSpecifier : NSScriptObjectSpecifier
```

<a id="overview"></a>

## Overview

`NSWhoseSpecifier` specifies every object in a collection (or every element in a container) that matches the condition defined by a single Boolean expression or multiple Boolean expressions connected by logical operators. `NSWhoseSpecifier` is unique among object specifiers in that its top-level container is typically not the application object but an evaluated object specifier involved in the tested-for condition. An `NSWhoseSpecifier` object encapsulates a “test” object for defining this condition. A test object is instantiated from a subclass of the abstract [NSScriptWhoseTest](nsscriptwhosetest.md) class, whose one declared method is [isTrue](nsscriptwhosetest/istrue%28%29.md). See “Boolean Expressions and Logical Operations” in [NSScriptObjectSpecifier](nsscriptobjectspecifier.md) and the descriptions in NSComparisonMethods and NSScriptingComparisonMethods for more information.

The set of elements specified by an `NSWhoseSpecifier` object can be a subset of those that pass the `NSWhoseSpecifier` object’s test. This subset is specified by the various sub-element properties of the `NSWhoseSpecifier` object . Consider as an example the specifier `paragraphs where color of third word is blue`. This would be represented by an `NSWhoseSpecifier` object  that uses a test specifier and another object specifier to identify a subset of the objects with the specified property. That is, the specifier’s property is `paragraphs`; the test specifier is an index specifier with property `words` and `index 3`; and the qualifier is a key value qualifier for key `color` and value `[NSColor blueColor]`. The test object specifier (`word at index 3`) is evaluated for each object (paragraph) using that object as the container; the resulting objects (if any) are tested with the qualifier (`color blue`).

`NSWhoseSpecifier` is part of Cocoa’s built-in script handling. You don’t normally subclass it.

## Topics

### Initializing a whose specifier

- [initWithContainerClassDescription:containerSpecifier:key:test:](nswhosespecifier/init%28containerclassdescription_containerspecifier_key_test_%29.md): Returns an `NSWhoseSpecifier` object initialized with the given attributes.

### Accessing information about a whose specifier

- [endSubelementIdentifier](nswhosespecifier/endsubelementidentifier.md): Sets the end sub-element identifier for the specifier to the value of a given sub-element.
- [endSubelementIndex](nswhosespecifier/endsubelementindex.md): Sets the index position of the last sub-element within the range of objects being tested that pass the specifier’s test.
- [startSubelementIdentifier](nswhosespecifier/startsubelementidentifier.md): Returns the start sub-element identifier for the receiver.
- [startSubelementIndex](nswhosespecifier/startsubelementindex.md): Returns the index position of the first sub-element within the range of objects being tested that pass the receiver’s test.
- [test](nswhosespecifier/test.md): Returns the test object encapsulated by the receiver.

### Constants

- [NSWhoseSubelementIdentifier](nswhosespecifier/subelementidentifier.md): `NSWhoseSpecifier` uses these constants to specify sub-elements within the collection of objects being tested that pass the specifier’s test.

### Instance Methods

- [initWithCoder:](nswhosespecifier/init%28coder_%29.md)

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
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.
