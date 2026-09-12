> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsscriptwhosetest](https://developer.apple.com/documentation/foundation/nsscriptwhosetest)

# NSScriptWhoseTest (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An abstract class that provides the basis for testing specifiers one at a time or in groups.

## Declaration

```swift
class NSScriptWhoseTest
```

<a id="overview"></a>

## Overview

`NSScriptWhoseTest` is an abstract class whose sole method is [isTrue()](nsscriptwhosetest/istrue%28%29.md). Two concrete subclasses of `NSScriptWhoseTest` generate objects representing Boolean expressions comparing one object with another and objects representing multiple Boolean expressions connected by logical operators (`OR`, `AND`, `NOT`). These classes are, respectively, [NSSpecifierTest](nsspecifiertest.md) and [NSLogicalTest](nslogicaltest.md). In evaluating itself, an [NSWhoseSpecifier](nswhosespecifier.md) invokes the [isTrue()](nsscriptwhosetest/istrue%28%29.md) method of its “test” object.

You shouldn’t need to subclass `NSScriptWhoseTest`, and you should rarely need to subclass one of its subclasses.

## Topics

### Evaluating a test

- [isTrue()](nsscriptwhosetest/istrue%28%29.md): Returns a Boolean value that indicates whether the test represented by the receiver evaluates to true.

### Initializers

- [init()](nsscriptwhosetest/init%28%29.md)
- [init(coder:)](nsscriptwhosetest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSLogicalTest](nslogicaltest.md)
- [NSSpecifierTest](nsspecifiertest.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Object Matching Tests

- [NSSpecifierTest](nsspecifiertest.md): A comparison between an object specifier and a test object.
- [NSLogicalTest](nslogicaltest.md): The logical combination of one or more specifier tests.

# NSScriptWhoseTest (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

An abstract class that provides the basis for testing specifiers one at a time or in groups.

## Declaration

```objectivec
@interface NSScriptWhoseTest : NSObject
```

<a id="overview"></a>

## Overview

`NSScriptWhoseTest` is an abstract class whose sole method is [isTrue](nsscriptwhosetest/istrue%28%29.md). Two concrete subclasses of `NSScriptWhoseTest` generate objects representing Boolean expressions comparing one object with another and objects representing multiple Boolean expressions connected by logical operators (`OR`, `AND`, `NOT`). These classes are, respectively, [NSSpecifierTest](nsspecifiertest.md) and [NSLogicalTest](nslogicaltest.md). In evaluating itself, an [NSWhoseSpecifier](nswhosespecifier.md) invokes the [isTrue](nsscriptwhosetest/istrue%28%29.md) method of its “test” object.

You shouldn’t need to subclass `NSScriptWhoseTest`, and you should rarely need to subclass one of its subclasses.

## Topics

### Evaluating a test

- [isTrue](nsscriptwhosetest/istrue%28%29.md): Returns a Boolean value that indicates whether the test represented by the receiver evaluates to true.

### Instance Methods

- [init](nsscriptwhosetest/init%28%29.md)
- [initWithCoder:](nsscriptwhosetest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [NSLogicalTest](nslogicaltest.md)
- [NSSpecifierTest](nsspecifiertest.md)

### Conforms To

- [NSCoding](nscoding.md)

## See Also

### Object Matching Tests

- [NSSpecifierTest](nsspecifiertest.md): A comparison between an object specifier and a test object.
- [NSLogicalTest](nslogicaltest.md): The logical combination of one or more specifier tests.
