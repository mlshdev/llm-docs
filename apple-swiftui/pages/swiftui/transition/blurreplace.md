> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/transition/blurreplace](https://developer.apple.com/documentation/swiftui/transition/blurreplace)

# blurReplace

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A transition that animates the insertion or removal of a view by combining blurring and scaling effects.

## Declaration

```swift
@MainActor @export(implementation) @preconcurrency static var blurReplace: BlurReplaceTransition { get }
```

## See Also

### Getting built-in transitions

- [blurReplace(\_:)](blurreplace%28__%29.md): Conforms when `Self` is `BlurReplaceTransition`. A transition that animates the insertion or removal of a view by combining blurring and scaling effects.
- [identity](identity.md): Conforms when `Self` is `IdentityTransition`. A transition that returns the input view, unmodified, as the output view.
- [move(edge:)](move%28edge_%29.md): Conforms when `Self` is `MoveTransition`. Returns a transition that moves the view away, towards the specified edge of the view.
- [offset(\_:)](offset%28__%29.md): Conforms when `Self` is `OffsetTransition`. Returns a transition that offset the view by the specified amount.
- [offset(x:y:)](offset%28x_y_%29.md): Conforms when `Self` is `OffsetTransition`. Returns a transition that offset the view by the specified x and y values.
- [opacity](opacity.md): Conforms when `Self` is `OpacityTransition`. A transition from transparent to opaque on insertion, and from opaque to transparent on removal.
- [push(from:)](push%28from_%29.md): Conforms when `Self` is `PushTransition`. Creates a transition that when added to a view will animate the view’s insertion by moving it in from the specified edge while fading it in, and animate its removal by moving it out towards the opposite edge and fading it out.
- [scale](scale.md): Conforms when `Self` is `ScaleTransition`. Returns a transition that scales the view.
- [scale(\_:anchor:)](scale%28__anchor_%29.md): Conforms when `Self` is `ScaleTransition`. Returns a transition that scales the view by the specified amount.
- [slide](slide.md): Conforms when `Self` is `SlideTransition`. A transition that inserts by moving in from the leading edge, and removes by moving out towards the trailing edge.
- [symbolEffect](symboleffect.md): Conforms when `Self` is `SymbolEffectTransition`. A transition that applies the default symbol effect transition to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
- [symbolEffect(\_:options:)](symboleffect%28__options_%29.md): Conforms when `Self` is `SymbolEffectTransition`. Creates a transition that applies the provided effect to symbol images within the inserted or removed view hierarchy. Other views are unaffected by this transition.
