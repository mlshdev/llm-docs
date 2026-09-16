> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/view/accessibilityremovetraits(_:)

# accessibilityRemoveTraits(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Removes the given traits from this view.

## Declaration

```swift
nonisolated func accessibilityRemoveTraits(_ traits: AccessibilityTraits) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## See Also

### Assigning traits to content

- [accessibilityAddTraits(\_:)](accessibilityaddtraits%28__%29.md): Adds the given traits to the view.
- [AccessibilityTraits](../accessibilitytraits.md): A set of accessibility traits that describe how an element behaves.
