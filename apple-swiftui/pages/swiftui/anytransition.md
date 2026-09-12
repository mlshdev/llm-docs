> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/anytransition](https://developer.apple.com/documentation/swiftui/anytransition)

# AnyTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A type-erased transition.

## Declaration

```swift
@frozen struct AnyTransition
```

<a id="overview"></a>

## Overview

- See Also: `Transition`

## Topics

### Getting built-in transitions

- [identity](anytransition/identity.md): A transition that returns the input view, unmodified, as the output view.
- [move(edge:)](anytransition/move%28edge_%29.md): Returns a transition that moves the view away, towards the specified edge of the view.
- [offset(\_:)](anytransition/offset%28__%29.md)
- [offset(x:y:)](anytransition/offset%28x_y_%29.md)
- [opacity](anytransition/opacity.md): A transition from transparent to opaque on insertion, and from opaque to transparent on removal.
- [push(from:)](anytransition/push%28from_%29.md): Creates a transition that when added to a view will animate the view’s insertion by moving it in from the specified edge while fading it in, and animate its removal by moving it out towards the opposite edge and fading it out.
- [scale](anytransition/scale.md): Returns a transition that scales the view.
- [scale(scale:anchor:)](anytransition/scale%28scale_anchor_%29.md): Returns a transition that scales the view by the specified amount.
- [slide](anytransition/slide.md): A transition that inserts by moving in from the leading edge, and removes by moving out towards the trailing edge.

### Combining and configuring transitions

- [animation(\_:)](anytransition/animation%28__%29.md): Attaches an animation to this transition.
- [asymmetric(insertion:removal:)](anytransition/asymmetric%28insertion_removal_%29.md): Provides a composite transition that uses a different transition for insertion versus removal.
- [combined(with:)](anytransition/combined%28with_%29.md): Combines this transition with another, returning a new transition that is the result of both transitions being applied.

### Creating a custom transition

- [init(\_:)](anytransition/init%28__%29.md): Create an instance that type-erases `transition`.
- [modifier(active:identity:)](anytransition/modifier%28active_identity_%29.md): Returns a transition defined between an active modifier and an identity modifier.

## See Also

### Defining transitions

- [transition(\_:)](view/transition%28__%29.md): Associates a transition with the view.
- [Transition](transition.md): A description of view changes to apply when a view is added to and removed from the view hierarchy.
- [TransitionProperties](transitionproperties.md): The properties a `Transition` can have.
- [TransitionPhase](transitionphase.md): An indication of which the current stage of a transition.
- [AsymmetricTransition](asymmetrictransition.md): A composite `Transition` that uses a different transition for insertion versus removal.
- [contentTransition(\_:)](view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [contentTransition](environmentvalues/contenttransition.md): The current method of animating the contents of views.
- [contentTransitionAddsDrawingGroup](environmentvalues/contenttransitionaddsdrawinggroup.md): A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.
- [ContentTransition](contenttransition.md): A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.
- [PlaceholderContentView](placeholdercontentview.md): A placeholder used to construct an inline modifier, transition, or other helper type.
