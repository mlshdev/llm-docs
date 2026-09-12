> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/expectedvalue](https://developer.apple.com/documentation/xctest/xctkvoexpectation/expectedvalue)

# expectedValue (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

The value that the key path’s specified property must equal to fulfill the expectation.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
var expectedValue: Any? { get }
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.

# expectedValue (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The value that the key path’s specified property must equal to fulfill the expectation.

## Declaration

```objectivec
@property (strong, readonly, nullable) id expectedValue;
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.
