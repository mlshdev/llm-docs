> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/tabcontent/accessibilityidentifier(_:isenabled:)](https://developer.apple.com/documentation/swiftui/tabcontent/accessibilityidentifier(_:isenabled:))

# accessibilityIdentifier(\_:isEnabled:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Uses the string you specify to identify the view. Use this value for testing. It isn’t visible to the user.

## Declaration

```swift
nonisolated func accessibilityIdentifier(_ identifier: String, isEnabled: Bool = true) -> some TabContent<Self.TabValue>

```

## Parameters

- `identifier`: The accessibility identifier to apply.
- `isEnabled`: If true the accessibility identifier is applied; otherwise the accessibility identifier is unchanged.

## See Also

### Configuring tab accessibility

- [accessibilityHint(\_:isEnabled:)](accessibilityhint%28__isenabled_%29.md): Communicates to the user what happens after selecting the tab.
- [accessibilityInputLabels(\_:isEnabled:)](accessibilityinputlabels%28__isenabled_%29.md): Sets alternate input labels with which users identify a tab.
- [accessibilityLabel(\_:isEnabled:)](accessibilitylabel%28__isenabled_%29.md): Adds a label to the tab that describes its contents.
- [accessibilityValue(\_:isEnabled:)](accessibilityvalue%28__isenabled_%29.md): Adds a textual description of the value that the tab contains.
