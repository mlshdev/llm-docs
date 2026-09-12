> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltarget](https://developer.apple.com/documentation/swiftui/scrolltarget)

# ScrollTarget

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type defining the target in which a scroll view should try and scroll to.

## Declaration

```swift
struct ScrollTarget
```

## Topics

### Getting the scroll target

- [anchor](scrolltarget/anchor.md): The anchor to which the rect should be aligned within the visible region of the scrollable view.
- [rect](scrolltarget/rect.md): The rect that a scrollable view should try and have contained.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Defining scroll targets

- [scrollTargetBehavior(\_:)](view/scrolltargetbehavior%28__%29.md): Sets the scroll behavior of views scrollable in the provided axes.
- [scrollTargetLayout(isEnabled:)](view/scrolltargetlayout%28isenabled_%29.md): Configures the outermost layout as a scroll target layout.
- [ScrollTargetBehavior](scrolltargetbehavior.md): A type that defines the scroll behavior of a scrollable view.
- [ScrollTargetBehaviorContext](scrolltargetbehaviorcontext.md): The context in which a scroll target behavior updates its scroll target.
- [PagingScrollTargetBehavior](pagingscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to container-based geometry.
- [ViewAlignedScrollTargetBehavior](viewalignedscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to view-based geometry.
- [AnyScrollTargetBehavior](anyscrolltargetbehavior.md): A type-erased scroll target behavior.
- [ScrollTargetBehaviorProperties](scrolltargetbehaviorproperties.md): Properties influencing the scroll view a scroll target behavior applies to.
- [ScrollTargetBehaviorPropertiesContext](scrolltargetbehaviorpropertiescontext.md): The context in which a scroll target behavior can decide its properties.
