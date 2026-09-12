> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nspositionalspecifier](https://developer.apple.com/documentation/foundation/nspositionalspecifier)

# NSPositionalSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for an insertion point in a container relative to another object in the container.

## Declaration

```swift
class NSPositionalSpecifier
```

<a id="overview"></a>

## Overview

Instances of `NSPositionalSpecifier` specify an insertion point in a container relative to another object in the container, for example, `before first word` or `after paragraph 4`. The container is specified by an instance of `NSScriptObjectSpecifier`. `NSPositionalSpecifier` objects commonly encapsulate object specifiers used as arguments to the `make` (`create`) and `move` commands and indicate where the created or moved object is to be inserted relative to the object represented by an object specifier.

Invoking an accessor method to obtain information about an instance of `NSPositionalSpecifier`  causes the object to be evaluated if it hasn’t been already.

You don’t normally subclass `NSPositionalSpecifier`.

## Topics

### Initializing a positional specifier

- [init(position:objectSpecifier:)](nspositionalspecifier/init%28position_objectspecifier_%29.md): Initializes a positional specifier with a given position relative to another given specifier.

### Accessing information about a positional specifier

- [insertionContainer](nspositionalspecifier/insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](nspositionalspecifier/insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](nspositionalspecifier/insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](nspositionalspecifier/insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](nspositionalspecifier/objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](nspositionalspecifier/position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription(\_:)](nspositionalspecifier/setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.

### Evaluating a positional specifier

- [evaluate()](nspositionalspecifier/evaluate%28%29.md): Causes the receiver to evaluate its position.

### Constants

- [NSPositionalSpecifier.InsertionPosition](nspositionalspecifier/insertionposition.md): The following constants are defined by `NSPositionalSpecifier` to specify an insertion position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.

# NSPositionalSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for an insertion point in a container relative to another object in the container.

## Declaration

```objectivec
@interface NSPositionalSpecifier : NSObject
```

<a id="overview"></a>

## Overview

Instances of `NSPositionalSpecifier` specify an insertion point in a container relative to another object in the container, for example, `before first word` or `after paragraph 4`. The container is specified by an instance of `NSScriptObjectSpecifier`. `NSPositionalSpecifier` objects commonly encapsulate object specifiers used as arguments to the `make` (`create`) and `move` commands and indicate where the created or moved object is to be inserted relative to the object represented by an object specifier.

Invoking an accessor method to obtain information about an instance of `NSPositionalSpecifier`  causes the object to be evaluated if it hasn’t been already.

You don’t normally subclass `NSPositionalSpecifier`.

## Topics

### Initializing a positional specifier

- [initWithPosition:objectSpecifier:](nspositionalspecifier/init%28position_objectspecifier_%29.md): Initializes a positional specifier with a given position relative to another given specifier.

### Accessing information about a positional specifier

- [insertionContainer](nspositionalspecifier/insertioncontainer.md): Returns the container in which the new or copied object or objects should be placed.
- [insertionIndex](nspositionalspecifier/insertionindex.md): Returns an insertion index that indicates where the new or copied object or objects should be placed.
- [insertionKey](nspositionalspecifier/insertionkey.md): Returns the key that identifies the relationship into which the new or copied object or objects should be inserted.
- [insertionReplaces](nspositionalspecifier/insertionreplaces.md): Returns a Boolean value that indicates whether evaluation has been successful and the object to be inserted should actually replace the keyed, indexed object in the insertion container.
- [objectSpecifier](nspositionalspecifier/objectspecifier.md): Returns the object specifier specified at initialization time.
- [position](nspositionalspecifier/position.md): Returns the insertion position specified at initialization time.
- [setInsertionClassDescription:](nspositionalspecifier/setinsertionclassdescription%28__%29.md): Sets the class description for the object or objects to be inserted.

### Evaluating a positional specifier

- [evaluate](nspositionalspecifier/evaluate%28%29.md): Causes the receiver to evaluate its position.

### Constants

- [NSInsertionPosition](nspositionalspecifier/insertionposition.md): The following constants are defined by `NSPositionalSpecifier` to specify an insertion position.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.
