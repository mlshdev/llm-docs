> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/modifiedcontent/accessibilitysortpriority(_:)](https://developer.apple.com/documentation/swiftui/modifiedcontent/accessibilitysortpriority(_:))

# accessibilitySortPriority(\_:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 7.0+

Sets the sort priority order for this view’s accessibility element, relative to other elements at the same level.

## Declaration

```swift
nonisolated func accessibilitySortPriority(_ sortPriority: Double) -> ModifiedContent<Content, Modifier>
```

<a id="discussion"></a>

## Discussion

Higher numbers are sorted first. The default sort priority is zero.
