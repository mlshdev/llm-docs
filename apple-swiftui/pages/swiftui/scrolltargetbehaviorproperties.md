> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/scrolltargetbehaviorproperties](https://developer.apple.com/documentation/swiftui/scrolltargetbehaviorproperties)

# ScrollTargetBehaviorProperties

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+ · macOS 15.4+ · tvOS 18.4+ · visionOS 2.4+ · watchOS 11.4+

Properties influencing the scroll view a scroll target behavior applies to.

## Declaration

```swift
struct ScrollTargetBehaviorProperties
```

## Topics

### Initializers

- [init()](scrolltargetbehaviorproperties/init%28%29.md): Creates a default set of properties.

### Instance Properties

- [limitsScrolls](scrolltargetbehaviorproperties/limitsscrolls.md): Whether this scroll target behavior should limit the distance a scroll view scrolls by default. When enabled, the scroll view prefers to scroll a shorter distance. By default, this is not enabled.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining scroll targets

- [scrollTargetBehavior(\_:)](view/scrolltargetbehavior%28__%29.md): Sets the scroll behavior of views scrollable in the provided axes.
- [scrollTargetLayout(isEnabled:)](view/scrolltargetlayout%28isenabled_%29.md): Configures the outermost layout as a scroll target layout.
- [ScrollTarget](scrolltarget.md): A type defining the target in which a scroll view should try and scroll to.
- [ScrollTargetBehavior](scrolltargetbehavior.md): A type that defines the scroll behavior of a scrollable view.
- [ScrollTargetBehaviorContext](scrolltargetbehaviorcontext.md): The context in which a scroll target behavior updates its scroll target.
- [PagingScrollTargetBehavior](pagingscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to container-based geometry.
- [ViewAlignedScrollTargetBehavior](viewalignedscrolltargetbehavior.md): The scroll behavior that aligns scroll targets to view-based geometry.
- [AnyScrollTargetBehavior](anyscrolltargetbehavior.md): A type-erased scroll target behavior.
- [ScrollTargetBehaviorPropertiesContext](scrolltargetbehaviorpropertiescontext.md): The context in which a scroll target behavior can decide its properties.
