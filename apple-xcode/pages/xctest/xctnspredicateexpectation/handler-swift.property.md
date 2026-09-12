> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnspredicateexpectation/handler-swift.property](https://developer.apple.com/documentation/xctest/xctnspredicateexpectation/handler-swift.property)

# handler (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation when `predicate` evaluates as `true`.

## Declaration

```swift
var handler: XCTNSPredicateExpectation.Handler? { get set }
```

<a id="Discussion"></a>

## Discussion

If a handler isn’t provided, the first successful evaluation of the predicate fulfills the expectation. If you provide a handler, the handler can override this default behavior to tailor the conditions that fulfill the expectation.

## See Also

### Handling Predicate Resolution

- [XCTNSPredicateExpectation.Handler](handler-swift.typealias.md): A handler XCTest calls when evaluating the predicate returns `true`.

# handler (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation when `predicate` evaluates as `true`.

## Declaration

```objectivec
@property (copy, nullable) XCPredicateExpectationHandler handler;
```

<a id="Discussion"></a>

## Discussion

If a handler isn’t provided, the first successful evaluation of the predicate fulfills the expectation. If you provide a handler, the handler can override this default behavior to tailor the conditions that fulfill the expectation.

## See Also

### Handling Predicate Resolution

- [XCPredicateExpectationHandler](handler-swift.typealias.md): A handler XCTest calls when evaluating the predicate returns `true`.
