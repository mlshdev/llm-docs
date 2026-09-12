> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/expectation(for:evaluatedwith:handler:)](https://developer.apple.com/documentation/xctest/xctestcase/expectation(for:evaluatedwith:handler:))

# expectation(for:evaluatedWith:handler:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that the test fulfills by evaluating the predicate with the specified object.

## Declaration

```swift
func expectation(for predicate: NSPredicate, evaluatedWith object: Any?, handler: XCTNSPredicateExpectation.Handler? = nil) -> XCTestExpectation
```

## Parameters

- `predicate`: The predicate to evaluate.
- `object`: The object XCTest evaluates the predicate against.
- `handler`: An optional handler that performs custom evaluation when `predicate` evaluates as [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

The expectation periodically evaluates the predicate and also may use notifications or other events to optimistically re-evaluate. The test fulfills the expectation when the predicate evaluates to [true](https://developer.apple.com/documentation/swift/true).

When you use the resulting expectation from Swift and await using [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29.md) rather than [wait(for:)](wait%28for_%29.md), XCTest evaluates `predicate` on the main actor.

If a handler isn’t provided, the first successful evaluation of the predicate fulfills the expectation. If you provide a handler, the handler can override this default behavior to tailor the conditions that fulfill the expectation.

> **Note**

>  For more control over predicate-based expectations, use [XCTNSPredicateExpectation](../xctnspredicateexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(description:)](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [expectation(that:on:options:willEqual:)](expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

# expectationForPredicate:evaluatedWithObject:handler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that the test fulfills by evaluating the predicate with the specified object.

## Declaration

```objectivec
- (XCTestExpectation *) expectationForPredicate:(NSPredicate *) predicate evaluatedWithObject:(id) object handler:(XCPredicateExpectationHandler) handler;
```

## Parameters

- `predicate`: The predicate to evaluate.
- `object`: The object XCTest evaluates the predicate against.
- `handler`: An optional handler that performs custom evaluation when `predicate` evaluates as [true](https://developer.apple.com/documentation/swift/true).

<a id="Discussion"></a>

## Discussion

The expectation periodically evaluates the predicate and also may use notifications or other events to optimistically re-evaluate. The test fulfills the expectation when the predicate evaluates to [true](https://developer.apple.com/documentation/swift/true).

When you use the resulting expectation from Swift and await using [fulfillment(of:timeout:enforceOrder:)](fulfillment%28of_timeout_enforceorder_%29.md) rather than [waitForExpectations:](wait%28for_%29.md), XCTest evaluates `predicate` on the main actor.

If a handler isn’t provided, the first successful evaluation of the predicate fulfills the expectation. If you provide a handler, the handler can override this default behavior to tailor the conditions that fulfill the expectation.

> **Note**

>  For more control over predicate-based expectations, use [XCTNSPredicateExpectation](../xctnspredicateexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectationWithDescription:](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectationForNotification:object:handler:](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectationForNotification:object:notificationCenter:handler:](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [keyValueObservingExpectationForObject:keyPath:handler:](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
