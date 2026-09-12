> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/keypath](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/keypath)

# keyPath

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

The key path for the observed property, relative to the observed object.

## Declaration

```swift
final let keyPath: KeyPath<T, V>
```

## See Also

### Expectation properties

- [observedObject](observedobject.md): The object the system observes the key path on.
- [options](options.md): A combination of values that specify what to include in observation notifications.
- [expectedValue](expectedvalue.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. A value that the key path’s specified property must equal to fulfill the expectation.
