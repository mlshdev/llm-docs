> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmiddlespecifier](https://developer.apple.com/documentation/foundation/nsmiddlespecifier)

# NSMiddleSpecifier (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.

## Declaration

```swift
class NSMiddleSpecifier
```

<a id="overview"></a>

## Overview

You don’t typically subclass `NSMiddleSpecifier`.

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

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSPositionalSpecifier](nspositionalspecifier.md): A specifier for an insertion point in a container relative to another object in the container.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.

# NSMiddleSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A specifier indicating the middle object in a collection or, if not a one-to-many relationship, the sole object.

## Declaration

```objectivec
@interface NSMiddleSpecifier : NSScriptObjectSpecifier
```

<a id="overview"></a>

## Overview

You don’t typically subclass `NSMiddleSpecifier`.

## Relationships

### Inherits From

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md)

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

### Object Specifiers

- [NSScriptObjectSpecifier](nsscriptobjectspecifier.md): An abstract class used to represent natural language expressions.
- [NSPropertySpecifier](nspropertyspecifier.md): A specifier for a simple attribute value, a one-to-one relationship, or all elements of a to-many relationship.
- [NSPositionalSpecifier](nspositionalspecifier.md): A specifier for an insertion point in a container relative to another object in the container.
- [NSRandomSpecifier](nsrandomspecifier.md): A specifier for an arbitrary object in a collection or, if not a one-to-many relationship, the sole object.
- [NSRangeSpecifier](nsrangespecifier.md): A specifier for a range of objects in a container.
- [NSUniqueIDSpecifier](nsuniqueidspecifier.md): A specifier for an object in a collection (or container) by unique ID.
- [NSWhoseSpecifier](nswhosespecifier.md): A specifier that indicates every object in a collection matching a condition.
- [NSNameSpecifier](nsnamespecifier.md): A specifier for an object in a collection (or container) by name.
- [NSIndexSpecifier](nsindexspecifier.md): A specifier representing an object in a collection (or container) with an index number.
- [NSRelativeSpecifier](nsrelativespecifier.md): A specifier that indicates an object in a collection by its position relative to another object.
