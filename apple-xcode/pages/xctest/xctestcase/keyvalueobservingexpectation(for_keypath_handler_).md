> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/keyvalueobservingexpectation(for:keypath:handler:)](https://developer.apple.com/documentation/xctest/xctestcase/keyvalueobservingexpectation(for:keypath:handler:))

# keyValueObservingExpectation(for:keyPath:handler:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.

> Replaced by 'expectation(that:on:options:willSatisfy:)'

## Declaration

```swift
func keyValueObservingExpectation(for objectToObserve: Any, keyPath: String, handler: XCTKVOExpectation.Handler? = nil) -> XCTestExpectation
```

## Parameters

- `objectToObserve`: The object to observe.
- `keyPath`: The key path to observe.
- `handler`: An optional [XCTKVOExpectation.Handler](../xctkvoexpectation/handler-swift.typealias.md) block. If you don’t provide a handler block, the first change to the key path of the observed object fulfills the expectation.

<a id="Discussion"></a>

## Discussion

Creates an [XCTestExpectation](../xctestexpectation.md) that uses Key Value Observing to observe changes on the value specified by `keyPath` on the provided object.

When the tests detects changes to the value, it calls the `handler` block to assess the new value to see if the change fulfills the expectation. Every key-value observing change runs the handler block until it either returns [true](https://developer.apple.com/documentation/swift/true) (to fulfill the expectation), or the wait times out.

You can use [XCTAssert](../xctassert.md) and related APIs in the block to report a failure.

> **Note**

>  For more control over KVO-based expectations, use [XCTKVOExpectation](../xctkvoexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(description:)](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(for:evaluatedWith:handler:)](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [expectation(that:on:options:willEqual:)](expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

# keyValueObservingExpectationForObject:keyPath:handler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.

## Declaration

```objectivec
- (XCTestExpectation *) keyValueObservingExpectationForObject:(id) objectToObserve keyPath:(NSString *) keyPath handler:(XCKeyValueObservingExpectationHandler) handler;
```

## Parameters

- `objectToObserve`: The object to observe.
- `keyPath`: The key path to observe.
- `handler`: An optional [XCKeyValueObservingExpectationHandler](../xctkvoexpectation/handler-swift.typealias.md) block. If you don’t provide a handler block, the first change to the key path of the observed object fulfills the expectation.

<a id="Discussion"></a>

## Discussion

Creates an [XCTestExpectation](../xctestexpectation.md) that uses Key Value Observing to observe changes on the value specified by `keyPath` on the provided object.

When the tests detects changes to the value, it calls the `handler` block to assess the new value to see if the change fulfills the expectation. Every key-value observing change runs the handler block until it either returns [true](https://developer.apple.com/documentation/swift/true) (to fulfill the expectation), or the wait times out.

You can use [XCTAssert](../xctassert.md) and related APIs in the block to report a failure.

> **Note**

>  For more control over KVO-based expectations, use [XCTKVOExpectation](../xctkvoexpectation.md) instead of this convenience method.

## See Also

### Creating Asynchronous Test Expectations

- [expectationWithDescription:](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectationForPredicate:evaluatedWithObject:handler:](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectationForNotification:object:handler:](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectationForNotification:object:notificationCenter:handler:](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
