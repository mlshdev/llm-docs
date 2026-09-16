> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(inputlabels:)

# accessibility(inputLabels:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Sets alternate input labels with which users identify a view.

> Use [accessibilityInputLabels(\_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityinputlabels%28_:%29-21dwf) instead.

## Declaration

```swift
nonisolated func accessibility(inputLabels: [Text]) -> ModifiedContent<Content, Modifier>
```

## Parameters

- `inputLabels`: An array of [Text](../text.md) elements to use as input labels.

<a id="discussion"></a>

## Discussion

Provide labels in descending order of importance. Voice Control and Full Keyboard Access use the input labels.

> **Note**

> If you don’t specify any input labels, the user can still refer to the view using the accessibility label that you add with the `accessibility(label:)` modifier.
