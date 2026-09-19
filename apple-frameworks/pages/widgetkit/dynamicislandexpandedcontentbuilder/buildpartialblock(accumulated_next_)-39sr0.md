> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/widgetkit/dynamicislandexpandedcontentbuilder/buildpartialblock(accumulated:next:)-39sr0

# buildPartialBlock(accumulated:next:)

**Framework:** WidgetKit  
**Kind:** Type Method  
**Availability:** iOS 16.1+ · iPadOS 16.1+

## Declaration

```swift
static func buildPartialBlock<C0, C1>(accumulated: DynamicIslandExpandedContent<C0>, next: DynamicIslandExpandedContent<C1>) -> DynamicIslandExpandedContent<some View> where C0 : View, C1 : View

```
