> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(identifier:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(identifier:))

# accessibility(identifier:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Uses the specified string to identify the view.

> Use [accessibilityIdentifier(\_:)](accessibilityidentifier%28__%29.md) instead.

## Declaration

```swift
nonisolated func accessibility(identifier: String) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Use this value for testing. It isn’t visible to the user.
