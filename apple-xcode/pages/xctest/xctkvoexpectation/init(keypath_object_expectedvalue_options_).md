> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/init(keypath:object:expectedvalue:options:)](https://developer.apple.com/documentation/xctest/xctkvoexpectation/init(keypath:object:expectedvalue:options:))

# init(keyPath:object:expectedValue:options:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
init(keyPath: String, object: Any, expectedValue: Any?, options: NSKeyValueObservingOptions = [])
```

## Parameters

- `keyPath`: The key path to observe.
- `object`: The object to observe.
- `expectedValue`: The expected value for the observed key path.
- `options`: An array of [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions) that determine the values to return as part of the observed key path’s change dictionary.

## See Also

### Creating KVO expectations

- [init(keyPath:object:)](init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [init(keyPath:object:expectedValue:)](init%28keypath_object_expectedvalue_%29.md): Deprecated. Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

# initWithKeyPath:object:expectedValue:options: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

## Declaration

```objectivec
- (instancetype) initWithKeyPath:(NSString *) keyPath object:(id) object expectedValue:(id) expectedValue options:(NSKeyValueObservingOptions) options;
```

## Parameters

- `keyPath`: The key path to observe.
- `object`: The object to observe.
- `expectedValue`: The expected value for the observed key path.
- `options`: An array of [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions) that determine the values to return as part of the observed key path’s change dictionary.

## See Also

### Creating KVO expectations

- [initWithKeyPath:object:](init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [initWithKeyPath:object:expectedValue:](init%28keypath_object_expectedvalue_%29.md): Deprecated. Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.
