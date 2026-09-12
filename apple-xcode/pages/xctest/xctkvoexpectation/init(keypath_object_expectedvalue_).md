> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkvoexpectation/init(keypath:object:expectedvalue:)](https://developer.apple.com/documentation/xctest/xctkvoexpectation/init(keypath:object:expectedvalue:))

# init(keyPath:object:expectedValue:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer  
**Availability:** iOS  (deprecated in 17.0) · iPadOS  (deprecated in 17.0) · Mac Catalyst  (deprecated in 17.0) · macOS  (deprecated in 27.0) · tvOS  (deprecated in 17.0) · visionOS  (deprecated in 1.0) · watchOS  (deprecated in 26.0)

Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

> Replaced by 'XCTKeyPathExpectation'

## Declaration

```swift
convenience init(keyPath: String, object: Any, expectedValue: Any?)
```

## Parameters

- `keyPath`: The key path to observe.
- `object`: The object to observe.
- `expectedValue`: The expected value for the observed key path.

<a id="Discussion"></a>

## Discussion

This initializer sets up KVO observation for `keyPath` with the following [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions):

- [initial](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/initial)
- [new](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new)
- [old](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old)

The inclusion of the [initial](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/initial) option means that the system checks the observed key path immediately after initialization. The inclusion of the [new](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new) and [old](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old) options means that any custom KVO handler you provide in the expectation’s [handler](handler-swift.property.md) property receives a change info dictionary that contains the [newKey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/newkey) and [oldKey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/oldkey) keys.

## See Also

### Creating KVO expectations

- [init(keyPath:object:)](init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [init(keyPath:object:expectedValue:options:)](init%28keypath_object_expectedvalue_options_%29.md): Deprecated. Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

# initWithKeyPath:object:expectedValue: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.

## Declaration

```objectivec
- (instancetype) initWithKeyPath:(NSString *) keyPath object:(id) object expectedValue:(id) expectedValue;
```

## Parameters

- `keyPath`: The key path to observe.
- `object`: The object to observe.
- `expectedValue`: The expected value for the observed key path.

<a id="Discussion"></a>

## Discussion

This initializer sets up KVO observation for `keyPath` with the following [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions):

- [NSKeyValueObservingOptionInitial](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/initial)
- [NSKeyValueObservingOptionNew](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new)
- [NSKeyValueObservingOptionOld](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old)

The inclusion of the [NSKeyValueObservingOptionInitial](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/initial) option means that the system checks the observed key path immediately after initialization. The inclusion of the [NSKeyValueObservingOptionNew](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/new) and [NSKeyValueObservingOptionOld](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions/old) options means that any custom KVO handler you provide in the expectation’s [handler](handler-swift.property.md) property receives a change info dictionary that contains the [NSKeyValueChangeNewKey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/newkey) and [NSKeyValueChangeOldKey](https://developer.apple.com/documentation/foundation/nskeyvaluechangekey/oldkey) keys.

## See Also

### Creating KVO expectations

- [initWithKeyPath:object:](init%28keypath_object_%29.md): Deprecated. Creates an expectation that any KVO change to the specified key path of the observed object fulfills.
- [initWithKeyPath:object:expectedValue:options:](init%28keypath_object_expectedvalue_options_%29.md): Deprecated. Creates an expectation with custom observation options that a KVO change fulfills when it causes the specified key path of the observed object to have an expected value.
