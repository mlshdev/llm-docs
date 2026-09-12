> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:predicate:)](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:predicate:))

# init(keyPath:observedObject:options:predicate:)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

Creates an expectation that the system fulfills when the value of the observed property changes and satisfies the conditions of a predicate’s evaluation.

> T and V must be Sendable when used with an asynchronous filtering function.

## Declaration

```swift
convenience init(keyPath: KeyPath<T, V>, observedObject: T, options: NSKeyValueObservingOptions = [.initial, .new, .old], predicate: XCTKeyPathExpectation<T, V>.Predicate? = nil)
```

## Parameters

- `keyPath`: The key path for the observed property, relative to the observed object.
- `observedObject`: The object to observe the key path on.
- `options`: A combination of values that specify what to include in observation notifications. For possible values, see [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions).
- `predicate`: A closure that evaluates the value of the observed property. If `nil`, the first observed change fulfills the expectation.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an expectation that observes changes on the observed object until the predicate returns [true](https://developer.apple.com/documentation/swift/true), fulfilling the expectation.

## See Also

### Creating key path expectations

- [init(keyPath:observedObject:options:expectedValue:)](init%28keypath_observedobject_options_expectedvalue_%29.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. Creates an expectation that the system fulfills when the value of the observed property changes to an expected value.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-plka.md): Conforms when `T` inherits `NSObject`.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-8noag.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.AsynchronousFilter](asynchronousfilter.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.SynchronousFilter](synchronousfilter.md): Conforms when `T` inherits `NSObject`.
- [XCTKeyPathExpectation.Predicate](predicate.md): Deprecated. A function the key path expectation uses to test the value of an observed property.
