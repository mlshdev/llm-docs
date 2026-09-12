> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/handler-swift.property](https://developer.apple.com/documentation/xctest/xctkvoexpectation/handler-swift.property)

# handler (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

An optional handler that performs custom evaluation of changes to the observed key path.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
var handler: XCTKVOExpectation.Handler? { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The system ignores the expectation’s [expectedValue](expectedvalue.md) property when the [handler](handler-swift.property.md) is non-nil.

## See Also

### Custom KVO evaluation

- [XCTKVOExpectation.Handler](handler-swift.typealias.md): A custom handler to call when observing a KVO change for a specified key path.

# handler (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

An optional handler that performs custom evaluation of changes to the observed key path.

## Declaration

```objectivec
@property (atomic, copy, nullable) XCKeyValueObservingExpectationHandler handler;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  The system ignores the expectation’s [expectedValue](expectedvalue.md) property when the [handler](handler-swift.property.md) is non-nil.

## See Also

### Custom KVO evaluation

- [XCKeyValueObservingExpectationHandler](handler-swift.typealias.md): A custom handler to call when observing a KVO change for a specified key path.
