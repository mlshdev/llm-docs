> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/asymmetrictransition](https://developer.apple.com/documentation/swiftui/asymmetrictransition)

# AsymmetricTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A composite `Transition` that uses a different transition for insertion versus removal.

## Declaration

```swift
nonisolated struct AsymmetricTransition<Insertion, Removal> where Insertion : Transition, Removal : Transition
```

## Topics

### Creating the transition

- [init(insertion:removal:)](asymmetrictransition/init%28insertion_removal_%29.md): Creates a composite `Transition` that uses a different transition for insertion versus removal.

### Getting transition properties

- [insertion](asymmetrictransition/insertion.md): The `Transition` defining the insertion phase of `self`.
- [removal](asymmetrictransition/removal.md): The `Transition` defining the removal phase of `self`.

## Relationships

### Conforms To

- [Transition](transition.md)

## See Also

### Defining transitions

- [transition(\_:)](view/transition%28__%29.md): Associates a transition with the view.
- [Transition](transition.md): A description of view changes to apply when a view is added to and removed from the view hierarchy.
- [TransitionProperties](transitionproperties.md): The properties a `Transition` can have.
- [TransitionPhase](transitionphase.md): An indication of which the current stage of a transition.
- [AnyTransition](anytransition.md): A type-erased transition.
- [contentTransition(\_:)](view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [contentTransition](environmentvalues/contenttransition.md): The current method of animating the contents of views.
- [contentTransitionAddsDrawingGroup](environmentvalues/contenttransitionaddsdrawinggroup.md): A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.
- [ContentTransition](contenttransition.md): A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.
- [PlaceholderContentView](placeholdercontentview.md): A placeholder used to construct an inline modifier, transition, or other helper type.
