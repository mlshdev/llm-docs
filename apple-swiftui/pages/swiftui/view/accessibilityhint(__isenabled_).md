> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityhint(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/accessibilityhint(_:isenabled:))

# accessibilityHint(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Communicates to the user what happens after performing the view’s action.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityHint(_ hint: LocalizedStringResource, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `hint`: The accessibility hint to apply.
- `isEnabled`: If true the accessibility hint is applied; otherwise the accessibility hint is unchanged.

<a id="discussion"></a>

## Discussion

Provide a hint in the form of a brief phrase, like “Purchases the item” or “Downloads the attachment”.

## See Also

### Offering hints

- [accessibilityHint(\_:)](accessibilityhint%28__%29.md): Communicates to the user what happens after performing the view’s action.
