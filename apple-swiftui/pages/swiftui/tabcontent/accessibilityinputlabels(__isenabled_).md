> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/accessibilityinputlabels(_:isenabled:)](https://developer.apple.com/documentation/swiftui/tabcontent/accessibilityinputlabels(_:isenabled:))

# accessibilityInputLabels(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Sets alternate input labels with which users identify a tab.

## Declaration

```swift
nonisolated func accessibilityInputLabels(_ inputLabelKeys: [LocalizedStringKey], isEnabled: Bool = true) -> some TabContent<Self.TabValue>

```

## Parameters

- `inputLabelKeys`: The accessibility input labels to apply.
- `isEnabled`: If true the accessibility input labels are applied; otherwise the accessibility input labels are unchanged.

<a id="discussion"></a>

## Discussion

Provide labels in descending order of importance. Voice Control and Full Keyboard Access use the input labels.

> **Note**

> If you don’t specify any input labels, the user can still refer to the tab using the accessibility label that you add with the `accessibilityLabel()` modifier.

```swift
var body: some View {
    TabView {
        Tab {
            MessagesView()
        } label: {
            Image(systemName: "mail")
        }
        .accessibilityInputLabels(["Messages", "Mail", "Conversations"])
    }
}
```

## See Also

### Configuring tab accessibility

- [accessibilityHint(\_:isEnabled:)](accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after selecting the tab.
- [accessibilityIdentifier(\_:isEnabled:)](accessibilityidentifier%28__isenabled_%29.md): Uses the string you specify to identify the view. Use this value for testing. It isn’t visible to the user.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the tab that describes its contents.
- [accessibilityValue(\_:isEnabled:)](accessibilityvalue%28__isenabled_%29.md): Adds a textual description of the value that the tab contains.
