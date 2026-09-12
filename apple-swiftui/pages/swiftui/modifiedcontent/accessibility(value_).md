> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(value:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(value:))

# accessibility(value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Adds a textual description of the value that the view contains.

> Use [accessibilityValue(\_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityvalue%28_:%29-1esu1) instead.

## Declaration

```swift
nonisolated func accessibility(value: Text) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Use this method to describe the value represented by a view, but only if that’s different than the view’s label. For example, for a slider that you label as “Volume” using [accessibility(label:)](accessibility%28label_%29.md), you can provide the current volume setting, like “60%”, using [accessibility(value:)](accessibility%28value_%29.md).
