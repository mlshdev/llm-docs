> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/cameracaptureaccessory/init(isenabled:content:)

# init(isEnabled:content:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

Creates a scene accessory that presents content during camera capture, with a binding for programmatic enablement.

## Declaration

```swift
nonisolated init(isEnabled: Binding<Bool>, @ContentBuilder content: @escaping () -> Content)
```

## Parameters

- `isEnabled`: A binding for whether or not the accessory should present if available.
- `content`: The scene’s content.
