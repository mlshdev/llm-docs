> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/contenttransition](https://developer.apple.com/documentation/swiftui/contenttransition)

# ContentTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A kind of transition that applies to the content within a single view, rather than to the insertion or removal of a view.

## Declaration

```swift
struct ContentTransition
```

<a id="overview"></a>

## Overview

Set the behavior of content transitions within a view with the [contentTransition(\_:)](view/contenttransition%28__%29.md) modifier, passing in one of the defined transitions, such as [opacity](contenttransition/opacity.md) or [interpolate](contenttransition/interpolate.md) as the parameter.

> **Tip**

> Content transitions only take effect within transactions that apply an [Animation](animation.md) to the views inside the [contentTransition(\_:)](view/contenttransition%28__%29.md) modifier.

Content transitions only take effect within the context of an [Animation](animation.md) block.

## Topics

### Getting content transitions

- [identity](contenttransition/identity.md): The identity content transition, which indicates that content changes shouldn’t animate.
- [interpolate](contenttransition/interpolate.md): A content transition that indicates the views attempt to interpolate their contents during transitions, where appropriate.
- [numericText(countsDown:)](contenttransition/numerictext%28countsdown_%29.md): Creates a content transition intended to be used with `Text` views displaying numeric text. In certain environments changes to the text will enable a nonstandard transition tailored to numeric characters that count up or down.
- [numericText(value:)](contenttransition/numerictext%28value_%29.md): Creates a content transition intended to be used with `Text` views displaying numbers.
- [opacity](contenttransition/opacity.md): A content transition that indicates content fades from transparent to opaque on insertion, and from opaque to transparent on removal.
- [symbolEffect](contenttransition/symboleffect.md): A content transition that applies the default symbol effect transition to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
- [symbolEffect(\_:options:)](contenttransition/symboleffect%28__options_%29.md): Creates a content transition that applies the symbol Replace animation to symbol images that it is applied to.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Defining transitions

- [transition(\_:)](view/transition%28__%29.md): Associates a transition with the view.
- [Transition](transition.md): A description of view changes to apply when a view is added to and removed from the view hierarchy.
- [TransitionProperties](transitionproperties.md): The properties a `Transition` can have.
- [TransitionPhase](transitionphase.md): An indication of which the current stage of a transition.
- [AsymmetricTransition](asymmetrictransition.md): A composite `Transition` that uses a different transition for insertion versus removal.
- [AnyTransition](anytransition.md): A type-erased transition.
- [contentTransition(\_:)](view/contenttransition%28__%29.md): Modifies the view to use a given transition as its method of animating changes to the contents of its views.
- [contentTransition](environmentvalues/contenttransition.md): The current method of animating the contents of views.
- [contentTransitionAddsDrawingGroup](environmentvalues/contenttransitionaddsdrawinggroup.md): A Boolean value that controls whether views that render content transitions use GPU-accelerated rendering.
- [PlaceholderContentView](placeholdercontentview.md): A placeholder used to construct an inline modifier, transition, or other helper type.
