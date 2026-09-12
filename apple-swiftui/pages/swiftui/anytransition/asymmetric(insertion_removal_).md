> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytransition/asymmetric(insertion:removal:)](https://developer.apple.com/documentation/swiftui/anytransition/asymmetric(insertion:removal:))

# asymmetric(insertion:removal:)

**Framework:** SwiftUI  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Provides a composite transition that uses a different transition for insertion versus removal.

## Declaration

```swift
static func asymmetric(insertion: AnyTransition, removal: AnyTransition) -> AnyTransition
```

## See Also

### Combining and configuring transitions

- [animation(\_:)](animation%28__%29.md): Attaches an animation to this transition.
- [combined(with:)](combined%28with_%29.md): Combines this transition with another, returning a new transition that is the result of both transitions being applied.
