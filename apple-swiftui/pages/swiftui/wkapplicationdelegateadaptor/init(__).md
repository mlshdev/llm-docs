> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/wkapplicationdelegateadaptor/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** watchOS 10.0+

Creates an `WKApplicationDelegateAdaptor` using a WatchKit Application Delegate.

## Declaration

```swift
@MainActor @preconcurrency init(_ delegateType: DelegateType.Type = DelegateType.self)
```

## Parameters

- `delegateType`: The type of `WKApplicationDelegate` to use.

<a id="discussion"></a>

## Discussion

The framework will initialize the provided delegate and manage its lifetime, calling out to it when appropriate after performing its own work.

> **Note**

> The instantiated delegate will be placed in the Environment and may be accessed by using the `@Environment` property wrapper in the view hierarchy.
