> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityhidden(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/accessibilityhidden(_:isenabled:))

# accessibilityHidden(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Specifies whether to hide this view from system accessibility features.

## Declaration

```swift
nonisolated func accessibilityHidden(_ hidden: Bool, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `hidden`: Whether to hide this view from accessibility features.
- `isEnabled`: If true the accessibility hidden state is applied; otherwise the accessibility hidden state is unchanged.

## See Also

### Hiding elements

- [accessibilityHidden(\_:)](accessibilityhidden%28__%29.md): Specifies whether to hide this view from system accessibility features.
