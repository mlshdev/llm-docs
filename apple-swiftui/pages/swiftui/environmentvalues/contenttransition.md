> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/environmentvalues/contenttransition](https://developer.apple.com/documentation/swiftui/environmentvalues/contenttransition)

# contentTransition

**Framework:** SwiftUI  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

The current method of animating the contents of views.

## Declaration

```swift
var contentTransition: ContentTransition { get set }
```

## See Also

### Defining transitions

- [transition(\_:)](../view/transition%28__%29.md): Associates a transition with the view.
- [Transition](../transition.md): A description of view changes to apply when a view is added to and removed from the view hierarchy.
- [TransitionProperties](../transitionproperties.md): The properties a `Transition` can have.
- [TransitionPhase](../transitionphase.md): An indication of which the current stage of a transition.
- [AsymmetricTransition](../asymmetrictransition.md): A composite `Transition` that uses a different transition for insertion versus removal.
- [AnyTransition](../anytransition.md): A type-erased transition.
- [contentTransition(\_:)](../view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [contentTransitionAddsDrawingGroup](contenttransitionaddsdrawinggroup.md): A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.
- [ContentTransition](../contenttransition.md): A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.
- [PlaceholderContentView](../placeholdercontentview.md): A placeholder used to construct an inline modifier, transition, or other helper type.
