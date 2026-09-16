> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/anytransition/init(_:)

# init(\_:)

**Framework:** SwiftUI  
**Kind:** Initializer  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Create an instance that type-erases `transition`.

## Declaration

```swift
init<T>(_ transition: T) where T : Transition
```

## See Also

### Creating a custom transition

- [modifier(active:identity:)](modifier%28active_identity_%29.md): Returns a transition defined between an active modifier and an identity modifier.
