> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/viewmodifier/concat(_:)

# concat(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a new modifier that is the result of concatenating `self` with `modifier`.

## Declaration

```swift
nonisolated func concat<T>(_ modifier: T) -> ModifiedContent<Self, T>
```

## See Also

### Adding animations to a view

- [animation(\_:)](animation%28__%29.md): Returns a new version of the modifier that will apply `animation` to all animatable values within the modifier.
