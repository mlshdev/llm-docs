> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibility(sortpriority:)

# accessibility(sortPriority:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ (deprecated in 27.2) · iPadOS 13.0+ (deprecated in 27.2) · Mac Catalyst 13.0+ (deprecated in 27.2) · macOS 10.15+ (deprecated in 27.2) · tvOS 13.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2) · watchOS 6.0+ (deprecated in 27.2)

Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

> Use [accessibilitySortPriority(\_:)](accessibilitysortpriority%28__%29.md) instead.

## Declaration

```swift
nonisolated func accessibility(sortPriority: Double) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Higher numbers are sorted first. The default sort priority is zero.
