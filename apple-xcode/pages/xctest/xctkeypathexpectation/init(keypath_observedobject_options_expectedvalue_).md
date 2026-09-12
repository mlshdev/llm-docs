> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:expectedvalue:)](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:expectedvalue:))

# init(keyPath:observedObject:options:expectedValue:)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

Creates an expectation that the system fulfills when the value of the observed property changes to an expected value.

## Declaration

```swift
convenience init(keyPath: KeyPath<T, V>, observedObject: T, options: NSKeyValueObservingOptions = [.initial, .new, .old], expectedValue: V)
```

## Parameters

- `keyPath`: The key path for the observed property, relative to the observed object.
- `observedObject`: The object to observe the key path on.
- `options`: A combination of values that specify what to include in observation notifications. For possible values, see [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions).
- `expectedValue`: A value that the key path’s specified property must equal to fulfill the expectation.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an expectation that observes changes on the observed object until the value of the property matches the expected value, fulfilling the expectation.

## See Also

### Creating key path expectations

- [init(keyPath:observedObject:options:predicate:)](init%28keypath_observedobject_options_predicate_%29.md): Deprecated. Creates an expectation that the system fulfills when the value of the observed property changes and satisfies the conditions of a predicate’s evaluation.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-plka.md): Conforms when `T` inherits `NSObject`.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-8noag.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.AsynchronousFilter](asynchronousfilter.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.SynchronousFilter](synchronousfilter.md): Conforms when `T` inherits `NSObject`.
- [XCTKeyPathExpectation.Predicate](predicate.md): Deprecated. A function the key path expectation uses to test the value of an observed property.
