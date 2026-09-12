> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/expectedvalue](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/expectedvalue)

# expectedValue

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

A value that the key path’s specified property must equal to fulfill the expectation.

## Declaration

```swift
final var expectedValue: V? { get }
```

<a id="Discussion"></a>

## Discussion

If the expectation doesn’t initialize with an expected value, this property returns `nil`.

## See Also

### Expectation properties

- [keyPath](keypath.md): The key path for the observed property, relative to the observed object.
- [observedObject](observedobject.md): The object the system observes the key path on.
- [options](options.md): A combination of values that specify what to include in observation notifications.
