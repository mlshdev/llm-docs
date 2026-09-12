> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnspredicateexpectation/handler-swift.typealias](https://developer.apple.com/documentation/xctest/xctnspredicateexpectation/handler-swift.typealias)

# XCTNSPredicateExpectation.Handler (Swift)

**Framework:** XCTest  
**Kind:** Type Alias

A handler XCTest calls when evaluating the predicate returns `true`.

## Declaration

```swift
typealias Handler = @Sendable () -> Bool
```

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling Predicate Resolution

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation when `predicate` evaluates as `true`.

# XCPredicateExpectationHandler (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

A handler XCTest calls when evaluating the predicate returns `true`.

## Declaration

```objectivec
typedef _Bool (^)(void) XCPredicateExpectationHandler;
```

<a id="return-value"></a>

## Return Value

Your custom handler should return [true](https://developer.apple.com/documentation/swift/true) if the expectation is considered fulfilled, otherwise [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Handling Predicate Resolution

- [handler](handler-swift.property.md): An optional handler that performs custom evaluation when `predicate` evaluates as `true`.
