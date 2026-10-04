> Snapshot-pinned source payload for Apple SwiftUI snapshot-8247613c923d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/uiapplicationdelegateadaptor/wrappedvalue

# wrappedValue

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS 1.0+

The underlying app delegate.

## Declaration

```swift
@MainActor @preconcurrency var wrappedValue: DelegateType { get }
```

## See Also

### Getting the delegate adaptor

- [projectedValue](projectedvalue.md): Conforms when `DelegateType` inherits `NSObject`, `DelegateType` conforms to `ObservableObject`, and `DelegateType` conforms to `UIApplicationDelegate`. A projection of the observed object that provides bindings to its properties.
