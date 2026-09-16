> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/nsapplicationdelegateadaptor/wrappedvalue

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The underlying delegate.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: DelegateType { get }
```

## See Also

### Getting the delegate adaptor

- [projectedValue](projectedvalue.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `NSApplicationDelegate`, and `DelegateType` conforms to `ObservableObject`. A projection of the observed object that provides bindings to its properties.
