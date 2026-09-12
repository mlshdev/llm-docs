> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilityinputlabels(_:isenabled:)](https://developer.apple.com/documentation/swiftui/view/accessibilityinputlabels(_:isenabled:))

# accessibilityInputLabels(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets alternate input labels with which users identify a view.

## Declaration

```swift
nonisolated func accessibilityInputLabels(_ inputLabelKeys: [LocalizedStringKey], isEnabled: Bool) -> ModifiedContent<Self, AccessibilityAttachmentModifier>
```

## Parameters

- `inputLabelKeys`: The accessibility input labels to apply.
- `isEnabled`: If true the accessibility input labels are applied; otherwise the accessibility input labels are unchanged.

<a id="discussion"></a>

## Discussion

Provide labels in descending order of importance. Voice Control and Full Keyboard Access use the input labels.

> **Note**

> If you don’t specify any input labels, the user can still refer to the view using the accessibility label that you add with the `accessibilityLabel()` modifier.

## See Also

### Applying labels

- [accessibilityLabel(\_:)](accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(content:)](accessibilitylabel%28content_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityLabeledPair(role:id:in:)](accessibilitylabeledpair%28role_id_in_%29.md): Pairs an accessibility element representing a label with the element for the matching content.
- [AccessibilityLabeledPairRole](../accessibilitylabeledpairrole.md): The role of an accessibility element in a label / content pair.
