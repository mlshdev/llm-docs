> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/wkapplicationdelegateadaptor/wrappedvalue

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** watchOS 7.0+

The underlying delegate.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: DelegateType { get }
```

## See Also

### Getting the delegate adaptor

- [projectedValue](projectedvalue.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `ObservableObject`, and `DelegateType` conforms to `WKApplicationDelegate`. A projection of the observed object that creates bindings to its properties using dynamic member lookup.
