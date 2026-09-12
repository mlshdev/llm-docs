> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitylabel(_:)](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:))

# accessibilityLabel(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Adds a label to the view that describes its contents.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityLabel(_ label: LocalizedStringResource) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

<a id="discussion"></a>

## Discussion

Use this method to provide an accessibility label for a view that doesn’t display text, like an icon. For example, you could use this method to label a button that plays music with the text “Play”. Don’t include text in the label that repeats information that users already have. For example, don’t use the label “Play button” because a button already has a trait that identifies it as a button.

## See Also

### Applying labels

- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(content:)](accessibilitylabel%28content_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityLabeledPair(role:id:in:)](accessibilitylabeledpair%28role_id_in_%29.md): Pairs an accessibility element representing a label with the element for the matching content.
- [AccessibilityLabeledPairRole](../accessibilitylabeledpairrole.md): The role of an accessibility element in a label / content pair.
