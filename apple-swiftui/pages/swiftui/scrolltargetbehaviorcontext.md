> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltargetbehaviorcontext](https://developer.apple.com/documentation/swiftui/scrolltargetbehaviorcontext)

# ScrollTargetBehaviorContext

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The context in which a scroll target behavior updates its scroll target.

## Declaration

```swift
@dynamicMemberLookup struct ScrollTargetBehaviorContext
```

## Topics

### Getting the scroll target behavior context

- [axes](scrolltargetbehaviorcontext/axes.md): The axes in which the scrollable view is scrollable.
- [containerSize](scrolltargetbehaviorcontext/containersize.md): The size of the container of the scrollable view.
- [contentSize](scrolltargetbehaviorcontext/contentsize.md): The size of the content of the scrollable view.
- [originalTarget](scrolltargetbehaviorcontext/originaltarget.md): The original target when the scroll gesture began.
- [velocity](scrolltargetbehaviorcontext/velocity.md): The current velocity of the scrollable view’s scroll gesture.

### Accessing the context

- [subscript(dynamicMember:)](scrolltargetbehaviorcontext/subscript%28dynamicmember_%29.md)

## See Also

### Defining scroll targets

- [scrollTargetBehavior(\_:)](view/scrolltargetbehavior%28__%29.md): Sets the scroll behavior of views scrollable in the provided axes.
- [scrollTargetLayout(isEnabled:)](view/scrolltargetlayout%28isenabled_%29.md): Configures the outermost layout as a scroll target layout.
- [ScrollTarget](scrolltarget.md): A type defining the target in which a scroll view should try and scroll to.
- [ScrollTargetBehavior](scrolltargetbehavior.md): A type that defines the scroll behavior of a scrollable view.
- [PagingScrollTargetBehavior](pagingscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to container-based geometry.
- [ViewAlignedScrollTargetBehavior](viewalignedscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to view-based geometry.
- [AnyScrollTargetBehavior](anyscrolltargetbehavior.md): A type-erased scroll target behavior.
- [ScrollTargetBehaviorProperties](scrolltargetbehaviorproperties.md): Properties influencing the scroll view a scroll target behavior applies to.
- [ScrollTargetBehaviorPropertiesContext](scrolltargetbehaviorpropertiescontext.md): The context in which a scroll target behavior can decide its properties.
