> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityinputlabels(_:)

# accessibilityInputLabels(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets alternate input labels with which users identify a view.

## Declaration

```swift
nonisolated func accessibilityInputLabels(_ inputLabelKeys: [LocalizedStringKey]) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Provide labels in descending order of importance. Voice Control and Full Keyboard Access use the input labels.

> **Note**

> If you don’t specify any input labels, the user can still refer to the view using the accessibility label that you add with the `accessibilityLabel()` modifier.
