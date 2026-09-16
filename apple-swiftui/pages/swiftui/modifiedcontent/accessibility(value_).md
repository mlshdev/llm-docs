> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(value:)

# accessibility(value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Adds a textual description of the value that the view contains.

> Use [accessibilityValue(\_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityvalue%28_:%29-1esu1) instead.

## Declaration

```swift
nonisolated func accessibility(value: Text) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Use this method to describe the value represented by a view, but only if that’s different than the view’s label. For example, for a slider that you label as “Volume” using [accessibility(label:)](accessibility%28label_%29.md), you can provide the current volume setting, like “60%”, using [accessibility(value:)](accessibility%28value_%29.md).
