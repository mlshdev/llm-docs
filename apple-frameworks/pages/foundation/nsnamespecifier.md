> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsnamespecifier](https://developer.apple.com/documentation/foundation/nsnamespecifier)

# NSNameSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for an object in a collection (or container) by name.

## Declaration

```swift
class NSNameSpecifier
```

<a id="overview"></a>

## Overview

As an example, the following script specifies both an application and a window by name. In this script, the named window’s implicitly specified container is the Finder application’s list of open windows.

```objc
tell application "Finder" -- specifies an application  by name
    close window "Reports" -- specifies a window by name
end tell
```

This specifier works only for objects that have a name property. You don’t normally subclass `NSNameSpecifier`.

The evaluation of an instance of `NSNameSpecifier` follows these steps until the specified object is found:

1. If the container implements a method whose selector matches the relevant `valueIn<Key>WithName:` pattern established by scripting key-value coding, the method is invoked. This method can potentially be very fast, and it may be relatively easy to implement.
2. As is the case when evaluating any script object specifier, the container of the specified object is given a chance to evaluate the object specifier. If the container class implements the `indicesOfObjectsByEvaluatingObjectSpecifier` method, the method is invoked. This method can potentially be very fast, but it is relatively difficult to implement.
3. An instance of  `NSWhoseSpecifier` that specifies the first object whose relevant `'pnam'` attribute matches the name is synthesized and evaluated. The instance of `NSWhoseSpecifier` must search through all of the keyed elements in the container, looking for a match. The search is potentially very slow.

## Topics

### Initializing a name specifier

- [init(containerClassDescription:containerSpecifier:key:name:)](nsnamespecifier/init%28containerclassdescription_containerspecifier_key_name_%29.md): Invokes the super class’s [init(containerClassDescription:containerSpecifier:key:)](nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and then sets the name instance variable to `name`.

### Accessing a name specifier

- [name](nsnamespecifier/name.md): Sets the name encapsulated with the receiver for the specified object in the container.

### Initializers

- [init(coder:)](nsnamespecifier/init%28coder_%29.md)

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
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.

# NSNameSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier for an object in a collection (or container) by name.

## Declaration

```objectivec
@interface NSNameSpecifier : NSScriptObjectSpecifier
```

<a id="overview"></a>

## Overview

As an example, the following script specifies both an application and a window by name. In this script, the named window’s implicitly specified container is the Finder application’s list of open windows.

```objc
tell application "Finder" -- specifies an application  by name
    close window "Reports" -- specifies a window by name
end tell
```

This specifier works only for objects that have a name property. You don’t normally subclass `NSNameSpecifier`.

The evaluation of an instance of `NSNameSpecifier` follows these steps until the specified object is found:

1. If the container implements a method whose selector matches the relevant `valueIn<Key>WithName:` pattern established by scripting key-value coding, the method is invoked. This method can potentially be very fast, and it may be relatively easy to implement.
2. As is the case when evaluating any script object specifier, the container of the specified object is given a chance to evaluate the object specifier. If the container class implements the `indicesOfObjectsByEvaluatingObjectSpecifier` method, the method is invoked. This method can potentially be very fast, but it is relatively difficult to implement.
3. An instance of  `NSWhoseSpecifier` that specifies the first object whose relevant `'pnam'` attribute matches the name is synthesized and evaluated. The instance of `NSWhoseSpecifier` must search through all of the keyed elements in the container, looking for a match. The search is potentially very slow.

## Topics

### Initializing a name specifier

- [initWithContainerClassDescription:containerSpecifier:key:name:](nsnamespecifier/init%28containerclassdescription_containerspecifier_key_name_%29.md): Invokes the super class’s [initWithContainerClassDescription:containerSpecifier:key:](nsscriptobjectspecifier/init%28containerclassdescription_containerspecifier_key_%29.md) method and then sets the name instance variable to `name`.

### Accessing a name specifier

- [name](nsnamespecifier/name.md): Sets the name encapsulated with the receiver for the specified object in the container.

### Instance Methods

- [initWithCoder:](nsnamespecifier/init%28coder_%29.md)

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
- [NSMiddleSpecifier](nsmiddlespecifier.md): A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.
