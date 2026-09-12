> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/symboleffecttransition](https://developer.apple.com/documentation/swiftui/symboleffecttransition)

# SymbolEffectTransition

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Creates a transition that applies the Appear, Disappear, DrawOn or DrawOff symbol animation to symbol images within the inserted or removed view hierarchy.

## Declaration

```swift
@MainActor @frozen @preconcurrency struct SymbolEffectTransition
```

<a id="overview"></a>

## Overview

Other views are unaffected by this transition.

## Topics

### Creating a transition

- [init(effect:options:)](symboleffecttransition/init%28effect_options_%29.md)

## Relationships

### Conforms To

- [Transition](transition.md)

## See Also

### Managing symbol effects

- [symbolEffect(\_:options:isActive:)](view/symboleffect%28__options_isactive_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffect(\_:options:value:)](view/symboleffect%28__options_value_%29.md): Returns a new view with a symbol effect added to it.
- [symbolEffectsRemoved(\_:)](view/symboleffectsremoved%28__%29.md): Returns a new view with its inherited symbol image effects either removed or left unchanged.
