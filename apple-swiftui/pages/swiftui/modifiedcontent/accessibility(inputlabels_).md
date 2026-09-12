> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(inputlabels:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(inputlabels:))

# accessibility(inputLabels:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

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
