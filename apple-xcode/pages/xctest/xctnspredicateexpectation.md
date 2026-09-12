> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnspredicateexpectation](https://developer.apple.com/documentation/xctest/xctnspredicateexpectation)

# XCTNSPredicateExpectation (Swift)

**Framework:** XCTest  
**Kind:** Class

An expectation that’s fulfilled when an `NSPredicate` is satisfied.

## Declaration

```swift
class XCTNSPredicateExpectation
```

<a id="overview"></a>

## Overview

When you use an instance of this class from Swift and await using [fulfillment(of:timeout:enforceOrder:)](xctestcase/fulfillment%28of_timeout_enforceorder_%29.md) rather than [wait(for:)](xctestcase/wait%28for_%29.md), XCTest evaluates the associated predicate on the main actor.

## Topics

### Creating a Predicate-Based Expectation

- [init(predicate:object:)](xctnspredicateexpectation/init%28predicate_object_%29.md): Creates an expectation that’s fulfilled when an `NSPredicate` instance returns `true`, optionally for a provided object.

### Expectation Properties

- [predicate](xctnspredicateexpectation/predicate.md): The predicate the expectation evaluates.
- [object](xctnspredicateexpectation/object.md): An optional object against which the predicate evaluates.

### Handling Predicate Resolution

- [handler](xctnspredicateexpectation/handler-swift.property.md): An optional handler that performs custom evaluation when `predicate` evaluates as `true`.
- [XCTNSPredicateExpectation.Handler](xctnspredicateexpectation/handler-swift.typealias.md): A handler XCTest calls when evaluating the predicate returns `true`.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# XCTNSPredicateExpectation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An expectation that’s fulfilled when an `NSPredicate` is satisfied.

## Declaration

```objectivec
@interface XCTNSPredicateExpectation : XCTestExpectation
```

<a id="overview"></a>

## Overview

When you use an instance of this class from Swift and await using [fulfillment(of:timeout:enforceOrder:)](xctestcase/fulfillment%28of_timeout_enforceorder_%29.md) rather than [waitForExpectations:](xctestcase/wait%28for_%29.md), XCTest evaluates the associated predicate on the main actor.

## Topics

### Creating a Predicate-Based Expectation

- [initWithPredicate:object:](xctnspredicateexpectation/init%28predicate_object_%29.md): Creates an expectation that’s fulfilled when an `NSPredicate` instance returns `true`, optionally for a provided object.

### Expectation Properties

- [predicate](xctnspredicateexpectation/predicate.md): The predicate the expectation evaluates.
- [object](xctnspredicateexpectation/object.md): An optional object against which the predicate evaluates.

### Handling Predicate Resolution

- [handler](xctnspredicateexpectation/handler-swift.property.md): An optional handler that performs custom evaluation when `predicate` evaluates as `true`.
- [XCPredicateExpectationHandler](xctnspredicateexpectation/handler-swift.typealias.md): A handler XCTest calls when evaluating the predicate returns `true`.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)
