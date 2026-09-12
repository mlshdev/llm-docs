> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctkeypathexpectation/options](https://developer.apple.com/documentation/xctest/xctkeypathexpectation/options)

# options

**Framework:** XCTest  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · tvOS 13.0+

A combination of values that specify what to include in observation notifications.

## Declaration

```swift
final let options: NSKeyValueObservingOptions
```

<a id="Discussion"></a>

## Discussion

For possible values, see [NSKeyValueObservingOptions](https://developer.apple.com/documentation/foundation/nskeyvalueobservingoptions).

## See Also

### Expectation properties

- [keyPath](keypath.md): The key path for the observed property, relative to the observed object.
- [observedObject](observedobject.md): The object the system observes the key path on.
- [expectedValue](expectedvalue.md): Conforms when `T` inherits `NSObject` and `V` conforms to `Equatable`. A value that the key path’s specified property must equal to fulfill the expectation.
