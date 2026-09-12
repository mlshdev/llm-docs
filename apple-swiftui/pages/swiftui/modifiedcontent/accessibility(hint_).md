> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(hint:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(hint:))

# accessibility(hint:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Communicates to the user what happens after performing the view’s action.

> Use [accessibilityHint(\_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilityhint%28_:%29-cuvd) instead.

## Declaration

```swift
nonisolated func accessibility(hint: Text) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Provide a hint in the form of a brief phrase, like “Purchases the item” or “Downloads the attachment”.
