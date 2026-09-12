> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/accessibilityvalue(_:isenabled:)](https://developer.apple.com/documentation/swiftui/tabcontent/accessibilityvalue(_:isenabled:))

# accessibilityValue(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Adds a textual description of the value that the tab contains.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityValue(_ valueResource: LocalizedStringResource, isEnabled: Bool = true) -> some TabContent<Self.TabValue>

```

## Parameters

- `valueResource`: The accessibility value to apply.
- `isEnabled`: If true the accessibility value is applied; otherwise the accessibility value is unchanged.

<a id="discussion"></a>

## Discussion

Use this method to describe the value represented by a tab, but only if that’s different than the tab’s label such as when an icon represent information about a tab.

```swift
var body: some View {
    TabView {
        Tab {
            MessagesView()
        } label: {
            Text("Messages")
        }
        .badge(30)
        .accessibilityValue("30 Unread")
    }
}
```

## See Also

### Configuring tab accessibility

- [accessibilityHint(\_:isEnabled:)](accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after selecting the tab.
- [accessibilityIdentifier(\_:isEnabled:)](accessibilityidentifier%28__isenabled_%29.md): Uses the string you specify to identify the view. Use this value for testing. It isn’t visible to the user.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a tab.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the tab that describes its contents.
