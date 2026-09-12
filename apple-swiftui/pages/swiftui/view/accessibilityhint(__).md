> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityhint(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilityhint(_:))

# accessibilityHint(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Communicates to the user what happens after performing the view’s action.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityHint(_ hint: LocalizedStringResource) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

<a id="discussion"></a>

## Discussion

Provide a hint in the form of a brief phrase, like “Purchases the item” or “Downloads the attachment”.

## See Also

### Offering hints

- [accessibilityHint(\_:isEnabled:)](accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after performing the view’s action.
