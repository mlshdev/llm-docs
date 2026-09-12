> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/accessibilityhint(_:isenabled:)](https://developer.apple.com/documentation/swiftui/tabcontent/accessibilityhint(_:isenabled:))

# accessibilityHint(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Communicates to the user what happens after selecting the tab.

## Declaration

```swift
@export(implementation) nonisolated func accessibilityHint(_ hint: LocalizedStringResource, isEnabled: Bool = true) -> some TabContent<Self.TabValue>

```

## Parameters

- `hint`: The accessibility hint to apply.
- `isEnabled`: If true the accessibility hint is applied; otherwise the accessibility hint is unchanged.

<a id="discussion"></a>

## Discussion

Provide a hint in the form of a brief phrase, like “Open shopping cart” or “Show downloaded attachments”.

```swift
var body: some View {
    TabView {
        Tab {
            MessagesView()
        } label: {
            Image(systemName: "play")
        }
        .accessibilityHint("Select videos to download")
    }
}
```

## See Also

### Configuring tab accessibility

- [accessibilityIdentifier(\_:isEnabled:)](accessibilityidentifier%28__isenabled_%29.md): Uses the string you specify to identify the view. Use this value for testing. It isn’t visible to the user.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a tab.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the tab that describes its contents.
- [accessibilityValue(\_:isEnabled:)](accessibilityvalue%28__isenabled_%29.md): Adds a textual description of the value that the tab contains.
