> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/accessibilitylabel(content:)](https://developer.apple.com/documentation/swiftui/view/accessibilitylabel(content:))

# accessibilityLabel(content:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a label to the view that describes its contents.

## Declaration

```swift
nonisolated func accessibilityLabel<V>(@ContentBuilder content: (PlaceholderContentView<Self>) -> V) -> some View where V : View

```

## Parameters

- `content`: A content builder closure that takes a proxy value representing the modified view. You can combine the modified view with other content to create a new accessibility label for the original view.

<a id="discussion"></a>

## Discussion

Use this method to append content to the accessibility label for a view. For example, you could use this method to label a badge or alert that is custom drawn without removing the existing accessibility label.

## See Also

### Applying labels

- [accessibilityLabel(\_:)](accessibilitylabel%28__%29.md): Adds a label to the view that describes its contents.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the view that describes its contents.
- [accessibilityInputLabels(\_:)](accessibilityinputlabels%28__%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a view.
- [accessibilityLabeledPair(role:id:in:)](accessibilitylabeledpair%28role_id_in_%29.md): Pairs an accessibility element representing a label with the element for the matching content.
- [AccessibilityLabeledPairRole](../accessibilitylabeledpairrole.md): The role of an accessibility element in a label / content pair.
