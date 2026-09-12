> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctestcase/expectation(that:on:options:willequal:)](https://developer.apple.com/documentation/xctest/xctestcase/expectation(that:on:options:willequal:))

# expectation(that:on:options:willEqual:)

**Framework:** XCTest  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

Creates an expectation using key-value observing the test fulfills when the value of an observed property changes to an expected value.

## Declaration

```swift
func expectation<T, V>(that keyPath: KeyPath<T, V>, on observedObject: T, options: NSKeyValueObservingOptions = [.initial, .new, .old], willEqual expectedValue: V) -> XCTKeyPathExpectation<T, V> where T : NSObject, V : Equatable
```

## Parameters

- `keyPath`: The key path for the observed property, relative to the observed object.
- `observedObject`: The object to observe the key path on.
- `options`: A combination of values that specify what to include in observation notifications. For possible values, see [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions).
- `expectedValue`: A value the property must equal to fulfill the expectation.

<a id="return-value"></a>

## Return Value

Creates and returns an expectation for the test case.

## See Also

### Creating Asynchronous Test Expectations

- [expectation(description:)](expectation%28description_%29.md): Creates a new expectation with an associated description.
- [expectation(for:evaluatedWith:handler:)](expectation%28for_evaluatedwith_handler_%29.md): Creates an expectation that the test fulfills by evaluating the predicate with the specified object.
- [expectation(forNotification:object:handler:)](expectation%28fornotification_object_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification for a specified object.
- [expectation(forNotification:object:notificationCenter:handler:)](expectation%28fornotification_object_notificationcenter_handler_%29.md): Creates an expectation that the test fulfills when it receives a specific notification from a specific notification center for a specified object.
- [keyValueObservingExpectation(for:keyPath:expectedValue:)](keyvalueobservingexpectation%28for_keypath_expectedvalue_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value until it matches an expected value.
- [keyValueObservingExpectation(for:keyPath:handler:)](keyvalueobservingexpectation%28for_keypath_handler_%29.md): Deprecated. Creates an expectation that uses Key-Value Observing to observe a value and respond to changes in that value by calling a provided handler.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-6itb.md): Deprecated. Creates an expectation using key-value observing the test fulfills when the value of an observed property changes and satisfies the conditions of a predicate’s evaluation.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-292oj.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
- [expectation(that:on:options:willSatisfy:)](expectation%28that_on_options_willsatisfy_%29-85or0.md): Creates an expectation using key-value observing to monitor changes to a given key path on a given object.
