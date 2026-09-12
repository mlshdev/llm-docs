> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibility(sortpriority:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(sortpriority:))

# accessibility(sortPriority:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.0+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 6.0+ (deprecated in 27.0)

Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

> Use [accessibilitySortPriority(\_:)](accessibilitysortpriority%28__%29.md) instead.

## Declaration

```swift
nonisolated func accessibility(sortPriority: Double) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Higher numbers are sorted first. The default sort priority is zero.
