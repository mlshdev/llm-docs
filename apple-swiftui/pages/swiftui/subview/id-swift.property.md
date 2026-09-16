> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/subview/id-swift.property

# id

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The unique identifier of the view.

## Declaration

```swift
nonisolated var id: Subview.ID { get }
```

<a id="discussion"></a>

## Discussion

This identifier persists across updates, changes to the order of subviews, etc. so can be used to track the lifetime of a subview.
