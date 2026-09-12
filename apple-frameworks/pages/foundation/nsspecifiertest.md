> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspecifiertest](https://developer.apple.com/documentation/foundation/nsspecifiertest)

# NSSpecifierTest (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A comparison between an object specifier and a test object.

## Declaration

```swift
class NSSpecifierTest
```

<a id="overview"></a>

## Overview

Instances of this class represent a Boolean expression; they evaluate an object specifier and compare the resulting object to another object using a given comparison method. For more information on `NSSpecifierTest`, see the method description for its sole public method, its initializer, [init(objectSpecifier:comparisonOperator:test:)](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md).

When an `NSSpecifierTest` object is properly initialized, it holds two objects:

- A “value” or “test” object used as the basis of the comparison; this object can be a regular object or object specifier (such as “blue” in “words whose color is blue”).
- An object specifier evaluating to the container (“words”).

The instance also encapsulates a selector identifying the method performing this comparison. The informal protocol [NSComparisonMethods](nscomparisonmethods.md) defines a set of comparison methods useful for this purpose, while [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md) describes additional methods you may need to use for scripting.

The test object is compared, using the selector, against each object in the container. Specifiers in these tests usually have [containerIsObjectBeingTested](nsscriptobjectspecifier/containerisobjectbeingtested.md) invoked on their topmost container.

You should rarely need to subclass `NSSpecifierTest`.

## Topics

### Initializing a specifier test

- [init(objectSpecifier:comparisonOperator:test:)](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md): Returns a specifier test initialized to evaluate a test object against an object specified by an object specifier using a given comparison operation.

### Constants

- [NSSpecifierTest.TestComparisonOperation](nsspecifiertest/testcomparisonoperation.md): These are passed to [init(objectSpecifier:comparisonOperator:test:)](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md) to specify the comparison operator.

### Initializers

- [init(coder:)](nsspecifiertest/init%28coder_%29.md)
- [init(objectSpecifier:comparisonOperator:testObject:)](nsspecifiertest/init%28objectspecifier_comparisonoperator_testobject_%29.md)

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
- [NSLogicalTest](nslogicaltest.md): The logical combination of one or more specifier tests.

# NSSpecifierTest (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A comparison between an object specifier and a test object.

## Declaration

```objectivec
@interface NSSpecifierTest : NSScriptWhoseTest
```

<a id="overview"></a>

## Overview

Instances of this class represent a Boolean expression; they evaluate an object specifier and compare the resulting object to another object using a given comparison method. For more information on `NSSpecifierTest`, see the method description for its sole public method, its initializer, [initWithObjectSpecifier:comparisonOperator:testObject:](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md).

When an `NSSpecifierTest` object is properly initialized, it holds two objects:

- A “value” or “test” object used as the basis of the comparison; this object can be a regular object or object specifier (such as “blue” in “words whose color is blue”).
- An object specifier evaluating to the container (“words”).

The instance also encapsulates a selector identifying the method performing this comparison. The informal protocol [NSComparisonMethods](nscomparisonmethods.md) defines a set of comparison methods useful for this purpose, while [NSScriptingComparisonMethods](../objectivec/nsscriptingcomparisonmethods.md) describes additional methods you may need to use for scripting.

The test object is compared, using the selector, against each object in the container. Specifiers in these tests usually have [containerIsObjectBeingTested](nsscriptobjectspecifier/containerisobjectbeingtested.md) invoked on their topmost container.

You should rarely need to subclass `NSSpecifierTest`.

## Topics

### Initializing a specifier test

- [initWithObjectSpecifier:comparisonOperator:testObject:](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md): Returns a specifier test initialized to evaluate a test object against an object specified by an object specifier using a given comparison operation.

### Constants

- [NSTestComparisonOperation](nsspecifiertest/testcomparisonoperation.md): These are passed to [initWithObjectSpecifier:comparisonOperator:testObject:](nsspecifiertest/init%28objectspecifier_comparisonoperator_test_%29.md) to specify the comparison operator.

### Instance Methods

- [initWithCoder:](nsspecifiertest/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSScriptWhoseTest](nsscriptwhosetest.md)

## See Also

### Object Matching Tests

- [NSScriptWhoseTest](nsscriptwhosetest.md): An abstract class that provides the basis for testing specifiers one at a time or in groups.
- [NSLogicalTest](nslogicaltest.md): The logical combination of one or more specifier tests.
