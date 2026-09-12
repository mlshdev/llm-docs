> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/handler-swift.typealias](https://developer.apple.com/documentation/xctest/xctkvoexpectation/handler-swift.typealias)

# XCTKVOExpectation.Handler (Swift)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to call when observing a KVO change for a specified key path.

## Declaration

```swift
typealias Handler = @Sendable (Any, [AnyHashable : Any]) -> Bool
```

## Parameters

- `observedObject`: The observed object, which helps to avoid block-capture issues.
- `change`: The KVO change dictionary.

<a id="return-value"></a>

## Return Value

Your custom handler returns [true](https://developer.apple.com/documentation/swift/true) if the system fulfills the expectation after the observed change; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom KVO evaluation

- [handler](handler-swift.property.md): Deprecated. An optional handler that performs custom evaluation of changes to the observed key path.

# XCKeyValueObservingExpectationHandler (Objective-C)

**Framework:** XCTest  
**Kind:** Type Alias

A custom handler to call when observing a KVO change for a specified key path.

## Declaration

```objectivec
typedef _Bool (^)(id, NSDictionary *) XCKeyValueObservingExpectationHandler;
```

## Parameters

- `observedObject`: The observed object, which helps to avoid block-capture issues.
- `change`: The KVO change dictionary.

<a id="return-value"></a>

## Return Value

Your custom handler returns [true](https://developer.apple.com/documentation/swift/true) if the system fulfills the expectation after the observed change; otherwise, [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Custom KVO evaluation

- [handler](handler-swift.property.md): Deprecated. An optional handler that performs custom evaluation of changes to the observed key path.
