> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/anytransition/modifier(active:identity:)

# modifier(active:identity:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a transition defined between an active modifier and an identity modifier.

## Declaration

```swift
static func modifier<E>(active: E, identity: E) -> AnyTransition where E : ViewModifier
```

## See Also

### Creating a custom transition

- [init(\_:)](init%28__%29.md): Create an instance that type-erases `transition`.
