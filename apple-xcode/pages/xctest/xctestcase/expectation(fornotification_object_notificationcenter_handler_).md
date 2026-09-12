> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/expectation(fornotification:object:notificationcenter:handler:)](https://developer.apple.com/documentation/xctest/xctestcase/expectation(fornotification:object:notificationcenter:handler:))

# expectation(forNotification:object:notificationCenter:handler:) (Swift)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.

## Declaration

```swift
func expectation(forNotification notificationName: NSNotification.Name, object objectToObserve: Any?, notificationCenter: NotificationCenter, handler: XCTNSNotificationExpectation.Handler? = nil) -> XCTestExpectation
```

## Parameters

- `notificationName`: The notification to register for.
- `objectToObserve`: The object to observe.
- `notificationCenter`: The notification center sending the notification.
- `handler`: An optional [XCTNSNotificationExpectation.Handler](../xctnsnotificationexpectation/handler-swift.typealias.md) block. If no handler is provided, the first notification matching the specified name from the observed object fulfills the expectation.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(description:)](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(for:evaluatedWith:handler:)](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [expectation(that:on:options:willEqual:)](expectation%28that_on_options_willequal_%29.md): Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.

# expectationForNotification:object:notificationCenter:handler: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.

## Declaration

```objectivec
- (XCTestExpectation *) expectationForNotification:(NSNotificationName) notificationName object:(id) objectToObserve notificationCenter:(NSNotificationCenter *) notificationCenter handler:(XCNotificationExpectationHandler) handler;
```

## Parameters

- `notificationName`: The notification to register for.
- `objectToObserve`: The object to observe.
- `notificationCenter`: The notification center sending the notification.
- `handler`: An optional [XCNotificationExpectationHandler](../xctnsnotificationexpectation/handler-swift.typealias.md) block. If no handler is provided, the first notification matching the specified name from the observed object fulfills the expectation.

## See Also

### Creating Asynchronous Test Expectations

- [expectationWithDescription:](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectationForPredicate:evaluatedWithObject:handler:](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectationForNotification:object:handler:](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [keyValueObservingExpectationForObject:keyPath:expectedValue:](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [keyValueObservingExpectationForObject:keyPath:handler:](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
