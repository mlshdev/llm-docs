> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/expectation(description:)](https://developer.apple.com/documentation/xctest/xctestcase/expectation(description:))

# expectation(description:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a new expectation with an associated description.

## Declaration

```swift
func expectation(description: String) -> XCTestExpectation
```

## Parameters

- `description`: A string to display in the test log for this expectation, to help diagnose failures.

<a id="Discussion"></a>

## Discussion

Use this method to create [XCTestExpectation](../xctestexpectation.md) instances that can be fulfilled when asynchronous tasks in your tests complete.

To fulfill an expectation that was created with [expectation(description:)](expectation%28description_%29.md), call the expectation’s [fulfill()](../xctestexpectation/fulfill%28%29.md) method when the asynchronous task in your test has completed.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(for:evaluatedWith:handler:)](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [expectation(that:on:options:willEqual:)](expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

# expectationWithDescription: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates a new expectation with an associated description.

## Declaration

```objectivec
- (XCTestExpectation *) expectationWithDescription:(NSString *) description;
```

## Parameters

- `description`: A string to display in the test log for this expectation, to help diagnose failures.

<a id="Discussion"></a>

## Discussion

Use this method to create [XCTestExpectation](../xctestexpectation.md) instances that can be fulfilled when asynchronous tasks in your tests complete.

To fulfill an expectation that was created with [expectationWithDescription:](expectation%28description_%29.md), call the expectation’s [fulfill](../xctestexpectation/fulfill%28%29.md) method when the asynchronous task in your test has completed.

## See Also

### Creating Asynchronous Test Expectations

- [expectationForPredicate:evaluatedWithObject:handler:](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectationForNotification:object:handler:](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectationForNotification:object:notificationCenter:handler:](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [keyValueObservingExpectationForObject:keyPath:handler:](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
