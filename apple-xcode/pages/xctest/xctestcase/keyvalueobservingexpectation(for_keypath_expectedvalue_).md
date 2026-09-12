> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/keyvalueobservingexpectation(for:keypath:expectedvalue:)](https://developer.apple.com/documentation/xctest/xctestcase/keyvalueobservingexpectation(for:keypath:expectedvalue:))

# keyValueObservingExpectation(for:keyPath:expectedValue:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.

> Replaced by 'expectation(that:on:options:willEqual:)'

## Declaration

```swift
func keyValueObservingExpectation(for objectToObserve: Any, keyPath: String, expectedValue: Any?) -> XCTestExpectation
```

## Parameters

- `objectToObserve`: The object to observe.
- `keyPath`: The key path to observe.
- `expectedValue`: Expected value of the value specified by `keyPath`. The expectation will fulfill itself when the value at `keyPath` is equal to `expectedValue`, as tested using `isEqual:`. If `expectedValue` is `nil`, the expectation will be fulfilled by the first change to the key path of the observed object.

<a id="return-value"></a>

## Return Value

Creates and returns an expectation associated with the test case.

<a id="Discussion"></a>

## Discussion

Creates an [XCTestExpectation](../xctestexpectation.md) that uses Key Value Observing to observe changes on the provided object until the value specified by `keyPath` matches the expected value using `isEqual:`.

> **Note**

>  For more control over KVO-based expectations, use [XCTKVOExpectation](../xctkvoexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(description:)](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(for:evaluatedWith:handler:)](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [expectation(that:on:options:willEqual:)](expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

# keyValueObservingExpectationForObject:keyPath:expectedValue: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.

## Declaration

```objectivec
- (XCTestExpectation *) keyValueObservingExpectationForObject:(id) objectToObserve keyPath:(NSString *) keyPath expectedValue:(id) expectedValue;
```

## Parameters

- `objectToObserve`: The object to observe.
- `keyPath`: The key path to observe.
- `expectedValue`: Expected value of the value specified by `keyPath`. The expectation will fulfill itself when the value at `keyPath` is equal to `expectedValue`, as tested using `isEqual:`. If `expectedValue` is `nil`, the expectation will be fulfilled by the first change to the key path of the observed object.

<a id="return-value"></a>

## Return Value

Creates and returns an expectation associated with the test case.

<a id="Discussion"></a>

## Discussion

Creates an [XCTestExpectation](../xctestexpectation.md) that uses Key Value Observing to observe changes on the provided object until the value specified by `keyPath` matches the expected value using `isEqual:`.

> **Note**

>  For more control over KVO-based expectations, use [XCTKVOExpectation](../xctkvoexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectationWithDescription:](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectationForPredicate:evaluatedWithObject:handler:](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectationForNotification:object:handler:](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectationForNotification:object:notificationCenter:handler:](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectationForObject:keyPath:handler:](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
