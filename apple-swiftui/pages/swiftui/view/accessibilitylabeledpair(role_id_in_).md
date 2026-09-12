> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitylabeledpair(role:id:in:)](https://developer.apple.com/documentation/swiftui/view/accessibilitylabeledpair(role:id:in:))

# accessibilityLabeledPair(role:id:in:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Pairs an accessibility element representing a label with the element for the matching content.

## Declaration

```swift
nonisolated func accessibilityLabeledPair<ID>(role: AccessibilityLabeledPairRole, id: ID, in namespace: Namespace.ID) -> some View where ID : Hashable

```

## Parameters

- `role`: Determines whether this element should be used as the label in the pair, or the content in the pair.
- `id`: The identifier for the label / content pair. Elements with matching identifiers within the same namespace will be paired together.
- `namespace`: The namespace used to organize label and content. Label and content under the same namespace with matching identifiers will be paired together.

<a id="discussion"></a>

## Discussion

Use `accessibilityLabeledPair` with a role of `AccessibilityLabeledPairRole.label` to identify the label, and a role of `AccessibilityLabeledPairRole.content` to identify the content. This improves the behavior of accessibility features such as VoiceOver when navigating such elements, allowing users to better understand the relationship between them.

## See Also

### Applying labels

- [accessibilityLabel(\_:)](accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(content:)](accessibilitylabel%28content_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a view.
- [AccessibilityLabeledPairRole](../accessibilitylabeledpairrole.md): The role of an accessibility element in a label / content pair.
