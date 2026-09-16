> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityrespondstouserinteraction(_:)

# accessibilityRespondsToUserInteraction(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Explicitly set whether this Accessibility element responds to user interaction and would thus be interacted with by technologies such as Switch Control, Voice Control or Full Keyboard Access.

## Declaration

```swift
nonisolated func accessibilityRespondsToUserInteraction(_ respondsToUserInteraction: Bool = true) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

If this is not set, the value is inferred from the traits of the Accessibility element, the presence of Accessibility actions on the element, or the presence of gestures on the element or containing views.
