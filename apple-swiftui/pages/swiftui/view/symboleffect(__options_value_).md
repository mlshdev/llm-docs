> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/symboleffect(_:options:value:)](https://developer.apple.com/documentation/swiftui/view/symboleffect(_:options:value:))

# symbolEffect(\_:options:value:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new view with a symbol effect added to it.

## Declaration

```swift
@export(implementation) nonisolated func symbolEffect<T, U>(_ effect: T, options: SymbolEffectOptions = .default, value: U) -> some View where T : DiscreteSymbolEffect, T : SymbolEffect, U : Equatable

```

## Parameters

- `effect`: A symbol effect to add to the view. Existing effects added by ancestors of the view are preserved, but may be overridden by the new effect. Added effects will be applied to the [Image](../image.md) views contained by the child view.
- `value`: The value to monitor for changes, the animation is triggered each time the value changes.

<a id="return-value"></a>

## Return Value

A copy of the view with a symbol effect added.

<a id="discussion"></a>

## Discussion

The following example adds a bounce effect to two symbol images, the animation will play each time `counter` changes:

```swift
VStack {
    Image(systemName: "bolt.slash.fill")
    Image(systemName: "folder.fill.badge.person.crop")
}
.symbolEffect(.bounce, value: counter)
```

## See Also

### Managing symbol effects

- [symbolEffect(\_:options:isActive:)](symboleffect%28__options_isactive_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffectsRemoved(\_:)](symboleffectsremoved%28__%29.md): Returns a new view with its inherited symbol image effects either removed or left unchanged.
- [SymbolEffectTransition](../symboleffecttransition.md): Creates a transition that applies the Appear, Disappear, DrawOn or DrawOff symbol animation to symbol images within the inserted or removed view hierarchy.
