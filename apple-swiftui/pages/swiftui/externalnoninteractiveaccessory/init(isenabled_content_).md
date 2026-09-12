> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/externalnoninteractiveaccessory/init(isenabled:content:)](https://developer.apple.com/documentation/swiftui/externalnoninteractiveaccessory/init(isenabled:content:))

# init(isEnabled:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Creates a scene accessory that presents non-interactive content on an external display with a binding for programmatic enablement.

## Declaration

```swift
nonisolated init(isEnabled: Binding<Bool>, @ContentBuilder content: @escaping () -> Content)
```

## Parameters

- `isEnabled`: A binding for whether or not the accessory should present if available.
- `content`: The scene’s content.
