> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation](https://developer.apple.com/documentation/xctest/xctkeypathexpectation)

# XCTKeyPathExpectation

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

An expectation that a specific key-value observing (KVO) condition fulfills.

## Declaration

```swift
final class XCTKeyPathExpectation<T, V> where T : NSObject
```

<a id="overview"></a>

## Overview

Use an instance of this class to asynchronously wait for changes to a property you specify by key path for a given object. When the value of the property changes, the expectation compares the new value using a predicate or expected value you provide.

## Topics

### Creating key path expectations

- [init(keyPath:observedObject:options:expectedValue:)](xctkeypathexpectation/init%28keypath_observedobject_options_expectedvalue_%29.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. Creates an expectation that the system fulfills when the value of the observed property changes to an expected value.
- [init(keyPath:observedObject:options:predicate:)](xctkeypathexpectation/init%28keypath_observedobject_options_predicate_%29.md): Deprecated. Creates an expectation that the system fulfills when the value of the observed property changes and satisfies the conditions of a predicate’s evaluation.
- [init(keyPath:observedObject:options:filter:)](xctkeypathexpectation/init%28keypath_observedobject_options_filter_%29-plka.md): Conforms when `T` inherits `NSObject`.
- [init(keyPath:observedObject:options:filter:)](xctkeypathexpectation/init%28keypath_observedobject_options_filter_%29-8noag.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.AsynchronousFilter](xctkeypathexpectation/asynchronousfilter.md): Conforms when `T` inherits `NSObject`, `T` conforms to `Sendable`, and `V` conforms to `Sendable`.
- [XCTKeyPathExpectation.SynchronousFilter](xctkeypathexpectation/synchronousfilter.md): Conforms when `T` inherits `NSObject`.
- [XCTKeyPathExpectation.Predicate](xctkeypathexpectation/predicate.md): Deprecated. A function the key path expectation uses to test the value of an observed property.

### Expectation properties

- [keyPath](xctkeypathexpectation/keypath.md): The key path for the observed property, relative to the observed object.
- [observedObject](xctkeypathexpectation/observedobject.md): The object the system observes the key path on.
- [options](xctkeypathexpectation/options.md): A combination of values that specify what to include in observation notifications.
- [expectedValue](xctkeypathexpectation/expectedvalue.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. A value that the key path’s specified property must equal to fulfill the expectation.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Related Documentation

- [Using Key-Value Observing in Swift](https://developer.apple.com/documentation/swift/using-key-value-observing-in-swift): Notify objects about changes to the properties of other objects.

### Key Value Observing Expectations

- [XCTKVOExpectation](xctkvoexpectation.md): Deprecated. An expectation that a specific key-value observing (KVO) condition fulfills.
