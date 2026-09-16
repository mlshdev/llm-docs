> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityhidden(_:isenabled:)

# accessibilityHidden(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies whether to hide this view from system accessibility features.

## Declaration

```swift
nonisolated func accessibilityHidden(_ hidden: Bool, isEnabled: Bool) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `hidden`: Whether to hide this view from accessibility features.
- `isEnabled`: If true the accessibility hidden state is applied; otherwise the accessibility hidden state is unchanged.
