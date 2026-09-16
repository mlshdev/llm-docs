> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(identifier:)

# accessibility(identifier:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Uses the specified string to identify the view.

> Use [accessibilityIdentifier(\_:)](accessibilityidentifier%28__%29.md) instead.

## Declaration

```swift
nonisolated func accessibility(identifier: String) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Use this value for testing. It isn’t visible to the user.
