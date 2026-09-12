> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/predicate](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/predicate)

# XCTKeyPathExpectation.Predicate

**Framework:** XCTest  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

A function the key path expectation uses to test the value of an observed property.

> T and V must be Sendable when used with an asynchronous filtering function.

## Declaration

```swift
typealias Predicate = @Sendable (T, NSKeyValueObservedChange<V>) async -> Bool
```

## Parameters

- `observedObject`: The observed object to evaluate with the property that changes.
- `change`: A value that describes the observed change.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the change fulfills the expectation; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

A key path expectation uses this function to determine whether the value of the observed property fulfills the conditions of the expectation. The system invokes the function asyncronously on a detached task and may call the function more that once.

## See Also

### Creating key path expectations

- [init(keyPath:observedObject:options:expectedValue:)](init%28keypath_observedobject_options_expectedvalue_%29.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. Creates an expectation that the system fulfills when the value of the observed property changes to an expected value.
- [init(keyPath:observedObject:options:predicate:)](init%28keypath_observedobject_options_predicate_%29.md): Deprecated. Creates an expectation that the system fulfills when the value of the observed property changes and satisfies the conditions of a predicate’s evaluation.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-plka.md): Conforms when `T` inherits `NSObject`.
- [init(keyPath:observedObject:options:filter:)](init%28keypath_observedobject_options_filter_%29-8noag.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.AsynchronousFilter](asynchronousfilter.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.SynchronousFilter](synchronousfilter.md): Conforms when `T` inherits `NSObject`.
