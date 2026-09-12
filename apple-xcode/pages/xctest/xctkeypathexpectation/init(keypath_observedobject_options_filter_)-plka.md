> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:filter:)-plka](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/init(keypath:observedobject:options:filter:)-plka)

# init(keyPath:observedObject:options:filter:)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

## Declaration

```swift
convenience init(keyPath: KeyPath<T, V>, observedObject: T, options: NSKeyValueObservingOptions = [.initial, .new, .old], filter: XCTKeyPathExpectation<T, V>.SynchronousFilter? = nil)
```

## See Also

### Creating key path expectations

- [init(keyPath:observedObject:options:expectedValue:)](init%28keypath_observedobject_options_expectedvalue_%29.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. Creates an expectation that the system fulfills when the value of the observed property changes to an expected value.
- [init(keyPath:observedObject:options:predicate:)](init%28keypath_observedobject_options_predicate_%29.md): Deprecated. Creates an expectation that the system fulfills when the value of the observed property changes and satisfies the conditions of a predicate’s evaluation.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-8noag.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.AsynchronousFilter](asynchronousfilter.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.SynchronousFilter](synchronousfilter.md): Conforms when `T` inherits `NSObject`.
- [XCTKeyPathExpectation.Predicate](predicate.md): Deprecated. A function the key path expectation uses to test the value of an observed property.
