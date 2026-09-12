> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/keypath](https://developer.apple.com/documentation/xctest/xctkvoexpectation/keypath)

# keyPath (Swift)

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

The key path the system observes for KVO changes.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
var keyPath: String { get }
```

## See Also

### Expectation properties

- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.

# keyPath (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Property

The key path the system observes for KVO changes.

## Declaration

```objectivec
@property (copy, readonly) NSString * keyPath;
```

## See Also

### Expectation properties

- [observedObject](observedobject.md): Deprecated. The object that the system observes for KVO changes.
- [expectedValue](expectedvalue.md): Deprecated. The value that the key path’s specified property must equal to fulfill the expectation.
- [options](options.md): Deprecated. The key-value observing options the expectation uses when registering for observation.
