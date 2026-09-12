> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/view/symboleffect(_:options:isactive:)](https://developer.apple.com/documentation/swiftui/view/symboleffect(_:options:isactive:))

# symbolEffect(\_:options:isActive:)

**Framework:** SwiftUI  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Returns a new view with a symbol effect added to it.

## Declaration

```swift
@export(implementation) nonisolated func symbolEffect<T>(_ effect: T, options: SymbolEffectOptions = .default, isActive: Bool = true) -> some View where T : IndefiniteSymbolEffect, T : SymbolEffect

```

## Parameters

- `effect`: A symbol effect to add to the view. Existing effects added by ancestors of the view are preserved, but may be overridden by the new effect. Added effects will be applied to the [Image](../image.md) views contained by the child view.
- `isActive`: Whether the effect is active or inactive.

<a id="return-value"></a>

## Return Value

A copy of the view with a symbol effect added.

<a id="discussion"></a>

## Discussion

The following example adds a repeating pulse effect to two symbol images:

```swift
VStack {
    Image(systemName: "bolt.slash.fill")
    Image(systemName: "folder.fill.badge.person.crop")
}
.symbolEffect(.pulse)
```

## See Also

### Managing symbol effects

- [symbolEffect(\_:options:value:)](symboleffect%28__options_value_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffectsRemoved(\_:)](symboleffectsremoved%28__%29.md): Returns a new view with its inherited symbol image effects either removed or left unchanged.
- [SymbolEffectTransition](../symboleffecttransition.md): Creates a transition that applies the Appear, Disappear, DrawOn or DrawOff symbol animation to symbol images within the inserted or removed view hierarchy.
