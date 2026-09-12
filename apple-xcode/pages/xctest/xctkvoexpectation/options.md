> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/options](https://developer.apple.com/documentation/xctest/xctkvoexpectation/options)

# options (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

The key-value observing options the expectation uses when registering for observation.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
var options: NSKeyValueObservingOptions { get }
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.

# options (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The key-value observing options the expectation uses when registering for observation.

## Declaration

```objectivec
@property (readonly) NSKeyValueObservingOptions options;
```

## See Also

### Expectation properties

- [keyPath](keypath.md): Deprecated. The key path the system observes for KVO changes.
- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
