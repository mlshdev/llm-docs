> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/wkextensiondelegateadaptor/wrappedvalue](https://developer.apple.com/documentation/swiftui/wkextensiondelegateadaptor/wrappedvalue)

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+ (deprecated in 9.2)

The underlying delegate.

> Use WKApplicationDelegateAdaptor with a WKApplicationDelegate instead.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: DelegateType { get }
```

## See Also

### Getting the delegate adaptor

- [projectedValue](projectedvalue.md): Deprecated. Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `ObservableObject`, and `DelegateType` conforms to `WKExtensionDelegate`. A projection of the observed object that provides bindings to its properties.
