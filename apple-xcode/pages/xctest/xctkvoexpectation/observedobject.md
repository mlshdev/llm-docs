> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/observedobject](https://developer.apple.com/documentation/xctest/xctkvoexpectation/observedobject)

# observedObject (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

The object that the system observes for KVO changes.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
var observedObject: Any { get }
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.

# observedObject (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The object that the system observes for KVO changes.

## Declaration

```objectivec
@property (strong, readonly) id observedObject;
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.
