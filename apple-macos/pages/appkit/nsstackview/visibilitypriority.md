> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/visibilitypriority](https://developer.apple.com/documentation/appkit/nsstackview/visibilitypriority)

# NSStackView.VisibilityPriority (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 10.9+

The various Auto Layout priorities for a view in the stack view to remain attached.

## Declaration

```swift
struct VisibilityPriority
```

<a id="Discussion"></a>

## Discussion

For an explanation of how visibility priority interacts with clipping resistance to determine the detachment behavior of a stack view’s views, see the discussions for the [setClippingResistancePriority(\_:for:)](setclippingresistancepriority%28__for_%29.md) and [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md) methods.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

## Topics

### Initializers

- [init(\_:)](visibilitypriority/init%28__%29.md)
- [init(rawValue:)](visibilitypriority/init%28rawvalue_%29.md)

### Priorities

- [mustHold](visibilitypriority/musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [detachOnlyIfNecessary](visibilitypriority/detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.
- [notVisible](visibilitypriority/notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Comparable](https://developer.apple.com/documentation/swift/comparable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring Views in a Stack View

- [customSpacing(after:)](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing(\_:after:)](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriority(for:)](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority(\_:for:)](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [useDefaultSpacing](usedefaultspacing.md)

# NSStackViewVisibilityPriority (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS 10.9+

The various Auto Layout priorities for a view in the stack view to remain attached.

## Declaration

```objectivec
typedef float NSStackViewVisibilityPriority;
```

<a id="Discussion"></a>

## Discussion

For an explanation of how visibility priority interacts with clipping resistance to determine the detachment behavior of a stack view’s views, see the discussions for the [setClippingResistancePriority:forOrientation:](setclippingresistancepriority%28__for_%29.md) and [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md) methods.

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

## Topics

### Priorities

- [NSStackViewVisibilityPriorityMustHold](visibilitypriority/musthold.md): The default value, and maximum Auto Layout priority, that results in a view never detaching from the stack view.
- [NSStackViewVisibilityPriorityDetachOnlyIfNecessary](visibilitypriority/detachonlyifnecessary.md): The Auto Layout priority that results in detachment of a view when there is insufficient space in the stack view to display it fully.
- [NSStackViewVisibilityPriorityNotVisible](visibilitypriority/notvisible.md): The minimum Auto Layout priority that forces a view to detach from the stack view.

## See Also

### Configuring Views in a Stack View

- [customSpacingAfterView:](customspacing%28after_%29.md): Returns the custom spacing, in points, between a specified view in the stack view and the view that follows it.
- [setCustomSpacing:afterView:](setcustomspacing%28__after_%29.md): Specifies the custom spacing, in points, between a specified view and the view that follows it in the stack view.
- [visibilityPriorityForView:](visibilitypriority%28for_%29.md): Returns the visibility priority for a specified view in the stack view.
- [setVisibilityPriority:forView:](setvisibilitypriority%28__for_%29.md): Sets the Auto Layout priority for a view to remain attached to the stack view when Auto Layout reduces the stack view’s size.
- [NSStackViewSpacingUseDefault](usedefaultspacing.md)
