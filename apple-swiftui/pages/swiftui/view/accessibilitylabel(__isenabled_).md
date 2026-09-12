> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitylabel(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(_:isenabled:))

# accessibilityLabel(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a label to the view that describes its contents.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityLabel(_ label: LocalizedStringResource, isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `label`: The accessibility label to apply.
- `isEnabled`: If true the accessibility label is applied; otherwise the accessibility label is unchanged.

<a id="discussion"></a>

## Discussion

Use this method to provide an accessibility label for a view that doesn’t display text, like an icon. For example, you could use this method to label a button that plays music with the text “Play”. Don’t include text in the label that repeats information that users already have. For example, don’t use the label “Play button” because a button already has a trait that identifies it as a button.

## See Also

### Applying labels

- [accessibilityLabel(\_:)](accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(content:)](accessibilitylabel%28content_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityLabeledPair(role:id:in:)](accessibilitylabeledpair%28role_id_in_%29.md): Pairs an accessibility element representing a label with the element for the matching content.
- [AccessibilityLabeledPairRole](../accessibilitylabeledpairrole.md): The role of an accessibility element in a label / content pair.
