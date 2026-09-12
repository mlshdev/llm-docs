> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestexpectation/assertforoverfulfill](https://developer.apple.com/documentation/xctest/xctestexpectation/assertforoverfulfill)

# assertForOverFulfill (Swift)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.

## Declaration

```swift
var assertForOverFulfill: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), a call to [fulfill()](fulfill%28%29.md) made after the expectation has already been fulfilled (exceeding [expectedFulfillmentCount](expectedfulfillmentcount.md)) will trigger an assertion. When [false](https://developer.apple.com/documentation/swift/false), a call to [fulfill()](fulfill%28%29.md) after the expectation has already been fulfilled will have no effect.

The [assertForOverFulfill](assertforoverfulfill.md) property is set to [false](https://developer.apple.com/documentation/swift/false) by default for expectations created directly from initializers on [XCTestExpectation](../xctestexpectation.md) and its subclasses.

The [assertForOverFulfill](assertforoverfulfill.md) property is set to [true](https://developer.apple.com/documentation/swift/true) by default for expectations created with the following [XCTestCase](../xctestcase.md) convenience methods:

- [expectation(description:)](../xctestcase/expectation%28description_%29.md)
- [expectation(for:evaluatedWith:handler:)](../xctestcase/expectation%28for_evaluatedwith_handler_%29.md)
- [expectation(forNotification:object:handler:)](../xctestcase/expectation%28fornotification_object_handler_%29.md)
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](../xctestcase/keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md)
- [keyValueObservingExpectation(for:keyPath:handler:)](../xctestcase/keyvalueobservingexpectation%28for_keypath_handler_%29.md)

## See Also

### Fulfillment Count

- [expectedFulfillmentCount](expectedfulfillmentcount.md): The number of times [fulfill()](fulfill%28%29.md) must be called before the expectation is completely fulfilled.

# assertForOverFulfill (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

Indicates that an assertion should be triggered during testing if the expectation is over-fulfilled.

## Declaration

```objectivec
@property (nonatomic) BOOL assertForOverFulfill;
```

<a id="Discussion"></a>

## Discussion

When [true](https://developer.apple.com/documentation/swift/true), a call to [fulfill](fulfill%28%29.md) made after the expectation has already been fulfilled (exceeding [expectedFulfillmentCount](expectedfulfillmentcount.md)) will trigger an assertion. When [false](https://developer.apple.com/documentation/swift/false), a call to [fulfill](fulfill%28%29.md) after the expectation has already been fulfilled will have no effect.

The [assertForOverFulfill](assertforoverfulfill.md) property is set to [false](https://developer.apple.com/documentation/swift/false) by default for expectations created directly from initializers on [XCTestExpectation](../xctestexpectation.md) and its subclasses.

The [assertForOverFulfill](assertforoverfulfill.md) property is set to [true](https://developer.apple.com/documentation/swift/true) by default for expectations created with the following [XCTestCase](../xctestcase.md) convenience methods:

- [expectationWithDescription:](../xctestcase/expectation%28description_%29.md)
- [expectationForPredicate:evaluatedWithObject:handler:](../xctestcase/expectation%28for_evaluatedwith_handler_%29.md)
- [expectationForNotification:object:handler:](../xctestcase/expectation%28fornotification_object_handler_%29.md)
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](../xctestcase/keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md)
- [keyValueObservingExpectationForObject:keyPath:handler:](../xctestcase/keyvalueobservingexpectation%28for_keypath_handler_%29.md)

## See Also

### Fulfillment Count

- [expectedFulfillmentCount](expectedfulfillmentcount.md): The number of times [fulfill](fulfill%28%29.md) must be called before the expectation is completely fulfilled.
