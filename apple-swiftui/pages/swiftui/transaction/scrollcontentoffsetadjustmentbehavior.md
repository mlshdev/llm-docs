> Snapshot-pinned source payload for Apple SwiftUI snapshot-8b55d19a707e; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/swiftui/transaction/scrollcontentoffsetadjustmentbehavior

# scrollContentOffsetAdjustmentBehavior

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The behavior a scroll view will have regarding content offset adjustments for the current transaction.

## Declaration

```swift
var scrollContentOffsetAdjustmentBehavior: ScrollContentOffsetAdjustmentBehavior { get set }
```

<a id="discussion"></a>

## Discussion

A scroll view may automatically adjust its content offset based on the current context. The absolute offset may be adjusted to keep content in relatively the same place. For example, when scrolled to the bottom, a scroll view may keep the bottom edge scrolled to the bottom when the overall size of its content changes.

Use this property to disable these kinds of adjustments when needed.
