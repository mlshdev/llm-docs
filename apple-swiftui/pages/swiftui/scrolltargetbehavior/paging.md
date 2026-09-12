> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltargetbehavior/paging](https://developer.apple.com/documentation/swiftui/scrolltargetbehavior/paging)

# paging

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The scroll behavior that aligns scroll targets to container-based geometry.

## Declaration

```swift
@export(implementation) static var paging: PagingScrollTargetBehavior { get }
```

<a id="discussion"></a>

## Discussion

In the following example, every view in the lazy stack is flexible in both directions and the scroll view settles to container-aligned boundaries.

```swift
ScrollView {
    LazyVStack(spacing: 0.0) {
        ForEach(items) { item in
            FullScreenItem(item)
        }
    }
}
.scrollTargetBehavior(.paging)
```

## See Also

### Getting the scroll target behavior

- [viewAligned](viewaligned.md): Conforms when `Self` is `ViewAlignedScrollTargetBehavior`. The scroll behavior that aligns scroll targets to view-based geometry.
- [viewAligned(limitBehavior:)](viewaligned%28limitbehavior_%29.md): Conforms when `Self` is `ViewAlignedScrollTargetBehavior`. The scroll behavior that aligns scroll targets to view-based geometry.
