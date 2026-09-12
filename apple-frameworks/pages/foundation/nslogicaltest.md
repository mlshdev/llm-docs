> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nslogicaltest](https://developer.apple.com/documentation/foundation/nslogicaltest)

# NSLogicalTest (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The logical combination of one or more specifier tests.

## Declaration

```swift
class NSLogicalTest
```

<a id="overview"></a>

## Overview

Instances of this class perform logical operations of `AND`, `OR`, and `NOT` on Boolean expressions represented by [NSSpecifierTest](nsspecifiertest.md) objects. These operators are equivalent to “`&&`”, “`||`”, and “`!`” in the C language.

For `AND` and `OR` operations, an `NSLogicalTest` object is typically initialized with an array containing two or more [NSSpecifierTest](nsspecifiertest.md) objects. [isTrue()](nsscriptwhosetest/istrue%28%29.md)—inherited from [NSScriptWhoseTest](nsscriptwhosetest.md)—evaluates the array in a manner appropriate to the logical operation. For `NOT` operations, an `NSLogicalTest` object is initialized with only one `NSSpecifierTest` object; it simply reverses the Boolean outcome of the [isTrue()](nsscriptwhosetest/istrue%28%29.md) method.

You don’t normally subclass `NSLogicalTest`.

## Topics

### Initializing a logical test

- [init(andTestWith:)](nslogicaltest/init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [init(notTestWith:)](nslogicaltest/init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.
- [init(orTestWith:)](nslogicaltest/init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

### Initializers

- [init(andTestWithTests:)](nslogicaltest/init%28andtestwithtests_%29.md)
- [init(notTestWithTest:)](nslogicaltest/init%28nottestwithtest_%29.md)
- [init(orTestWithTests:)](nslogicaltest/init%28ortestwithtests_%29.md)

## Relationships

### Inherits From

- [NSScriptWhoseTest](nsscriptwhosetest.md)

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

### Object Matching Tests

- [NSScriptWhoseTest](nsscriptwhosetest.md): An abstract class that provides the basis for testing specifiers one at a time or in groups.
- [NSSpecifierTest](nsspecifiertest.md): A comparison between an object specifier and a test object.

# NSLogicalTest (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The logical combination of one or more specifier tests.

## Declaration

```objectivec
@interface NSLogicalTest : NSScriptWhoseTest
```

<a id="overview"></a>

## Overview

Instances of this class perform logical operations of `AND`, `OR`, and `NOT` on Boolean expressions represented by [NSSpecifierTest](nsspecifiertest.md) objects. These operators are equivalent to “`&&`”, “`||`”, and “`!`” in the C language.

For `AND` and `OR` operations, an `NSLogicalTest` object is typically initialized with an array containing two or more [NSSpecifierTest](nsspecifiertest.md) objects. [isTrue](nsscriptwhosetest/istrue%28%29.md)—inherited from [NSScriptWhoseTest](nsscriptwhosetest.md)—evaluates the array in a manner appropriate to the logical operation. For `NOT` operations, an `NSLogicalTest` object is initialized with only one `NSSpecifierTest` object; it simply reverses the Boolean outcome of the [isTrue](nsscriptwhosetest/istrue%28%29.md) method.

You don’t normally subclass `NSLogicalTest`.

## Topics

### Initializing a logical test

- [initAndTestWithTests:](nslogicaltest/init%28andtestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `AND` operation with the `NSSpecifierTest` objects in a given array.
- [initNotTestWithTest:](nslogicaltest/init%28nottestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform a `NOT` operation on the given `NSScriptWhoseTest` object.
- [initOrTestWithTests:](nslogicaltest/init%28ortestwith_%29.md): Returns an `NSLogicalTest` object initialized to perform an `OR` operation with the `NSSpecifierTest` objects in a given array.

## Relationships

### Inherits From

- [NSScriptWhoseTest](nsscriptwhosetest.md)

## See Also

### Object Matching Tests

- [NSScriptWhoseTest](nsscriptwhosetest.md): An abstract class that provides the basis for testing specifiers one at a time or in groups.
- [NSSpecifierTest](nsspecifiertest.md): A comparison between an object specifier and a test object.
