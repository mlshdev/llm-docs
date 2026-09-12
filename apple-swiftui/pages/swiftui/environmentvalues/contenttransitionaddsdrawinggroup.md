> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/contenttransitionaddsdrawinggroup](https://developer.apple.com/documentation/swiftui/environmentvalues/contenttransitionaddsdrawinggroup)

# contentTransitionAddsDrawingGroup

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.

## Declaration

```swift
var contentTransitionAddsDrawingGroup: Bool { get set }
```

<a id="discussion"></a>

## Discussion

Setting this value to `true` causes SwiftUI to wrap content transitions with a [drawingGroup(opaque:colorMode:)](../view/drawinggroup%28opaque_colormode_%29.md) modifier.

## See Also

### Defining transitions

- [transition(\_:)](../view/transition%28__%29.md): Associates a transition with the view.
- [Transition](../transition.md): A description of view changes to apply when a view is added to and removed from the view hierarchy.
- [TransitionProperties](../transitionproperties.md): The properties a `Transition` can have.
- [TransitionPhase](../transitionphase.md): An indication of which the current stage of a transition.
- [AsymmetricTransition](../asymmetrictransition.md): A composite `Transition` that uses a different transition for insertion versus removal.
- [AnyTransition](../anytransition.md): A type-erased transition.
- [contentTransition(\_:)](../view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [contentTransition](contenttransition.md): The current method of animating the contents of views.
- [ContentTransition](../contenttransition.md): A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.
- [PlaceholderContentView](../placeholdercontentview.md): A placeholder used to construct an inline modifier, transition, or other helper type.
