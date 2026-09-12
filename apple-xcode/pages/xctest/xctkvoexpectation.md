> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation](https://developer.apple.com/documentation/xctest/xctkvoexpectation)

# XCTKVOExpectation (Swift)

**Framework:** XCTest  
**Kind:** Class  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

An expectation that a specific key-value observing (KVO) condition fulfills.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
class XCTKVOExpectation
```

<a id="overview"></a>

## Overview

Apple discourages the use of this symbol in Swift. Use [XCTKeyPathExpectation](xctkeypathexpectation.md) instead.

## Topics

### Creating KVO expectations

- [init(keyPath:object:)](xctkvoexpectation/init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [init(keyPath:object:expectedValue:)](xctkvoexpectation/init%28keypath_object_expectedvalue_%29.md): Deprecated. Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.
- [init(keyPath:object:expectedValue:options:)](xctkvoexpectation/init%28keypath_object_expectedvalue_options_%29.md): Deprecated. Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

### Expectation properties

- [keyPath](xctkvoexpectation/keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](xctkvoexpectation/observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](xctkvoexpectation/expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](xctkvoexpectation/options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.

### Custom KVO evaluation

- [handler](xctkvoexpectation/handler-swift.property.md): Deprecated. An optional handler that performs custom evaluation of changes to the observed key path.
- [XCTKVOExpectation.Handler](xctkvoexpectation/handler-swift.typealias.md): A custom handler to call when observing a KVO change for a specified key path.

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

### Key Value Observing Expectations

- [XCTKeyPathExpectation](xctkeypathexpectation.md): An expectation that a specific key-value observing (KVO) condition fulfills.

# XCTKVOExpectation (Objective-C)

**Framework:** XCTest  
**Kind:** Class

An expectation that a specific key-value observing (KVO) condition fulfills.

## Declaration

```objectivec
@interface XCTKVOExpectation : XCTestExpectation
```

<a id="overview"></a>

## Overview

Apple discourages the use of this symbol in Swift. Use [XCTKeyPathExpectation](xctkeypathexpectation.md) instead.

## Topics

### Creating KVO expectations

- [initWithKeyPath:object:](xctkvoexpectation/init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [initWithKeyPath:object:expectedValue:](xctkvoexpectation/init%28keypath_object_expectedvalue_%29.md): Deprecated. Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.
- [initWithKeyPath:object:expectedValue:options:](xctkvoexpectation/init%28keypath_object_expectedvalue_options_%29.md): Deprecated. Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

### Expectation properties

- [keyPath](xctkvoexpectation/keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](xctkvoexpectation/observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](xctkvoexpectation/expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](xctkvoexpectation/options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.

### Custom KVO evaluation

- [handler](xctkvoexpectation/handler-swift.property.md): Deprecated. An optional handler that performs custom evaluation of changes to the observed key path.
- [XCKeyValueObservingExpectationHandler](xctkvoexpectation/handler-swift.typealias.md): A custom handler to call when observing a KVO change for a specified key path.

## Relationships

### Inherits From

- [XCTestExpectation](xctestexpectation.md)
